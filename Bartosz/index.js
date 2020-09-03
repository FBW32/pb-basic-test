// Add answers here 

// 1.
// Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.


// 2.

// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

function isDivisible (num) {
    if (num % 100 === 0){
        return 'true';
    }else{
        return 'false';
    }
}

console.log(isDivisible(200)); // true
console.log(isDivisible(105)); // false

// 3.

// #### 3. Missing Angle
// * Create a function named "_missingAngle_" which classifies the missing angle of a triangle as either acute, right or obtuse. 
// **Notes**: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90°  (but less than 180°). 
//     > **Examples**: 
//     - 11°, 20° should return "_obtuse_", since the missing angle would be 149° 
//     - 27°, 59° ➞ The third angle is 92° so it is "_obtuse_"
//     - 135°, 11° ➞ The third angle is "_acute_" 
//     - 45°, 45° ➞ The third angle is a "_right angle_"

function missingAngle (a, b){

    let x = 180 - a - b;
    if (x < 90){
        return 'acute';
    }else if (x > 90){
        return 'obtuse';
    }else{
        return 'right angle';
    }
}

console.log(missingAngle(11,20));  // obtuse

console.log(missingAngle(27,59));  // obtuse

console.log(missingAngle(45,45));  // right angle

// 4.

// #### 4. What's the weather?
// * Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "_wet day - you need an umbrella_". If false, print "_dry day - leave your umbrella at home_".


let isRaining = 'true';

console.log((isRaining === 'true') ? "wet day - you need an umbrella" : "_dry day - leave your umbrella at home_");

// ### Loops 

// #### 1. Sequence
// * Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

function geometricalSequence(){
    for (let i = 1; i <= 256; i *= 2){    
        console.log(i);    
    }
}

geometricalSequence()

// 1
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256

// #### 2. Multiples
// * Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

function multiplesOfThree(){
    for (let i = 3; i <= 15; i += 3){    
        console.log(i);    
    }
}
multiplesOfThree()

// 3
// 6
// 9
// 12
// 15

// ### Math 

// #### 1. You've got the power
// * Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
//     > **Examples**:
//     - ```javascript 
//         powerOf(3) //27
//         ```

//     - ```javascript 
//         powerOf(4) //256

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

function vowelCount(myString){

    let vowels = "abcdefghijklmnoprstuwxyz";
    let quanity = 0;
  
    for (let i = 0; i < myString.length; i++){
      if (vowels.indexOf(myString[i]) !== -1){
        quanity = quanity + 1;
      }
    }
    console.log(`${quanity} vowels found`);
  }
  
  vowelCount("hello") // 5 vowels found
  vowelCount("test")  // 4 vowels found
  vowelCount("fbw")   // 3 vowels found

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};