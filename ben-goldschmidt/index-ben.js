// Add answers here 
console.log("")
console.log("Conditional Algorithms QUESTION 1: Los or New")

// INPUT
// city name
// if string begins with Los or New (case sensitive)

// OUTPUT
// true --> print full string
// else, dont print

// if "Los" or "New"
// else "The city name does not begin with Los or New"

// function nameOfCity()

function nameOfCity(cityInput) {
    let beginning = cityInput.substr(0, 3);
    console.log("The first three letters are " + beginning)

    if ((beginning === "Los") || (beginning === "los") || (beginning === "New") || (beginning === "new")) {
        console.log("The city " + cityInput + " begins with Los or New!");
    }
    else {
        console.log("The city " + cityInput + " does not begin with Los or New!");
    }
}
nameOfCity("New York");
// The first three letters are New
// The city New York begins with Los or New!
nameOfCity("new York");
// The first three letters are new
// The city new York begins with Los or New!
nameOfCity("Los Angeles");
// The first three letters are Los
// The city Los Angeles begins with Los or New!
nameOfCity("los Angeles");
// The first three letters are los
// The city los Angeles begins with Los or New!

nameOfCity("Melbourne");
// The first three letters are Mel
// The city Melbourne does not begin with Los or New!





console.log("")
console.log("Conditional Algorithms QUESTION 2:  isDivisible?")

// INPUT
// integer1
// if (integer % 100 === 0)

// OUTPUT
// true if divisible
// false if not

// isDivisible
function isDivisible(integer1) {
    if (integer1 % 100 === 0) {
        console.log(true + "! " + integer1 + " is divisible by 100!");
    }
    else {
        console.log(false + "! " + integer1 + " IS NOT divisible by 100!");
    }
}
isDivisible(99);        // false! 99 is NOT divisible by 100!
isDivisible(100);       // true! 100 IS divisible by 100!
isDivisible(10000);     // true! 10000 IS divisible by 100!





console.log("")
console.log("Conditional Algorithms QUESTION 3:  Missing Angle?")

// totalaAngle = 180 - (angle1 + angle2) 

// INPUT
// angle1
// angle2

// OUTPUT
// acute --> missingAngle < 90                              --> if
// right --> missingAngle === 90                            --> else if
// obtuse --> (missingAngle > 90) && (missingAngle< 180)    --> else

// function missingAngle()

let angleSemiCircle = 180;
function missingAngle(angle1, angle2) {
    let missingAngle = angleSemiCircle - (angle1 + angle2)
    if (missingAngle < 90) {
        console.log(`${missingAngle}° is an ACUTE angle!`)
    }
    else if (missingAngle === 90) {
        console.log(`${missingAngle}° is a RIGHT angle!`)
    }
    else {
        console.log(`${missingAngle}° is an OBTUSE angle!`)
    }
}
missingAngle(11, 20);       // 149° is an OBTUSE angle!
missingAngle(27, 59);       // 94° is an OBTUSE angle!
missingAngle(135, 11);      // 34° is an ACUTE angle!
missingAngle(45, 45);       // 90° is a RIGHT angle!





console.log("")
console.log("Conditional Algorithms QUESTION 4:  What's the weather?")

// TERNARY OPERATOR
// if (condition) ? answer1 : answer2;

// INPUT
// true
// fale
// if it is raining

// OUTPUT
// true --> print "wet day - you need an umbrella"
// false --> print "dry day - leave your umbrella at home"

// function isRaining()

function isRaining(rain) {
    console.log((rain === true) ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home");
}
isRaining(true);        // wet day - you need an umbrella
isRaining(false);       // dry day - leave your umbrella at home





// LOOPS
console.log("")
console.log("Loops QUESTION 1:  Sequence")

// for loop

// INPUT
// let newString = "";
// for (let i = 1; i <= 9; i *= 2)
// i += 1 + ""

// OUTPUT
// "1 2 4 8 16 32 64 128 256"
// concatenate to a string
// i.e. let newString = ;
// console.log(newString)

// function geometricalSequence()

let newString = "";
function geometricalSequence() {
    for (let i = 1; i <= 256; i *= 2) {
        newString += i + " "
    }
    console.log(newString)
}
geometricalSequence();
// 1 2 4 8 16 32 64 128 256





console.log("")
console.log("Loops QUESTION 2:  Multiples")

// INPUT
// let multipleOfThreeString = "";
// for loop (let i = 0; i <= 15; i += 1)
// if (x[i] % 3 === 0)

// OUTPUT
// 3 6 9 12 15
// concatenate to a string
// console.log(multipleOfThreeString)

// function multiplesOfThree()

let multipleOfThreeString = "";
function multiplesOfThree() {
    for (let i = 1; i <= 15; i += 1) {
        if (i % 3 === 0) {
            multipleOfThreeString += i + " ";
        };
    }
    console.log(multipleOfThreeString)
}
multiplesOfThree();
// 3 6 9 12 15 






console.log("")
console.log("Math QUESTION 1: You've got the power")

// use MATH OBJECT
// Math.pow()

// INPUT
// integer

// OUTPUT
// integer to power of itself

// function powerOf()

function powerOf(powerInteger) {
    let itselfPowered = Math.pow((powerInteger), (powerInteger));
    console.log(`${powerInteger} to the power of itself is ${itselfPowered}!`);
}
powerOf(3);     // 3 to the power of itself is 27!
powerOf(4);     // 4 to the power of itself is 256!





console.log("")
console.log("Problem Solving QUESTION 1: How many?")

// INPUT
// string
// OUTPUT
// count of vowels

// OUTPUT
// number of vowels in str

// function vowelCount()

function vowelCount(vowelStr) {
    let vowels = "aeiouAEIOU";
    let vowelTally = 0;
    for (let i = 0; i <= vowelStr.length; i++) {
        // if ((vowelStr[i] === "a") || (vowelStr[i] === "e") || (vowelStr[i] === "i") || (vowelStr[i] === "o") || (vowelStr[i] === "u")) {
        //     vowTally += 1;
        // }
        if (vowels.indexOf(vowelStr[i]) !== -1) {
            vowelTally += 1;
        }
    }
    console.log(`${vowelStr} has ${vowelTally} vowel/s in it!`);
}
vowelCount("hello");                                // hello has 2 vowel/s in it!
vowelCount("test");                                 // test has 1 vowel/s in it
vowelCount("fbw");                                  // fbw has 0 vowel/s in it!
vowelCount("supercalifragilisticexpialidocious");   // supercalifragilisticexpialidocious has 16 vowel/s in it!






// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = { nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount };