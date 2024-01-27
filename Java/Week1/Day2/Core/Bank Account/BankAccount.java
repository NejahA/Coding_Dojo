import java.util.Scanner;
import java.util.Random;
public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private long accountnum;
    private static int accounts = 0;
    private static double totalMoney=0.0; // refers to the sum of all bank account checking and savings balances
    
    public BankAccount() {
        this.checkingBalance=0.0;
        this.savingsBalance=0.0;
        accounts++;
        this.accountnum= accountNumber();
    }
    // CONSTRUCTOR
    // Be sure to increment the number of accounts

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance() {
        return this.checkingBalance;
    }
    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }
    public double getSavingsBalance() {
        return this.savingsBalance;
    }
    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }
    public static  int getAccounts() {
        return accounts;
    }
    public static  void setAccounts(int naccounts) {
        accounts = naccounts;
    }
    public  static double getToalMoney() {
        return totalMoney;
    }
    public  static void setToalMoney(double ntotalMoney) {
        totalMoney = ntotalMoney;
    }
    public double getAccountnum() {
        return this.accountnum;
    }
    // METHODS
    public void deposit(String type, double amount){

        if (type.equals("savings")){
            setSavingsBalance(getSavingsBalance()+amount);
            setToalMoney(getToalMoney()+amount);
        }
        if (type.equals("checking")){
            setCheckingBalance(getCheckingBalance()+amount);
            setToalMoney(getToalMoney()+amount);
        }


        System.out.println("You successfully deposited "+ amount + " Dt to your "+ type +" account.\n");


    }   
    public void withdraw(String type, double amount){

        if (type.equals("savings")){
            if(amount<= getSavingsBalance()){
            setSavingsBalance(getSavingsBalance()-amount);
            setToalMoney(getToalMoney()-amount);
        System.out.println("You successfully withdrew "+ amount + " Dt from your "+ type +" account.\n");
            }
            else {
        System.out.println("Your savings account doesn't have this amount.\n");
            }
        }
        if (type.equals("checking")){
            if(amount<= getSavingsBalance()){
            setCheckingBalance(getCheckingBalance()-amount);
            setToalMoney(getToalMoney()-amount);
        System.out.println("You successfully withdrew "+ amount + " Dt from your "+ type +" account.\n");}
            else {
        System.out.println("Your checking account doesn't have this amount.\n");
            }
        
        }

    }   

    public void display () {
        System.out.println("Your savings account holds "+getSavingsBalance()+" Dt. \n");
        System.out.println("Your checking account holds "+getCheckingBalance()+" Dt. \n");
        System.out.println("Your Account Number is : "+ getAccountnum() +"\n");
        
    }
    private long accountNumber () {
        Random  randommachine = new Random ();
        long accountid = randommachine.nextLong(10000000000L);
        return accountid;
    }
    
    public static void bankStatus(){
        System.out.println("The number of accounts in the bank is "+getAccounts()+".  \n");
        System.out.println("The bank's total mount is "+getToalMoney()+".  \n");

    }
    // deposit
    // - users should be able to deposit money into their checking or savings account
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
}
