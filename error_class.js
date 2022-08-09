// Membuat class error sendiri dengan parent Error

class ValidationError extends Error{
    constructor(message, field){
        super(message);

        this.field=field;
    }
}


class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            // Membuat error pada javascript jika panjang parameter  0 atau kurang dari 1;
            throw new ValidationError("Total parameter harus lebih dari 0", "numbers");
        }
        let total=0;
        for(const number of numbers){
            total+=number;
        }
        return total;
    }
}

try{
    console.info(MathUtil.sum());
    console.info("Error handling");
}catch(error){
    if(error instanceof ValidationError){
        console.info(`Terjadi error di field ${error.field} dengan error ${error.message}`);
    }

    console.info(`Terjadi error : ${error.message}`);
}
const total=MathUtil.sum(1,2,3,4,5,6,7,8,9,10);
console.info(total);

