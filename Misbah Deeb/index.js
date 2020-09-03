// Add answers here 

// 1. Los or New?
// Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.

function cityName(start) {
	if (start.length >= 3 && ((start.substring(0, 3) == 'Los')
							|| (start.substring(0, 3) == 'New')))
	 
		{
			return start;
	  }
  
	return 'The city name does not begin with Los or New';
  }
  
  console.log(cityName("New York"));
  console.log(cityName("Los Angeles"));
  console.log(cityName("Berlin"));


// 2. isDivisible?
// Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true.

function isDivisible(num) {
	{
		if (num % 100 == 0)
		{ return true; }
		else { return false }
	}
	

// 3. Missing Angle
// Create a function named "missingAngle" which classifies the missing angle of a triangle as either acute, right or obtuse. Notes: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90° (but less than 180°).
// Examples:

// 11°, 20° should return "obtuse", since the missing angle would be 149°
// 27°, 59° ➞ The third angle is 92° so it is "obtuse"
// 135°, 11° ➞ The third angle is "acute"
// 45°, 45° ➞ The third angle is a "right angle"

function missingAngle(angle1, angle2) {
	let a = 180 - angle1 - angle2;
	if (a < 90) return 'acute';
	if (a > 90) return 'obtuse';
	return 'right';
}

	// 4. What's the weather?
	// Use a ternary operator to complete this task. Create a function named "isRaining". If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".
	let isRaining = true;
isRaining
  ? console.log('wet day - you need an umbrella')
  : console.log('dry day - leave your umbrella at home');

// Loops
  // 1. Sequence
// Create a function named "geometricalSequence" and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string.

function geometricalSequence() {
	
}
let n = 500;
for(i = 1; i <= n; i*=2) {
	console.log(i+" "+" string");
}
geometricalSequence()

// 2. Multiples
// Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15. Concatenate each value to a string and return a string.

function multiplesOfThree() { for(i = 1 ; i <= 15 ; i++)  

	if (i % 3 == 0) { console.log(i); }
	return i 
}

multiplesOfThree()

// Math
// 1. You've got the power
// Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.

function powerOf(x) {
	let pow=x;
	for ( i = 1; i < x; i++) { pow = pow * x; } return console.log(pow);  }
	
	powerOf(4)

    // Problem Solving
// 1. How many?
// 	Create a function named "vowelCount" that accepts a string as an argument.Check how many vowels the string contains, if any.Return the vowel count of the string.
function countVowels(str) {
	return str.match(/[aeiou]/g).length;
  }


// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};