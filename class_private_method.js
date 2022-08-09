class Person{
    say(name){
        if(name){
            this.#sayWithName(name);
        }else{
            this.#sayWithoutName();
        }
    }
    #sayWithName(name){
        console.info(`Hello ${name}`);
    }
    #sayWithoutName(){
        console.info(`Hello`);
    }
}
const rama=new Person();
rama.say();