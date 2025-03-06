import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.HashMap;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;


public class LoginPage implements ActionListener {
    
    JFrame frame = new JFrame();
    JButton resetButton = new JButton("Reset");
    JButton logButton = new JButton("Login");
    JTextField IDField = new JTextField();
    JPasswordField PasswordField = new JPasswordField();
    JLabel IDLabel =new JLabel("User ID:");
    JLabel PasswordLabel = new JLabel("Password");
    JLabel MessageLabel = new JLabel("Test");


    HashMap<String, String> logInfo = new HashMap<String, String>();

    LoginPage(HashMap<String, String> logInfoOri){
        
        logInfo = logInfoOri;

        IDLabel.setBounds(50,100,75,25);
        PasswordLabel.setBounds(50,150,75,25);
        MessageLabel.setBounds(125, 250, 250, 35);
        MessageLabel.setFont(new Font(null, Font.ITALIC,25));

        IDField.setBounds(125,100,200,25);
        PasswordField.setBounds(125,150,200,25);

        logButton.setBounds(125,200,100, 25);
        logButton.setFocusable(false);
        logButton.addActionListener(this);

        resetButton.setBounds(225,200,100, 25);
        resetButton.setFocusable(false);
        resetButton.addActionListener(this);

        frame.add(IDLabel);
        frame.add(PasswordLabel);
        frame.add(MessageLabel);
        frame.add(IDField);
        frame.add(PasswordField);
        frame.add(logButton);
        frame.add(resetButton);

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420,420);
        frame.setLayout(null);
        frame.setVisible(true);

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource()==resetButton){
            IDField.setText("");
            PasswordField.setText("");
        }else
        if (e.getSource()==logButton){

            String ID = IDField.getText();
            String pass = String.valueOf( PasswordField.getPassword());

            IDField.setText("");
            PasswordField.setText("");

            if(logInfo.containsKey(ID)){
                
            }
        }
    }
    public static void main(String[] args){
        LoginPage l = new LoginPage(new HashMap());
    }
}
