// Add answers here

// ### Conditional Algorithms

// #### 1. Los or New?
// * Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.

function nameOfCity(strg) {
  if (strg.includes("New") || strg.includes("Los")) {
    console.log(strg);
  } else {
    console.log("The city name does not begin with Los or New");
  }
}

nameOfCity("New York"); // New York
nameOfCity("Los Angeles"); // Los Angeles
nameOfCity("Berlin"); // The city name does not begin with Los or New

// #### 2. isDivisible?
// * Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

function isDivisible(num) {
  if (num % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(50)); // false
console.log(isDivisible(100)); // true

// #### 3. Missing Angle
// * Create a function named "_missingAngle_" which classifies the missing angle of a triangle as either acute, right or obtuse.
// **Notes**: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90°  (but less than 180°).
//     > **Examples**:
//     - 11°, 20° should return "_obtuse_", since the missing angle would be 149°
//     - 27°, 59° ➞ The third angle is 92° so it is "_obtuse_"
//     - 135°, 11° ➞ The third angle is "_acute_"
//     - 45°, 45° ➞ The third angle is a "_right angle_"

// acute < 90
// right = 90
// obtuse > 90

function missingAngle(angle1, angle2) {
  if (180 - angle1 - angle2 < 90) {
    return console.log("acute");
  } else if (180 - angle1 - angle2 === 90) {
    return console.log("right");
  } else {
    return console.log("obtuse");
  }
}

missingAngle(45, 45); // right
missingAngle(122, 41); // acute
missingAngle(30, 12); // obtuse

// #### 4. What's the weather?
// * Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "_wet day - you need an umbrella_". If false, print "_dry day - leave your umbrella at home_".

function isRaining(rain) {
  let weather = rain;
  weather === "rainy"
    ? console.log("_wet day - you need an umbrella_")
    : console.log("_dry day - leave your umbrella at home_");
}

isRaining("sunny"); // _dry day - leave your umbrella at home_

isRaining("rainy"); // _wet day - you need an umbrella_

// ### Loops

// #### 1. Sequence
// * Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

// function geometricalSequence() {
//   let sum = 0;
//   for (let i = 1; i <= 5; i++) {
//     return (sum + i) * 2;
//   }
// }

// function geometricalSequence(expo) {
//     for (d = 1; d <= expo; d++) {
//       console.log(d ** expo);

// #### 2. Multiples
// * Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

// function multiplesOfThree() {
//   let sum = 0;
//   for (let i = 1; i <= 5; i++) {
//     return (sum + i) * 3;
//   }
// }

// console.log(multiplesOfThree);

// ### Math

// #### 1. You've got the power
// * Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
//     > **Examples**:
//     - ```javascript
//         powerOf(3) //27
//         ```

//     - ```javascript
//         powerOf(4) //256

function powerOf(int) {
  return int ** int;
}

console.log(powerOf(4)); // 256
console.log(powerOf(5)); // 3125

// ### Problem Solving

// #### 1. How many?
// * Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
//     > **Examples**:
//     - ```javascript
//       vowelCount("hello") // 2
//       ```
//     - ```javascript
//       vowelCount("test") // 1
//       ```
//     - ```javascript
//       vowelCount("fbw") // 0
//       ```

function vowelCount(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      counter = counter + 1;
    } else {
      counter = counter + 0;
    }
  }
  return counter;
}

console.log(vowelCount("mobile phone")); // 5
console.log(vowelCount("lala")); // 2
console.log(vowelCount("pph")); // 0

// --------------------------##------------------------------------------

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {
//   nameOfCity,
//   isDivisible,
//   missingAngle,
//   rainingToday,
//   geometricalSequence,
//   multiplesOfThree,
//   powerOf,
//   vowelCount,
// };
