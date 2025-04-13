package SimpleJDBCExample.src.com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

public class SimpleJDBCExample {

    public static void getAll(Connection con) throws SQLException{
            String query = "select * from EMPLOYEE";
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                int empID = rs.getInt("ID");
                String first = rs.getString("firstname");
                String last = rs.getString("lastname");
                Date birth_date = rs.getDate("birthdate");
                float salary = rs.getFloat("salary");
                System.out.println("Employee ID:   " + empID + "\n"
                        + "Employee Name: " + first.trim() + " " + last.trim() + "\n"
                        + "Birth Date:    " + birth_date + "\n"
                        + "Salary:        " + salary + "\n");

            }


    }
    public static void addNewEmolyee(Connection con,Integer id,String firstname,String lastname,String s_birthday,double  salary) throws SQLException{
        String query="insert into Employee values("+Integer.toString(id)+", \'"+firstname+"\', \'"+lastname+"\', \'"+s_birthday+"\', "+Double.toString(salary)+")";
        Statement stmt = con.createStatement();
        stmt.executeUpdate(query);
    }
    public static void deleteByID(Connection con, Integer id) throws SQLException {
        String query = "DELETE FROM Employee WHERE id="+Integer.toString(id);
        Statement st=con.createStatement();
        st.executeUpdate(query);
    }
    public static void main(String[] args) {
        // Create the "url"
        // assume database server is running on the localhost
        String url = "jdbc:postgresql://localhost:5432/OOP";
        String username = "postgres";
        String password = "1234";

        // Create a simple query

        // A try-with-resources example
        // Connection and Statement implement java.lan.AutoCloseable
        try (Connection con = DriverManager.getConnection(url, username, password)) {
            // addNewEmolyee(con,3, "Test1", "Testing1", "01/01/2000", 2000.00);
            // deleteByID(con, 0);
            getAll(con);
        } catch (SQLException e) {
            System.out.println("Exception creating connection: " + e);
            System.exit(0);
        }
        
        // No need to close the Connection and Statement objects, the compiler
        // will generate these for us and call the close() statement on this
        // objects in the order we obtained them in the try
    }
}