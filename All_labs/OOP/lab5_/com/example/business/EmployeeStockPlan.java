package com.example.business;
import origin.*;
import com.domain.example.*;
public class EmployeeStockPlan{
    private final int employeeShares = 10;
    private final int managerShares = 100;
    private final int directorShares = 1000;

    public int grantStock(Employee t){
        if(t instanceof Director){
            return directorShares;
        }else if(t instanceof Manager){
            return managerShares;
        }else{
            return employeeShares;
        }
    }
    
}