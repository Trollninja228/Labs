package EmployeeDAOJDBC.src.com.example.dao;

import java.sql.SQLException;

import EmployeeDAOJDBC.src.com.example.model.Employee;

public interface EmployeeDAO extends AutoCloseable {

    public void add(Employee emp) throws DAOException, SQLException;

    public void update(Employee emp) throws DAOException, SQLException;

    public void delete(int id) throws DAOException, SQLException;

    public Employee findById(int id) throws DAOException, SQLException;

    public Employee[] getAllEmployees() throws DAOException, SQLException;
    
}