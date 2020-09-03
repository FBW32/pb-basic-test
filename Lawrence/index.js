// Add answers here 

//#### 1. Los or New?
//Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.

function nameOfCity(city) {
    
    let citTest1 = "Los";
    let citTest2 = "New";

    if (citTest1 === city.substr(0,3) || citTest2 === city.substr(0,3) ) {
        
        console.log(`${city}`)
    } else {
        console.log(`The ${city} name does not begin with Los or New`);
    }

}

nameOfCity("NewYork");  //NewYork

// #### 2. isDivisible?
 //* Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

    function isDivisible(intNum) {
        if( 100 % intNum === 0){
            console.log(true);
        } else{
            console.log(false);
        }
    }
        isDivisible(50);  // true


// #### 3. Missing Angle
//* Create a function named "_missingAngle_" which classifies the missing angle of a triangle as either acute, right or obtuse. 
//**Notes**: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90°  (but less than 180°).         

function missingAngle( angle1,angle2) {
    
    let verAngle = angle1 + angle2;
    let angleMiss = 0;
    if (180 - verAngle < 90){
        console.log("It is smaller than 90° ===> its an Acute angle");
    } else if ( 180 - verAngle === 90){
        console.log("It is exactly 90° ===> its a right angle")
    } else if ((180 - verAngle > 90) < 180){
        console.log("It is greater than 90° ===> its an Obtuse angle")
    }
}

missingAngle( 45, 45);  // It is exactly 90° ===> its a right angle


//#### 4. What's the weather?
//* Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "_wet day - you need an umbrella_". If false, print "_dry day - leave your umbrella at home_".

function isRaining(weather) {
    
    console.log((weather === "rainy") ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home")
}

isRaining("sunny") // dry day - leave your umbrella at home

//### Loops 

//#### 1. Sequence
//* Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.


function geometricalSequence() {
    
        let linStr = " ";
        for (let i = 1; i <= 256; i*= 2){
            
            linStr += i + " ";
        }
        
        console.log(linStr);
}

geometricalSequence(); // 1 2 4 8 16 32 64 128 256 


// #### 2. Multiples
//* Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

function multiplesOfThree() {

    let linStr2 = " ";
    for (let i = 3; i <= 15; i+= 3){
         
        linStr2 += i + " ";
    }

    console.log(linStr2);
}

multiplesOfThree();  // 3 6 9 12 15 



//### Math 

//#### 1. You've got the power
//* Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.

function powerOf(intVerb) {
    
    let powerInt = intVerb ** intVerb;

    console.log(powerInt);
}

powerOf(5);  // 3125

//#### 1. How many? 
//* Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string. 

function vowelCount(argString) {
    
    let vowelSt = 'aeiouAEIOU';
    let vowelCount = 0;
    for(let i = 0; i < argString.length; i++){

        if (vowelSt.indexOf(argString[i]) !== -1){
            
            vowelCount += 1;
        }
    }
    console.log(vowelCount);
}

vowelCount("Intercontinental") // 6


// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};