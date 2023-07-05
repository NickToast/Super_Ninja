class Ninja {
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`${this.name}: ${this.health} HP, ${this.speed} SPD, ${this.strength} STR`)
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const wiseMessage = super.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
