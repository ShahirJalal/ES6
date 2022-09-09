// With function expression
// const greeting = function(){
//     return 'Welcome to AirAsia Academy';
// };

// console.log(greeting());

// With arrow function
// const greeting = () => {
//     return 'Welcome to AirAsia Academy';
// };

// It gets shorter if the function has only one statement
// and the statement returns a value, so we can eliminate
// curly braces and return keyword as well

// const greeting = () => 'Welcome to AirAsia Academy';

// Arrow function with parameters
const greeting = (user) => `Welcome to AirAsia Academy ${user}`;

console.log(greeting('Sara'))