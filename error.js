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
const total=MathUtil.sum();
console.info(total);

const total2=MathUtil.sum(1,2,3,4,5,6,7,8,9,10);
console.info(total2);