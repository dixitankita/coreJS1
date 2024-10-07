function generateNumbers(num1, num2) {
 
    if (num1 > num2) {
        return "The first number should be less than the second number.";
    }
    
    let numbers = [];
    for (let i = num1 + 1; i <= num2; i++) {
        numbers.push(i);
    }
    
    return numbers.join(', ');
}


const num1 = 50;
const num2 = 75;
const output = generateNumbers(num1, num2);
console.log(output); 
