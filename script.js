// Exercise 2.1 create a expression function for checking 
// if a number is even</br>
function checkNumbers(number){
    const result = number % 2 === 0 ? (`${number} is even.`) : (`${number} is odd.`);
    console.log(result)
};

checkNumbers(8);             // 8 is even.
checkNumbers(7);             // 7 is odd.

// Exercise 2.2 converts the function from Exercise 2.1 into an arrow function</br>

const evenNumbers = (number) => number % 2 === 0 ? (`${number} is even.`) : (`${number} is odd.`); 

console.log(evenNumbers(4));
console.log(evenNumbers(5));