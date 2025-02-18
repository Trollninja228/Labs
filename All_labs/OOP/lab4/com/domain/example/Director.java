package com.domain.example;
import origin.Manager;
import origin.Employee;

public class Director extends Manager {
    private double budget;

    public Director(int empID, String name, String ssn, double salary, String deptName, double budget) {
        super(empID, name, ssn, salary, deptName, new Employee[10]);
        this.budget = budget;
    }

    public double getBudget() {
        return budget;
    }

}
