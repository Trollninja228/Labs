package EmployeeDAOJDBC.src.com.example.dao;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import EmployeeDAOJDBC.src.com.example.model.Employee;

public class EmployeeDAOJDBCImpl implements EmployeeDAO{

    private Connection con=null;

    EmployeeDAOJDBCImpl(){
        String url ="jdbc:postgresql://localhost:5432/OOP";
        String username = "postgres";
        String password = "1234";

        try{
            con=DriverManager.getConnection(url, username, password);
        }catch(SQLException se){
            System.out.println("System.out.println(\"Error obtaining connection with thedatabase: "+se);
            System.exit(-1);
        }
    }
    @Override
    public void close() throws Exception,SQLException {
        try{
            con.close();
        }catch(SQLException se){
            System.out.println("Exception closing connenction:"+se);

        }
    }

    @Override
    public void add(Employee emp) throws SQLException, DAOException {
        try( Statement st=con.createStatement()){
            String query = "INSERT INTO EMPLOYEE VALUES (" + emp.getId()+ ", '" + emp.getFirstName() + "', "+ "'" + emp.getLastName() + "', "+ "'" +new java.sql.Date(emp.getBirthDate().getTime()) + "', "+ emp.getSalary() + ")";
            if (st.executeUpdate(query) != 1) {
                throw new DAOException("Error adding employee");
            }
        } catch(SQLException se){
            throw new DAOException("Error adding Employee");
        }
        
    }

    @Override
    public void update(Employee emp) throws DAOException,SQLException {
        try(Statement st =con.createStatement()){
            String query = "UPDATE EMPLOYEE + SET FIRSTNAME='" + emp.getFirstName() + "',"+ "LASTNAME='" + emp.getLastName() + "',"+ "BIRTHDATE='" + new java.sql.Date(emp.getBirthDate().getTime()) + "',SALARY=" + emp.getSalary()+ "WHERE ID=" + emp.getId();
            if(st.executeUpdate(query)!=1){ 
                throw new DAOException("Error updating employee");
            }
        }catch(SQLException se){
            throw new DAOException("Error updating employee in DAO",se);        
        }
    }

    @Override
    public void delete(int id) throws DAOException,SQLException {
        Employee emp = findById(id);
        if (emp == null) {
        throw new DAOException("Employee id: " + id + " does not exist to delete.");
        }
        try(Statement stmt = con.createStatement()){
            String query = "DELETE FROM EMPLOYEE WHERE ID=" + id;
            if (stmt.executeUpdate (query) != 1) {
                throw new DAOException("Error deleting employee");
            }
        }catch(SQLException se){
            throw new DAOException("Error deleting in Emplyee",se);
        }
    }

    @Override
    public Employee findById(int id) throws DAOException,SQLException {
        try(Statement st =con.createStatement()){
            String query="SELECT * FROM EMPLOYEE WHERE ID="+id;
            ResultSet rs= st.executeQuery(query);
            if(!rs.next()){
                return null;
            }
            return (new Employee(rs.getInt("ID"),rs.getString("FIRSTNAME"),rs.getString("LASTNAME"),rs.getDate("BIRTHDATE"),rs.getInt("SALARY")));

        }catch(SQLException se){
            throw new DAOException("Error finding employee in DAO",se);
        }
    }

    @Override
    public Employee[] getAllEmployees() throws DAOException,SQLException {
        try(Statement stmt = con.createStatement()){
            String query = "SELECT * From EMPLOYEE";
            ResultSet rs= stmt.executeQuery(query);
            ArrayList<Employee> emps = new ArrayList<>();
            while(rs.next()){
                emps.add(new Employee (rs.getInt("ID"),rs.getString("FIRSTNAME"),rs.getString("LASTNAME"),rs.getDate("BIRTHDATE"),rs.getFloat("SALARY")));
            }
            return emps.toArray(new Employee[0]);
        }catch(SQLException se){
            throw new DAOException("Error deleting in Emplyee",se);
        }
    }
    
}
