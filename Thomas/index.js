// Add answers here 
// #### 1. Los or New?
// * Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.

function nameOfCity(city) {
    if (city.includes("New") || city.includes("Los")) {
        console.log(city);
      } else {
        console.log("The city name does not begin with Los or New");
      }
    }
    nameOfCity("New Orleans");
    nameOfCity("Los Vegas");
    nameOfCity("Dublin");

// ----------------------------------------------------------

// #### 2. isDivisible?
// * Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

function isDivisible(number){
if (number % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(25)); // false
console.log(isDivisible(1000)); // true

// ----------------------------------------------------------

// #### 3. Missing Angle
// * Create a function named "_missingAngle_" which classifies the missing angle of a triangle as either acute, right or obtuse. 
// **Notes**: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90°  (but less than 180°). 

function missingAngle(tri1,tri2) {
    if (180 - tri1 - tri2 < 90) {
        return console.log("acute");
    }   else if (180 - tri1 - tri2 === 90) {
        return console.log("right");
      } else {
        return console.log("obtuse");
      }
}
    missingAngle(45, 45); // right
    missingAngle(122, 41); // acute
    missingAngle(30, 12); // obtuse


// ----------------------------------------------------------

// #### 4. What's the weather?
// * Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "_wet day - you need an umbrella_". If false, print "_dry day - leave your umbrella at home_".

function isRaining(task) {
    let rain = task;
    rain === "rainy"
      ? console.log("_wet day - you need an umbrella_")
      : console.log("_dry day - leave your umbrella at home_");
  }
  isRaining("cloudy"); // _dry day - leave your umbrella at home_
  isRaining("rainy"); // _wet day - you need an umbrella_

// ----------------------------------------------------------

//   #### 1. Sequence
//   * Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

// function geometricalSequence [Was unable to have time for this question]

// ----------------------------------------------------------

// #### 2. Multiples
// * Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

// [was stuck on this, lack of time]

// ----------------------------------------------------------

// ### Math

// #### 1. You've got the power
// * Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
//     > **Examples**:
//     - ```javascript
//         powerOf(3) //27
//         ```

//     - ```javascript
//         powerOf(4) //256

function powerOf(num) {
    return num ** num;
  }
  
  console.log(powerOf(3)); // 27
  console.log(powerOf(6)); // 46656

// ----------------------------------------------------------

// #### 1. How many? 
// * Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string. 

function vowelCount(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (
            name[i] === 'a' ||
            name[i] === 'e' ||
            name[i] === 'i' ||
            name[i] === 'o' ||
            name[i] === 'u' 
        ) {
            count = count + 1;
        } else {
            count = count + 0;
        }
    }
    return count;
}

console.log(vowelCount("thing")); // 1
console.log(vowelCount("otherThing")); // 3
console.log(vowelCount("sky")); // 0








// ---------------------------------------###-------------------

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};