package src;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.event.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.awt.*;

public class StudentRegistration extends JFrame {

    JTextField txtName, txtMobile, txtCourse;
    JButton btnAdd, btnEdit, btnDelete;
    JTable table;
    DefaultTableModel model;

    StudentRegistration() {
        setTitle("Student Registration");
        setLayout(null);
        setSize(800, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel lblTitle = new JLabel("Student Registration");
        lblTitle.setFont(new Font("Arial", Font.BOLD, 24));
        lblTitle.setBounds(280, 10, 300, 30);
        add(lblTitle);

        JLabel lblName = new JLabel("Student Name");
        JLabel lblMobile = new JLabel("Mobile");
        JLabel lblCourse = new JLabel("Course");

        txtName = new JTextField();
        txtMobile = new JTextField();
        txtCourse = new JTextField();

        lblName.setBounds(30, 60, 100, 25);
        lblMobile.setBounds(30, 100, 100, 25);
        lblCourse.setBounds(30, 140, 100, 25);

        txtName.setBounds(150, 60, 150, 25);
        txtMobile.setBounds(150, 100, 150, 25);
        txtCourse.setBounds(150, 140, 150, 25);

        add(lblName); add(txtName);
        add(lblMobile); add(txtMobile);
        add(lblCourse); add(txtCourse);

        btnAdd = new JButton("Add");
        btnEdit = new JButton("Edit");
        btnDelete = new JButton("Delete");

        btnAdd.setBounds(30, 180, 80, 25);
        btnEdit.setBounds(120, 180, 80, 25);
        btnDelete.setBounds(210, 180, 90, 25);

        add(btnAdd); add(btnEdit); add(btnDelete);

        model = new DefaultTableModel();
        model.setColumnIdentifiers(new String[]{"ID", "Name", "Mobile", "Course"});
        table = new JTable(model);
        JScrollPane pane = new JScrollPane(table);
        pane.setBounds(330, 60, 440, 250);
        add(pane);

        btnAdd.addActionListener(e -> {
            try {
                Connection conn = DBConnection.getConnection();
                String sql = "INSERT INTO Jtable(name, mobile, course) VALUES (?, ?, ?)";
                PreparedStatement pst = conn.prepareStatement(sql);
                pst.setString(1, txtName.getText());
                pst.setString(2, txtMobile.getText());
                pst.setString(3, txtCourse.getText());
                pst.executeUpdate();
                pst.close();
                conn.close();
                loadTableData();
                clearFields();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        });


        btnEdit.addActionListener(e -> {
            int selected = table.getSelectedRow();
            if (selected >= 0) {
                int id = (int) model.getValueAt(selected, 0);
                try {
                    Connection conn = DBConnection.getConnection();
                    String sql = "UPDATE Jtable SET name=?, mobile=?, course=? WHERE id=?";
                    PreparedStatement pst = conn.prepareStatement(sql);
                    pst.setString(1, txtName.getText());
                    pst.setString(2, txtMobile.getText());
                    pst.setString(3, txtCourse.getText());
                    pst.setInt(4, id);
                    pst.executeUpdate();
                    pst.close();
                    conn.close();
                    loadTableData();
                    clearFields();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        });
        

        btnDelete.addActionListener(e -> {
            int selected = table.getSelectedRow();
            if (selected >= 0) {
                int id = (int) model.getValueAt(selected, 0);
                try {
                    Connection conn = DBConnection.getConnection();
                    String sql = "DELETE FROM Jtable WHERE id=?";
                    PreparedStatement pst = conn.prepareStatement(sql);
                    pst.setInt(1, id);
                    pst.executeUpdate();
                    pst.close();
                    conn.close();
                    loadTableData();
                    clearFields();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        });
        

        table.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int selected = table.getSelectedRow();
                txtName.setText(model.getValueAt(selected, 1).toString());
                txtMobile.setText(model.getValueAt(selected, 2).toString());
                txtCourse.setText(model.getValueAt(selected, 3).toString());
            }
        });

        setVisible(true);

        loadTableData();
    }

    void clearFields() {
        txtName.setText("");
        txtMobile.setText("");
        txtCourse.setText("");
    }

    private void loadTableData() {
        try {
            Connection conn = DBConnection.getConnection();
            java.sql.Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Jtable");
    
            model.setRowCount(0); 
            while (rs.next()) {
                model.addRow(new Object[]{
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getString("mobile"),
                    rs.getString("course")
                });
            }
    
            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    
    

    public static void main(String[] args) {
        new StudentRegistration();
    }
}
