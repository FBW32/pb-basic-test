// Add answers here 

/* 1. Los or New?
    Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.
*/
function nameOfCity(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New'))) {
        console.log(str);
    } else {
        console.log("The city name does not begin with Los or New");
    }
}
nameOfCity("Los Angels");// Los Angels
nameOfCity("New York"); // New York
nameOfCity("Germany"); // The city name does not begin with Los or New

/* 2. isDivisible?
    Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true.
*/

function isDivisible (number) {
    if (number % 100 === 0) {
        return true;
    } else {
        return false;
    }
    
}
console.log(isDivisible(1000)); // true
console.log(isDivisible(72)); // false


/* 3. 3. Missing Angle
    Create a function named "missingAngle" which classifies the missing angle of a triangle as either acute, right or obtuse. Notes: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90° (but less than 180°).
    Examples:
    11°, 20° should return "obtuse", since the missing angle would be 149°
    27°, 59° ➞ The third angle is 92° so it is "obtuse"
    135°, 11° ➞ The third angle is "acute"
    45°, 45° ➞ The third angle is a "right angle"
*/
function missingAngle(a1, a2) {
    if (180 - (a1 +a2) === 90) {
        console.log("right angle");
    } else if (180 - (a1 + a2) < 90) {
        console.log("acute");
    } else {
        console.log("obtuse");
    }
}
missingAngle(11, 20); // obtuse
missingAngle(135, 11); // acute
missingAngle(45, 45); // right angle

/* 4. What's the weather?
    Use a ternary operator to complete this task. Create a function named "isRaining". If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".
*/
function isRaining(weather) {
    
    weather === 'rainy' ? console.log("wet day - you need an umbrella.") : console.log("dry day - leave your umbrella at home.");
}
isRaining('rainy'); // wet day - you need an umbrella.
isRaining('sunny'); // dry day - leave your umbrella at home.

// Loops

/* 1. Sequence
    Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string.
*/
function geometricalSequence() {
    let num = "";
    for (let i = 1; i <= 256; i *= 2) {
        num += i + " ";
       
    }
    console.log(num);
}
geometricalSequence(); // 1 2 4 8 16 32 64 128 256 

/* 2. Multiples
    Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. Concatenate each value to a string and return a string.
*/
function multiplesOfThree() {
    let multiplier = 3;
    let result = "";
    for (let i = 1; i <= 5; i++) {
         result += multiplier * i + " ";
    }
    console.log(result);
}
multiplesOfThree(); // 3 6 9 12 15 

// Math
/* 1. You've got the power
    Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
    Examples:
    powerOf(3) //27
    powerOf(4) //256
*/
function powerOf(num) {
    console.log(Math.pow(num,num));
}
powerOf(3); // 27
powerOf(4); // 256

// Problem Solving
/* 1. How many?
    Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
    Examples:
    vowelCount("hello") // 2
    vowelCount("test") // 1
    vowelCount("fbw") // 0
*/
function vowelCount(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
    console.log(count);
}
vowelCount("hello"); // 2
vowelCount("test"); // 1
vowelCount("fbw"); // 0



// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
