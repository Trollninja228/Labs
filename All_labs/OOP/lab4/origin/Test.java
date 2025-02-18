package origin;

import com.domain.example.Engineer;
import com.domain.example.Admin;
import com.domain.example.Director;

public class Test {
    public static void main(String[] args){
        Employee emp=new Engineer(101, "Jane Smith", "012-34-5678", 120_345.27);
        Manager emp1=new Manager(207,"Barbara Johnson","054-12-2367",109_501.36,"US Marketing", new Employee[10]);
        Admin emp2=new Admin(304,"Bill Munroe","108-23-6509",75_002.34);
        Director emp3=new Director(12,"Susan Wheeler","099-45-2340",120_567.36,"Global Marketing",1_000_000.00);

        emp.setName("Jane Brown");
        emp.raiseSalary(50);

        // printEmployee(emp);
        // printEmployee(emp1);
        // printEmployee(emp2);
        // printEmployee(emp3);
        

        Employee employee = new Employee(1, "Aba", "123", 999999.99);
        Manager manager = new Manager( 2, "aba", "2432", 32423.23, "Software",new Employee[20]);
        
        System.out.println();
        System.out.println();
        System.out.println();
        manager.printStaff();
        // boolean test = manager.addEmployee(employee);
        
        // System.out.println((test) ? ("yes") : ("no"));
        // Employee employee2 = new Employee(2, "aba2", "fae", 789655.36);
        // test = manager.addEmployee(employee2);

        // System.out.println((test) ? ("yes") : ("no"));

        // test = manager.addEmployee(employee2);
        // System.out.println((test) ? ("yes") : ("no"));

        // manager.printStaff();

        // manager.printLenStaff();

        // System.out.println();
        // manager.removeEmployee(employee2, manager);

        // manager.printLenStaff();

        // manager.printStaff();

    }

    

    public static void printEmployee(Employee emp){
        System.out.println("id: "+emp.getEmpID());
        System.out.println("Name: "+emp.getName());
        System.out.println("SSN: "+emp.getSSN());
        System.out.println("Salary: "+emp.getSalary());
    }
}
