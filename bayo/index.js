// Add answers here 


// EXERCISE 1
// Los or New?
// Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.

let firstCity = "LosAngeles";
let secondCity = "NewYork";

function nameOfCity(Los, New){
    if(firstCity.includes('Los')){
        console.log(firstCity)
    } if (secondCity.includes('New')){
        console.log(secondCity);
    } else {
        console.log("The city name does not begin with Los or New");
    }
}

nameOfCity()


// EXERCISE 2
// isDivisible?
// Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true.


let num = 50;
function isDivisible(num){
    if(num % 100 === 0) {
        return true;
    }
    return false;
}
isDivisible()

// EXERCISE 2
// 2. Multiples
// Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. Concatenate each value to a string and return a string.

for (let multi = 3; multi<=15; multi*=3) {
    console.log(multi)
} 



// EXERCISE 4
// // What's the weather?
// Use a ternary operator to complete this task. Create a function named "isRaining". If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".

let weather = function(isRaining){
    if(weather === isRaining){
        console.log("wet day - you need an umbrella");
    } else {
        console.log("dry day - leave your umbrella at home")
    }
}

weather()

// LOOPS

// EXERCISE 1
//  Sequence
// Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string.

// function geometricalSequence(){
    for(let geometricalSequence = 1; geometricalSequence <=256; geometricalSequence*=2 ){
        console.log(geometricalSequence);
    }

    // geometricalSequence()


 // Problem Solving
// 1. How many?
// Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.

const vowels = ["a", "e", "i", "o", "u"]
function countVowels(text) {
let counter = 0;
for (let letter of text.include()){
    if (vowels.includes(letter)) {
       counter++
    }
}
console.log(`The text contains ${counter} vowels`)
return counter;
}



















// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

