package origin;

import com.domain.example.Engineer;
import com.domain.example.Admin;
import com.domain.example.Director;
import com.example.business.*;


public class Test {
    public static void printEmployee(Employee emp){
        System.out.println("\n"+"Employee type: "+emp.getClass().getSimpleName()+"\n"+emp.toString());
    }
    public static void printEmployee(Employee emp, EmployeeStockPlan esp){
        System.out.println("\n"+"Employee type: "+emp.getClass().getSimpleName()+"\n"+emp.toString());
        System.out.println("Stock opitons: " + esp.grantStock(emp));
    }
    public static void main(String[] args){
        Employee emp=new Employee(101, "Jane Smith", "012-34-5678", 120_345.27);
        Employee emp1=new Manager(207,"Barbara Johnson","054-12-2367",109_501.36,"US Marketing", new Employee[10]);
        Employee emp2=new Admin(304,"Bill Munroe","108-23-6509",75_002.34);
        Director emp3=new Director(12,"Susan Wheeler","099-45-2340",120_567.36,"Global Marketing",1_000_000.00);

        printEmployee(emp,new EmployeeStockPlan());

    }
    
    


    

    

}
