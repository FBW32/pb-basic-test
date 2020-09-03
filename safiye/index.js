// Add answers here
//#### 1. Los or New?
function nameOfCity(str) {
  let first1 = "Los";
  let first2 = "New";
  if (str.slice(0, 3) == first1 || str.slice(0, 3) == first2) {
    console.log(str);
  } else {
    console.log("The city name does not begin with Los or New");
  }
}
nameOfCity("Los Angeles");
nameOfCity("Michigan");

//#### 2. isDivisible?
function isDivisible(int) {
  let result = int % 100 == 0 ? true : false;
  console.log(result);
  return result;
}
isDivisible(100); //true

//#### 3. Missing Angle
function missingAngle(angle1, angle2) {
  let missing = 180 - (angle1 + angle2);
  if (missing < 90) {
    console.log("The third angle is acute");
  } else if (missing == 90) {
    console.log("The third angle is a right angle");
  } else if (missing > 90 && missing < 180) {
    console.log(`The third angle is ${missing} so it is obstuse`);
  }
}
missingAngle(11, 20);
//#### 4. What's the weather?
function isRaining(rainingToday) {
  rainingToday === true
    ? console.log("wet day - you need an umbrella")
    : console.log("dry day- Leave your umbrella at home");
}
rainingToday = true;
isRaining(rainingToday);

//### Loops
//#### 1. Sequence
function geometricalSequence() {
  let result = "";
  for (i = 0; i <= 8; i++) {
    result = result + 2 ** i + " ";
  }
  console.log(result);
}
geometricalSequence();
//#### 2. Multiples
function multiplesOfThree() {
  let str = "";
  for (i = 1; i <= 5; i++) {
    str = str + i * 3 + " ";
  }
  console.log(str);
}
multiplesOfThree();

//### Math
//#### 1. You've got the power
function powerOf(int1) {
  console.log(Math.pow(int1, int1));
}
powerOf(4); //256

//### Problem Solving
//#### 1. How many?
function vowelCount(str1) {
  str1.toLowerCase();
  let counta = str1.split("a").length - 1;
  let counte = str1.split("e").length - 1;
  let counti = str1.split("i").length - 1;
  let counto = str1.split("o").length - 1;
  let countu = str1.split("u").length - 1;
  console.log(counta + counte + counti + counto + countu);
  //or easier:str.match1(/[aeiou]/gi) || []).length; and then log it.
}
vowelCount("fbw");

// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {
  nameOfCity,
  isDivisible,
  missingAngle,
  rainingToday,
  geometricalSequence,
  multiplesOfThree,
  powerOf,
  vowelCount,
};
