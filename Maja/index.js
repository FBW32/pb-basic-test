// Add answers here

/* 1. 
Los or New?
Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity. */

function nameOfCity(string) {
  if (string.startsWith("Los" || "New")) {
    console.log(string);
  } else {
    console.log("The city name does not begin with Los or New");
  }
}
nameOfCity("Lost"); // Lost
nameOfCity("Loosing"); // The city name does not begin with Los or New

/* 2. 
isDivisible?
Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true. */

function isDivisible(integer) {
  if (integer % 100 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isDivisible(1); // false
isDivisible(100); // true

/* 3. 
Missing Angle
Create a function named "missingAngle" which classifies the missing angle of a triangle as either acute, right or obtuse. Notes: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90° (but less than 180°).
Examples:

11°, 20° should return "obtuse", since the missing angle would be 149°
27°, 59° ➞ The third angle is 92° so it is "obtuse"
135°, 11° ➞ The third angle is "acute"
45°, 45° ➞ The third angle is a "right angle"
 */

function missingAngle(x, y) {
  if (180 - x + y > 90) {
    console.log("missing Angle is obtuse");
  }
  if (180 - x + y < 90) {
    console.log("missing Angle is acute");
  }
  if (180 - x + y == 90) {
    console.log("missing Angle is right 90°");
  } else {
    console.log("no results");
  }
}
missingAngle(11, 20); // missing Angle is obtuse
missingAngle(27, 59); // missing Angle is obtuse
missingAngle(13, 11); // missing Angle is right 90°
missingAngle(45, 45);

/*  4. 
 What's the weather?
Use a ternary operator to complete this task. Create a function named "isRaining". If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home". */

function isRaining(weather) {
  console.log(
    weather == "rainy"
      ? "wet day - you need an umbrella"
      : "dry day - leave your umbrella at home"
  );
}
isRaining("rainy"); // wet day - you need an umbrella
isRaining("sunny"); //dry day - leave your umbrella at home

/* Loops

1. 
Sequence
Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string. */

function geometricalSequence(number) {
    /* let result = 1; */
    for (let i = 0; i <= 8; i++) {
        number = number + Math.pow(2, i) + " ";
    }
    console.log(number);
}
geometricalSequence(1)  // 2 2 4 8 16 32 64 128 256



/* 2. 
Multiples
Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. Concatenate each value to a string and return a string. */

function multiplesOfThree(num) {
  for (let i = 3; i <= 15; i+= 3) {
    num = num + i + " ";
}
console.log(num);
}
multiplesOfThree(0);  // 3 6 9 12 15


/* Math
1. 
You've got the power
Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
Examples:

  powerOf(3) //27
  powerOf(4) //256 */

function powerOf(integer) {
  /* let total=1; */
  for (let i = 1; i <= integer; i++) {
    total = integer * integer * integer;
  }
  return total;
}
console.log(powerOf(3));  
powerOf(4) 


/* Problem Solving
1. 
How many?
Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
Examples:

vowelCount("hello") // 2
vowelCount("test") // 1
vowelCount("fbw") // 0 */


function vowelCount(string)
{
  var vowels = 'aeiouAEIOU';
  var vcount = 0;
  for(var i = 0; i < string.length ; i++)
  {
    if (vowels.indexOf(string[i]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowelCount("hello")); // 2
console.log(vowelCount("test"));  //1
console.log(vowelCount("fbw"));  //0











// DO NOT EDIT below this line - This will result in an automatic fail
/* module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount}; */
