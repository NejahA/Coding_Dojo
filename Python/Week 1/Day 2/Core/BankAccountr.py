class BankAccount:
    all_accounts=[]

    def __init__(self, int_rate, balance=0): 
        self.balance = balance
        self.rate= int_rate
        BankAccount.all_accounts.append(self)
        
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance-= amount
            return self
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
            return self
    def display_account_info(self):
        print(f"Balance: {self.balance}$")
        return self
    def yield_interest(self):
        if self.balance>0:
            self.balance= self.balance*(1+ self.rate)
            return self
    @classmethod
    def all_infos(cls):
        for i in range (0, len(cls.all_accounts)):
            print (f"account {i+1}'s balance : {cls.all_accounts[i].balance} ")

acc1 = BankAccount (0.02,1000)
acc2= BankAccount (0.05, 800)

acc1.display_account_info().deposit(100).deposit(150).deposit(50).withdraw(200).display_account_info()





