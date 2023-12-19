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
        console.log("namme :",this.name)
        console.log("health :",this.health)
        console.log("strength:",this.strength)
        console.log("speed :",this.speed)
        return this
    }
    drinkSake(){
        this.health+=10
        return this
    }
}

class Sensei extends Ninja {
    constructor(name,health,strength,speed, wisdom=10){
        super(name,health=200,strength=10,speed=10)
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


splinter = new Sensei('splinter')
splinter.showStats()
splinter.speakWisdom()
splinter.showStats()