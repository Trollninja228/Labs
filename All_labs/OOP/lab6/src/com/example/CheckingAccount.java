package com.example;


public class CheckingAccount extends Account  {


    private final double overDraftLimit;

    CheckingAccount(double balance,double overDraftLimit) {
         super(balance);
         this.overDraftLimit=overDraftLimit;
    }

    CheckingAccount(double balance) {
        this(balance,0);
    }
    @Override
    public boolean withdraw(double amount) {
        if(amount <= balance) {
                balance -= amount;
                return true;
            } else {
                return false;
            }
    }

    @Override
    public String getDescription() {
        return "Checking Account";
    }
    
}
