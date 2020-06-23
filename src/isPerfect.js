// Perfect number?
export const isPerfect = num => {
    if (num > 1 && Number.isInteger(num)) {
        let i = 2;
        let sum = 0;
        while (i < num) {
            if (num % i === 0) {
                sum += i;
            }
            i++;
        }
        if (sum + 1 === num) {
            return true;
        }
       }
       return false;  
}