class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            // Membuat error pada javascript jika panjang parameter  0 atau kurang dari 1;
            throw new Error("Total parameter harus lebih dari 0");
        }
        let total=0;
        for(const number of numbers){
            total+=number;
        }
        return total;
    }
}
// Ketika kita menggunakan try catch maka error pada js akan ditangkap dan program akan terus dijalankan
// Yang diberhentikan adalah program yang ada di scope try setelah itu js akan menjalankan pesan error di
// scope catch lalu menjalankan baris kode berikutnya
// try{
//     console.info(MathUtil.sum());
//     console.info("Error handling");
//     // Jika di scope try tidak terjadi error, maka scope catch tidak akan dijalankan
// }catch(error){
//     console.info(`Terjadi error : ${error.message}`);
// }finally{
//     console.info("Error atau tidak scope ini tetap akan dijalankan");
// }
// const total=MathUtil.sum(1,2,3,4,5,6,7,8,9,10);
// console.info(total);

class Counter{
    counter=1;

     next(){
        try{
            return this.counter;
        }finally{
            this.counter++;
        }
    }
}
const counter=new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());