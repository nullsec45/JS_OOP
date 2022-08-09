/*
Mirip inheritance, namun ini sebenarnya hanya manyalin 
constructor yang lain saja.

Jika ingin menyalin constructor lain, maka panggil nama constructornya dengan method call
lalu diikuti dengan paramater berisi this, ...parameterConstrucParent

Seperti ini:

<name_constructor.call(this, <parameter_constructor_parent>);

example :
Employee.call(this, firstName, lastName);

*/
function Employee(firstName){
	this.firstName=firstName;
	this.sayHello=function(name) {
		console.info(`Hello ${name}, My Name is ${this.firstName}`);
	}
}
function Manager(firstName, lastName){
	this.lastName=lastName;
	Employee.call(this, firstName)
}
const fajar=new Manager("Rama", "Fajar");
console.info(fajar);
fajar.sayHello("Juned");