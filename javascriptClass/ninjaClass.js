class Ninja {
    constructor(name){
        this.name = name
        this.healthPoints = 10
        this.strength = 5
        this.speed = 3
        this.attack = 1
    }

    presentStats(){
        return `I am ${this.name} and I have ${this.healthPoints} healthPoints, ${this.strength} strength, ${this.speed} speed, and ${this.attack} attack!` 
    }

    slashAttack(T){
        return `Ahhh!!! you slashed me now I have ${T.healthPoints -= this.attack} healthpoints!`
    }
}

naruto = new Ninja("Naruto") 
sasuke = new Ninja("Sasuke")

console.log(naruto.presentStats())
console.log(sasuke.presentStats())
console.log(naruto.slashAttack(sasuke))