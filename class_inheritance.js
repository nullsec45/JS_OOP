class Fruit{
    constructor(name){
        this.name=name;

    }
    getFruit(){
        console.info(`Fruit name :${this.name}.`);
    }
}

class Apple extends Fruit{
    // Jika ingin membuat contructor di child class, maka harus memanggil constructor terlebih dahulu
    // Dan jika child class tidak memiliki constructor maka otomatis akan mewarisi constructor yang 
    // dimiliki oleh parentnya, walau parent tidak memiliki constructor child class wajib memanggil super() di dalam
    // constructor miliknya
    

    constructor(name, colour){
        super(name);
        this.colour=colour;
    }
    getFruit(){
        console.info(`Fruit name :${this.name}. Colour:${this.colour}`);
    }
}
melon=new Fruit("melon");
melon.getFruit();

console.info(melon);


apple=new Apple("apple", "red");
apple.getFruit();

console.info(apple);


