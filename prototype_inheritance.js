function Employee(name){
	this.name=name;
}
function Manager(name){
	this.name=name;
}
// Manager.prototype=Employee.prototype //cara prototype inheritance yang salah
Manager.prototype=Object.create(Employee.prototype);


Employee.prototype.sayHello=function (name){
	console.info(`Hello ${name}, my name is Employee ${this.name}`)
}


Manager.prototype.sayHello=function (name){
	console.info(`Hello ${name}, my name is Manager ${this.name}`)
}


const employee=new Employee("Fajar");
employee.sayHello("Joko");

const manager=new Manager("Ilham");
manager.sayHello("Joko");

console.log(employee);
console.log(manager);