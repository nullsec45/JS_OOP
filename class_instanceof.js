class Employee{

}

class Manager{

}
class WebDev extends Employee{

}
const rama=new Employee();
const fajar=new Manager();
const fadhillah=new WebDev();

console.info(typeof rama);
console.info(typeof fajar);

console.info(rama instanceof Employee);
console.info(fajar instanceof Manager);
console.info(fadhillah instanceof Employee);
