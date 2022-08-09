class MathUtil{
    static sum(...numbers){
        let total=0;
        for(const number of numbers){
            total+=number;
        }
        return total;
    }
}
const total=MathUtil.sum(100,90,89,45,33,24,35);
console.info(total);