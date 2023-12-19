class Ninja {
    constructor(name,health=90,strength=3,speed=3){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
    }
    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        console.log()
        console.log()
        console.log(this.name,this.health,this.speed,this.strength)
        return this
    }
    drinkSake(){
        this.health+=10
        return this
    }
}