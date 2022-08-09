function Person(firstName, lastName){
	this.firstName=firstName;
	this.lastName=lastName;
	this.sayHello=function(name){
		console.info(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
	}
}

const rama=new Person("Rama","Fajar");
// hanya objek rama saja yang memiliki method sayBye
rama.sayBye=function(){
	console.info("Good Bye");
}

// Kedua objek, yaitu rama dan ilham memiliki method sayKiss dan run
Person.prototype.sayKiss=function(){
	console.log("muacchhh");
}
Person.prototype.run=function(){
	console.log(`${this.firstName} is running`);
}
/*
Cara kerja prototype inheritance
Javascript akan mencari property/method dari instance objek terlebih dahulu, jika ada
maka jalankan. Namun jika tidak ada javascript akan mencari property/methode ke dalama
objek prototype
*/
Person.prototype.coba=function(){
	console.log(`Coba praktek akses prototype - Dalam objek prototype`);
}
const ilham=new Person("Muhammad","Ilham");
ilham.coba=function(){
	console.log(`Coba praktek akses prototype - Luar objek prototype`);
}
ilham.coba()

console.info(rama);
console.info(ilham);

