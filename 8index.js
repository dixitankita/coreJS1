function calculateSum(n) {
    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i++;
    } while (i <= n);

    console.log(`The sum of numbers from 1 to ${n} is: ${sum}`);
}

// Example usage:
calculateSum(5);
calculateSum(10);
