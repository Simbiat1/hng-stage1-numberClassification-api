// checking for prime property of num
export function isPrime(number) { 
    if (number <= 1) return false; // prime numbers are positive integers greater than 1
    if (number <= 3) return true; // this condition takes care of the prime numbers 2 and 3
    if (number % 2 === 0 || number % 3 === 0) return false; // takes care of numbers divisible by 2 or 3 as they're not prime
    for (let i = 5; i * i <= number; i += 6) { // loop through numbers starting from 5 with a step of 6 skipping multiples of 2 and 3 - conditon already handled. Also checks for square divisors less than num / divisors less than root of num
        if (number % i === 0 || number % (i + 2) === 0) return false; // checks divisibility by numbers of the form 6k ± 1 in which prime numbers can be expressed. 
    } return true; // As prime numbers are only divisible by one and themselves
}

// checking for perfect property of num
export function isPerfect(number){
    if (number <= 1) return false; // perfect numbers are positive integers greater than 1
    let sum = 1; // initialises sum to 1 as 1 is always a divisor of a number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) { // checks for divisors of num
            sum += i; // adds the divisor to sum
            if (i * i !== number) sum += number / i; // Avoids adding the square root twice
        }
    }
    return sum === number; // returns true if sum of divisors equals num, else false
}

// checking armstrong property of num
export function isArmstrong(number) {
    let numStr = number.toString(); // Convertas num to string to calculate its length
    let numLen = numStr.length; // Calculates the length of numStr
    let sum = 0;

    for (let i = 0; i < numLen; i++) {
        // Converts string back to int and calculate the sum of each digit raised to the power of numLen
        sum += Math.pow(parseInt(numStr[i]), numLen);
    }
    // Checks if the sum equals the original number
    if (sum === number) {
        return "armstrong"; 
      }
}

// checking parity of num
 export function getParity(number) {
    return number % 2 === 0 ? "even" : "odd";
}

// calculating num sumOfDigits
export function sumOfDigits(number) {
    let sum = 0;
    const numStr = number.toString();
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    return sum;
}
