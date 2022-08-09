class Customer{
    // jika membuat variable di luar constructor maka otomati js akan menganggap bahwa variable tersebut
    // merupakan public property
    firstName;
    lastName;
    balance=0;
    // Menambahkan # di depan property akan membuat property tersebut menjadi private, artinya
    // property tersebut tidak bisa diakses dari luar class.
    #saldo;

    constructor(firstName, saldo){
        this.firstName=firstName;
        this.#saldo=saldo;
    }
    get CustomerSaldo(){
        return this.#saldo;
    }
}

const rama=new Customer("rama", 90000);

console.info(rama.CustomerSaldo);
console.log(rama.saldo)