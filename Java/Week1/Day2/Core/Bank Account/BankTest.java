public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();
        account1.deposit("savings",100);
        account2.deposit("checkings",300);
        account3.deposit("savings",200);
        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.display();
        account2.display();
        account3.display();
        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.withdraw("savings",50);
        account2.withdraw("checkings",50);
        account3.withdraw("savings",50);

        account1.withdraw("savings",5000);
        account1.withdraw("savings",50);
        // Static Test (print the number of bank accounts and the totalMoney)
        BankAccount.bankStatus();
    }
}
