package Labs.All_labs.OOP.lab6.practice.AbstractBanking.src.com.example;

import java.util.Date;

public class TimeDepositAccount extends Account1 {
    
    
    
    public TimeDepositAccount(double balance, Date maturityDate) {
        this.balance = balance;
        this.maturityDate = maturityDate;
    }
    private final Date maturityDate;
    
    @Override
    public String toString() {
        return getDescription() + ": current balance is " + balance;
    }


    public String getDescription() {
        return "Time Deposit Account " + maturityDate;
    }

    public static void main(String[] args) {
        System.out.println("NOT WORKS!!!");
    }


    
}