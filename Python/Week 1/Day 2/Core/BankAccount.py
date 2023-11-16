class BankAccount:
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

class User:
    def __init__(self, name, email):
        self.accounts=[]
        self.name = name
        self.email = email

    
    # other methods
    def make_account(self):
        self.accounts.append(BankAccount(0.02))
        

    def make_deposit(self, amount, acc_index):
        self.accounts[acc_index].deposit(amount)
    
    def make_withdrawal(self, amount):
        self.accounts[acc_index].withdraw(amount)
    
    def display_user_balance(self,acc_index):
        self.accounts[acc_index].display_account_info()
    
    def transfer_money(self,acc_index, amount, other_user,other_index):
        self.accounts[acc_index].withdraw(amount)
        other_user.accounts[other_index].deposit(amount)

achref = User ("achref", "mail")
achref.make_account()
achref.make_deposit(10000,0)
achref.display_user_balance(0)


nejah = User ("nejah","mail")
nejah.make_account()

achref.transfer_money(0,400,nejah,0)
achref.display_user_balance(0)
nejah.display_user_balance(0)





