from NinjaClass import Ninja
from PetClass import Pet


pet=Pet("Kahla","cat","scratch")
ninja=Ninja("Achref","Nejah", pet,"Croquette", "Salami" )
ninja.walk().feed().bathe()


class Cat(Pet):
    def __init__(self,age, health=10, energy=10, name="", type="", tricks="",):
        super().__init__(health, energy, name, type, tricks)
        self.age=age
    


