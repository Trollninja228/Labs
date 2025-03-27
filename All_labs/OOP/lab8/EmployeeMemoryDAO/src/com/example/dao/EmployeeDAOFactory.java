package EmployeeMemoryDAO.src.com.example.dao;

public class EmployeeDAOFactory {
    public EmployeeDAO creatEmployeeDAO(){
        return new EmployeeDAOMemoryImpl();
    }
}
