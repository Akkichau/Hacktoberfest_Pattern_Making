// program to find the LCM of two integers
//HACKTOBERFEST-ACCEPTED
//Thanku HACKTOBERFEST-ACCEPTED
//HACKTOBERFEST-ACCEPTED2022
// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
