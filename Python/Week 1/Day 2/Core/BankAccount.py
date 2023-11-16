class BankAccount:
    # don't forget to add some default values for these parameters!
    all_accounts=[]

    def __init__(self, int_rate, balance=0): 
        self.balance = balance
        self.rate= int_rate
        BankAccount.all_accounts.append(self)
        
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance-= amount
            return self.balance
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
            return self.balance
    def display_account_info(self):
        print(f"Balance: {self.balance}$")
    def yield_interest(self):
        if self.balance>0:
            self.balance= self.balance*(1+ self.rate)
            return self.balance
    @classmethod
    def all_infos(cls):
        for i in range (0, len(cls.all_accounts)):
            print (f"account {i+1}'s balance : {cls.all_accounts[i].balance} ")

acc1 = BankAccount (0.02,1000)
acc2= BankAccount (0.05, 800)

acc1.deposit(100)
acc1.deposit(150)
acc1.deposit(50)
acc1.withdraw(200)
acc1.yield_interest()
acc1.display_account_info()

acc2.withdraw(100)
acc2.withdraw(50)
acc2.withdraw(70)
acc2.withdraw(50)
acc2.yield_interest()
acc2.display_account_info()

BankAccount.all_infos()