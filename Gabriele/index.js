// Add answers here 

// 1. Los or New?
// Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.

function nameOfCity(myStr) {

    if (myStr.slice(0, 3) === "Los") {
        console.log("Los Angeles") } else if (myStr.slice(0, 3) === "New") {
        console.log("New York");
    } else {
        console.log("The city name does not begin with Los or New")
    }
    }

nameOfCity("Los Angeles"); //   Los Angeles
nameOfCity("New York"); // New York
nameOfCity("Berlin"); // The city name does not begin with Los or New


// 2. isDivisible?
// Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true.

function isDivisible(myInteger) {
   if (myInteger % 100 === 0) {return console.log(true)
   }  else 
   {return console.log(false);
    }
}

isDivisible(100);  // true
isDivisible(1000); // true
isDivisible(1);  // false


// 3. Missing Angle
// Create a function named "missingAngle" which classifies the missing angle of a triangle as either acute, right or obtuse.
// Notes: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90° (but less than 180°).
// Examples:

// 11°, 20° should return "obtuse", since the missing angle would be 149°
// 27°, 59° ➞ The third angle is 92° so it is "obtuse"
// 135°, 11° ➞ The third angle is "acute"
// 45°, 45° ➞ The third angle is a "right angle"

function missingAngle(angle1, angle2) {
let angle3 = 180 - angle1 - angle2;
if (angle3 < 90) {
    return console.log("acute");
    } else if (angle3 === 90 ) {
    return console.log("right angle");
    } else if (angle3 > 90 & angle3 < 180) {
        return console.log("obtuse");
    }
};

missingAngle(11, 20); // obtuse
missingAngle(27, 59); // obtuse
missingAngle(135, 11); // acute
missingAngle(45, 45); // right angle




// 4. What's the weather?
// Use a ternary operator to complete this task. Create a function named "isRaining". If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".


function isRaining(day)  {
   // let day = "wet";
    console.log((day === "wet") ? ("wet day - you need an umbrella") : ("dry day - leave your umbrella at home"));
};

isRaining("wet"); // wet day - you need an umbrella
isRaining("dry"); // dry day - leave your umbrella at home



// Loops
// 1. Sequence
// Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string.


function geometricalSequence(base, expo) {
    let result = 1;
    let str = result + "";
    strResult = " ";

for (let i = 1; i <= expo; i++) {

    result = base ** i;
    strResult += result + " ";
}
console.log(str.concat(strResult));  
return strResult;

}

geometricalSequence(2, 8);   // 1 2 4 8 16 32 64 128 256 


// 2. Multiples
// Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. Concatenate each value to a string and return a string.

function multiplesOfThree(x) {
    let num;
    let str = " ";
for (let i = 1; i <= 5; i++) {
       num = x * i;
        str += num + " ";
}
console.log(str);
return str;
}

multiplesOfThree(3);  //  3 6 9 12 15 



// Math
// 1. You've got the power
// Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
// Examples:
//   powerOf(3) //27
//   powerOf(4) //256

function powerOf(x) {

    let result = Math.pow(x, x);
    console.log(result);
    return result;
};

powerOf(3);   // 27
powerOf(4);   // 256
powerOf(5);  // 3125



// 1. How many?
// Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
// Examples:

// vowelCount("hello") // 2
// vowelCount("test") // 1
// vowelCount("fbw") // 0

function vowelCount(myStr) {
    let newStr = myStr.toLowerCase();
    let newArr = newStr.split("");
    let sum = 0;

for (let i = 0; i <= newStr.length; i++) {
    if (("a" === newArr[i]) || 
        ("e" === newArr[i]) || 
        ("i" === newArr[i]) || 
        ("o" === newArr[i]) || 
        ("u" === newArr[i]))  {

        sum = sum + 1;
}

}

console.log(sum);
return sum;
};

vowelCount("hello"); // 2
vowelCount("test"); // 1 
vowelCount("Today I did the JavaScript test"); // 9






// // DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};