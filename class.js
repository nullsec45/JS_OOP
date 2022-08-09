class Person{
    constructor(name){
        this.name=name;
    }
    // Untuk pembuatan method tidak disarankan dibuat di constructor melainkan di prototypenya langsung
    // seperti di bawah ini
    sayHello(name){
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}
const rama=new Person("rama");
rama.sayHello("Udin");
console.info(rama);
const fajar=new Person("fajar");
fajar.sayHello("Dadang");
