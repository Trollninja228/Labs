package origin;

import java.text.NumberFormat;
import java.util.Locale;

public class Employee {
    private int empID;
    private String name;
    private String ssn;
    private double salary;

    public Employee(int empID, String name, String ssn, double salary) {
        this.empID = empID; 
        this.name = name; 
        this.ssn = ssn; 
        this.salary = salary; 
    }

    public void setName(String n){
        name=n;
    }
    public void raiseSalary(double increase) { 
        salary += increase; 
    }
    public int getEmpID(){
        return empID;
    }
    public String getName(){
        return name;
    }
    public String getSSN(){
        return ssn;
    }
    public double getSalary(){
        return salary;
    }
    @Override
    public String toString(){
        return "ID: "+Integer.toString(this.empID)+"\n"+"Name: "+ this.name+"\n"+ "SSN: "+this.ssn+"\n"+"Salary: "+NumberFormat.getCurrencyInstance(Locale.US).format(this.salary)+"\n";
    }
    public static void main(String[] args){
    }
}

