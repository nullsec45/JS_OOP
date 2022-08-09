class Person{
    constructor(name, age, hobby){
        this.name=name;
        this.age=age;
        this.hobby=hobby;
    }
    
    get PersonName(){
        return this.name;
    }
    set PersonName(value){
        this.name=value;
    }

    get PersonAge(){
        return this.age;
    }
    set PersonAge(value){
        this.age=value;
    }
    get PersonHobby(){
        return this.hobby
    }
    set PersonHobby(value){
        this.hobby=value;
    }   
}

const rama=new Person("Rama", 19, "Coding");
console.info(rama);
console.info(rama.PersonName);

rama.PersonName="Fajar";
rama.PersonHobby="Hacking";
console.info(rama);
