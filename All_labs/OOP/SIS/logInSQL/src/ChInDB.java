package src;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.spi.DirStateFactory.Result;

public class ChInDB {
    public static boolean authenticate(String login,String password){
        String url="jdbc:postgresql://localhost:5432/OOP";
        String user="postgres";
        String pass="1234";

        try(Connection con=DriverManager.getConnection(url, user, pass)) {
            // System.out.println("TEST");
            String query = "SELECT * FROM accounts WHERE account_login=? AND account_password=?";
            PreparedStatement ps=con.prepareStatement(query);
            // System.out.println("TEST2");
            ps.setString(1, login);
            ps.setString(2, password);
            System.out.println(ps);
            ResultSet rs = ps.executeQuery();
            // System.out.println("Test3");
            boolean exist = rs.next();
            // System.out.println("Test4");

            rs.close();
            ps.close();
            con.close();
            return exist;
        }catch(SQLException se){
            System.out.println("Error of link to DB!"+se.getMessage());
            return false;
        }
    }
}
