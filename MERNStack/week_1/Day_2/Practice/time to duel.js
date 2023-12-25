

class Card {
    constructor (name, cost){
        this.name= name
        this.cost= cost
    }
}

class Unit extends Card {
    constructor(name,cost,power,resilience){
        super(name,cost)
        this.power=power
        this.resilience=resilience
    }
    showStats(){
        console.log(`${this.name} cost : ` ,this.cost)
        console.log( `${this.name} power : `,this.power)
        console.log(`${this.name} resilience : `,this.resilience)
        console.log("************************************")
        return this
    }
    attack(unit){
        unit.resilience-= this.power
        return this
    }
}


class Effect extends Card {
    constructor(name,cost,stat,magnitude){
        super(name,cost)
        
        this.stat=stat
        this.magnitude=magnitude
    }
    play(unit){
        unit[this.stat]+= this.magnitude
        return this
    }
}

redBeltNinja = new Unit("Red Belt Ninja",3,3,4)
redBeltNinja.showStats()
hardAlgo = new Effect("Hard Algorithm",2,"resilience",3)
hardAlgo.play(redBeltNinja)
blackBeltNinja = new Unit ("Black Belt Ninja",4,5,4)
blackBeltNinja.showStats()
unhandledPromise = new Effect ("Unhandled Promise Rejection",1,"resilience",-2)
unhandledPromise.play(redBeltNinja)
pairProgramming = new Effect ('Pair Programming',3,"power",2)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
redBeltNinja.showStats()
blackBeltNinja.showStats()


