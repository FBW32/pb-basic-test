// Add answers here 
/* 1. Los or New?
Create a function named "nameOfCity". If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.
 */

 function nameOfCity (cityName){
firstLetter=cityName.substring(0,3);
firstLetter=firstLetter.toUpperCase();
if((firstLetter==="LOS")||(firstLetter==="NEW")){
    console.log(cityName.toUpperCase());
}else{
    console.log("The city name does not begin with Los or New");
}
 }

 nameOfCity("NEW YORK");
//-------------------------##-----------------------------------
/* #### 2. isDivisible?
* Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_. */
//-------------------------##-----------------------------------
function isDivisible(num){
    if((num % 100) === 0){
        console.log(true);
    }else{
        console.log(false);
    }
}

isDivisible(1000); //true 
//-------------------------##-----------------------------------
/* #### 3. Missing Angle
* Create a function named "_missingAngle_" which classifies the missing angle of a triangle as either acute, right or obtuse. 
**Notes**: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90°  (but less than 180°). 
    > **Examples**: 
    - 11°, 20° should return "_obtuse_", since the missing angle would be 149° 
    - 27°, 59° ➞ The third angle is 92° so it is "_obtuse_"
    - 135°, 11° ➞ The third angle is "_acute_" 
    - 45°, 45° ➞ The third angle is a "_right angle_" */
//-------------------------##-----------------------------------
function missingAngle(angle1,angle2){
    angle3=180-(angle1+angle2);
    if(angle3<90){
        console.log(`${angle3} An acute angle is smaller than 90°`);
    }else if(angle3>90){
        console.log(`${angle3} An obtuse angle is bigher than 90°`);
    }else{
        console.log(`${angle3} a right angle is exactly 90°`);

    }
}
missingAngle(27,59); // expacted return [94 An obtuse angle is bigher than 90°]
//-------------------------##-----------------------------------
/* #### 4. What's the weather?
* Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "_wet day - you need an umbrella_". If false, print "_dry day - leave your umbrella at home_". */
//-------------------------##-----------------------------------
function weather(w) {
    return (w ? console.log("_wet day- you need an umbrella_"):console.log("_dry day - leave your umbrella at home_"));
  }
  console.log(weather(true)); //expacted return [_wet day- you need an umbrella_]
//-------------------------##-----------------------------------

/* ### Loops 

#### 1. Sequence
* Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string. */
//-------------------------##-----------------------------------
function _geometricalSequence_(){
    for(let i=1;i<=256;i*=2){
        n=i.toString();
        console.log(n);
    }
}
_geometricalSequence_();   // expacted return [1 2 4 8 16 32 64 128 256]
//-------------------------##-----------------------------------
/* #### 2. Multiples
* Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.
 */
function _multiplesOfThree_(){
for (let i=3;i<=15;i+=3){
    n=i.toString();
    console.log(n);
}
}

_multiplesOfThree_(); // expacted return [3 6 9 12 15]
//-------------------------##-----------------------------------
/* ### Math 

#### 1. You've got the power
* Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
    > **Examples**:
    - ```javascript 
        powerOf(3) //27
        ```

    - ```javascript 
        powerOf(4) //256
        ``` */
//-------------------------##-----------------------------------
function _powerOf_(num){
    console.log(Math.pow(num,num));
}
_powerOf_(3); // expacted return [27]
_powerOf_(4); // expacted return [256]

//-------------------------##-----------------------------------

/* ### Problem Solving 

#### 1. How many? 
* Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string. 
    > **Examples**: 
    - ```javascript
      vowelCount("hello") // 2
      ```
    - ```javascript
      vowelCount("test") // 1
      ```
    - ```javascript
      vowelCount("fbw") // 0
      ``` */

//-----------------##------------------------
function _vowelCount_(str){
    str=str.split("");
    strArr=str.length;
    var count=0;
    for (i = 0; i < strArr; i++){
        if ((str[i] == "a") || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u")) {
            count = count+1;
    }
}
console.log(`there is ${count} vowel character in this word`);  
}
_vowelCount_("Hello");   //there is 2 vowel character in this word

/*  // DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount}; */