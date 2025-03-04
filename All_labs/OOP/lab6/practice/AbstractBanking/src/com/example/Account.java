/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Labs.All_labs.OOP.lab6.practice.AbstractBanking.src.com.example;

import java.util.Date;

/**
 *
 * @author hans
 */
public abstract class Account {
    protected double balance;

    public Account(double bal) {
        this.balance= bal;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    @Override
    public String toString() {
        return  " current balance is " + balance;
    }

    public abstract boolean withdraw(double amount) ;
    
}
