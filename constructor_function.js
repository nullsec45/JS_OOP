/*

Property tidak harus diinisialisai di dalam class agar bisa dipanggil, namun
jika diinisalisasi maka harus menggunakan keyword 
this agar bisa dipanggil dari luar class.

Jika property tidak diinisalisasi menggunakan keyword this 
maka tidak bisa dipanggil 
dari luar class

Sama seperti property jika kita ingin membuat method di dalam class 
maka harus diinisialisasi dengan keyword this
function Person merupakan class dengan constructor function
*/
/*
Class and object without parameter

function Person(){
	this.firstName="";
	this.lastName="";
	longName="test ajah";
	this.sayHello=function(name){
		console.info(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
	}
}


const ilham=new Person();
ilham.firstName="Muhammad";
ilham.lastName="Ilham";
console.log(ilham.longName); 
ilham.sayHello("Bedul");

*/

// Class and object with parameter
function Person(firstName, lastName){
	this.firstName=firstName;
	this.lastName=lastName;
	longName="test ajah";
	this.sayHello=function(name){
		console.info(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
	}
}


const rama=new Person("Rama","Fajar");
console.log(rama.longName); //undefined
rama.sayHello("entong");

