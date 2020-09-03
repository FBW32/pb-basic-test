// Add answers here 

// Conditional Algorithms
// 1. Los or New?
// Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.

function nameOfCity(str) {
    if (str.includes("Los") || (str.includes("New"))) {
        return str;
    }
    else {
        return "The city name does not begin with Los or New"
    }
}
console.log(nameOfCity("LosAngeles")); //LosAngeles
console.log(nameOfCity("NewOrleans")); //NewOrleans
console.log(nameOfCity("blablablanew")); //The city name does not begin with Los or New
console.log(nameOfCity("Berlin")); //The city name does not begin with Los or New


// 2. isDivisible?
// Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1//000 ➞ true, 100 ➞ true.

function isDivisible(number) {
    if (number % 100 === 0) {
        return true;
    }
    else {
        return false;
    }
} 
console.log(isDivisible(1)); //false
console.log(isDivisible(100)); //true


// 3. Missing Angle
// Create a function named "missingAngle" which classifies the missing angle of a triangle as either acute, right or obtuse. Notes: An acute angle is smaller than 90°, a right angle is exactly //90° and an obtuse angle is greater than 90° (but less than 180°).

function missinAngle(angle1, angle2) {
  let angle3 = (-angle1 - angle2) + 180;
    if(angle3 < 90) {
      return "Acute";
    }
    if(angle3 === 90) {
      return "Right";
    }
    if((angle3 > 90) && (angle3 < 180)) {
      return "Obtuse";
    }
  }
  
  console.log(missinAngle(11, 20)) //obtuse
  console.log(missinAngle(27, 59)) //obtuse
  console.log(missinAngle(135, 11)) //acute
  console.log(missinAngle(45, 45)) //right

// 4. What's the weather?
// Use a ternary operator to complete this task. Create a function named "isRaining". If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".

function isRaining(weather) {
return (weather === 'rainy') ? "Wet day - you need an umbrella" : "Dry day - leave your umbrella at home" ; 
} 
console.log(isRaining('sunny')); //Dry day - leave your umbrella at home
console.log(isRaining('rainy')); //Wet day - you need an umbrella

// Loops
// 1. Sequence
// Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string.

let result2 = " ";
function geometricalSequence(num1, num2) {
    let result = 1;
    for (let i = 0; i < num2; i++) {
      result = result * num1;
      result2 = result + " ";
      console.log(result2);
      /* 2
4
8
16
32
64
128
256 */
    }
  }
  geometricalSequence(2, 8);


// 2. Multiples
// Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. Concatenate each value to a string and return a string.

  function multiplesOfThre(number){
      for (let i = 3; i <= 15; i +=3){
          number= number + i + " ";
      }

      console.log(number);

  }
  multiplesOfThre(0); //3 6 9 12 15 


// Math
// 1. You've got the power
// Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.

function powerOf(number) {
  return Math.pow(number, number);
  }
console.log(powerOf(3)); //27
console.log(powerOf(4)); //256

// Problem Solving
// 1. How many?
// Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.

function vowelCount(str) {
  let vowel_list = 'aeiou';
  let vcount = 0;
  for(let i = 0; i < str.length ; i++)
  {
    if (vowel_list.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  }
  return `${vcount} vowels found in string ${str} `;
}
console.log(vowelCount("hello")); //2 vowels found in string hello 
console.log(vowelCount("test")); //1 vowels found in string test 
console.log(vowelCount("fbw")); //0 vowels found in string fbw 



// DO NOT EDIT below this line - This will result in an automatic fail
//module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

