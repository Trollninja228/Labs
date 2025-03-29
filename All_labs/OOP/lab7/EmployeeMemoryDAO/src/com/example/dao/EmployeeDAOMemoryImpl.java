package EmployeeMemoryDAO.src.com.example.dao;

import java.util.ArrayList;
import java.util.List;

import EmployeeMemoryDAO.src.com.example.model.Employee;

public class EmployeeDAOMemoryImpl implements EmployeeDAO {
    protected EmployeeDAOMemoryImpl(){
        
    }
    private static Employee[] employeeArray = new Employee[10];

    // Save our Employee record
    public void add(Employee emp) {
        employeeArray[emp.getId()]=emp;
    }

    public void update(Employee emp){

    }
    // Delete our employee record
    public void delete(int ID) {
        employeeArray[ID] = null;
    }

    // Find an Employee record using this ID
    public Employee findById(int id) {
        return employeeArray[id];
    }

    // Return an array of all of the Employee records
    // We are using a collection List object to store the results
    // This makes it easier to just add to the collection
    public Employee[] getAllEmployees() {
        List<Employee> emps = new ArrayList<>();
        // Iterate through the memory array and find Employee objects
        for (Employee e : employeeArray) {
            if (e != null) {
                emps.add(e);
            }
        }
        return emps.toArray(new Employee[0]);
    }
    
}