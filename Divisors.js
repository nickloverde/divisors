// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// Whiteboard
// First I'm going to return an array of numbers
// I'm taking in a single number
// I want to start by creating an empty array that I will push numbers into
// I'll start at i = 2 because all integers are divisible by one
// I'll then use the % to see if the division is 0
// As I loop through the numbers I'll use the push method to push numbers that satisfy the if statement into the array
// I need to create something for prime numbers
// So if the array is empty or equals 0 then I know it's a prime number and will return that string
// else I'll return the array

function divisors(integer) {
    arr = [];
     for (let i=2; i<integer; i++){
      if (integer % i === 0){
       arr.push(i);
            }
     } if (arr.length === 0) {
            return `${integer} is prime`;
        } else {
            return arr;
        }
    }