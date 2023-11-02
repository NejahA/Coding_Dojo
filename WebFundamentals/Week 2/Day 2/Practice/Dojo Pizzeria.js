function pizzaOven(crustType, sauceType, cheeses,toppings){
    var pizza ={};
    pizza.crustType=crustType
    pizza.sauceType=sauceType
    pizza.cheeses=cheeses
    pizza.toppings=toppings
    return pizza;
}

var pizzaOne =pizzaOven( "deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"])
console.log(pizzaOne)

var pizzaTwo =pizzaOven( "hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])
console.log(pizzaTwo)

var pizzaThree =pizzaOven( "hand tossed", "marinara", ["mozzarella", "feta"],["Basil", "Pesto", "Tomatoes"])
console.log(pizzaThree)

var pizzaFour =pizzaOven( "hand tossed", "marinara", ["mozzarella", "feta"],["Garlic", "Artichoke ", "BBQ Sauce"])
console.log(pizzaFour)

var crustTypesArr = ["deep dish","hand tossed"]
var sauceTypeArr = ["traditional","marinara"]
var cheesesArr =[["mozzarella"],["mozzarella", "feta"]]
var toppingsArr = [["pepperoni", "sausage"],["mushrooms", "olives", "onions"],["Basil", "Pesto", "Tomatoes"],["Garlic", "Artichoke ", "BBQ Sauce"]]

var pizzaRnd=pizzaOven(crustTypesArr[Math.floor(Math.random()*2)],sauceTypeArr[Math.floor(Math.random()*2)],cheesesArr[Math.floor(Math.random()*2)],toppingsArr[Math.floor(Math.random()*4)])
console.log("Random Pizza : ", pizzaRnd)


