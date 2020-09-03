// Add answers here

//1
function nameOfCity(str) {
  let myStr = str.slice(0, 3);
  let firstMatch = "Los";
  let secondMatch = "New";

  if (myStr == firstMatch || myStr == secondMatch) {
    console.log(str);
  } else {
    console.log("The city name does not begin with Los or New");
  }
}
nameOfCity("Losdfdf");
nameOfCity("newyourk");
//2
function isDivisible(num) {
  if (num % 100 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(1000));
console.log(isDivisible(30));

//3
function missingAngle(num1, num2) {
  let num3 = 180 - (num1 + num2);
  console.log(num3);

  if (num3 < 90 && num3 != 0) {
    console.log("acute angle");
  }
  if (num3 == 90) {
    console.log("right angle");
  }
  if (num3 > 90 && num3 < 180) {
    console.log("obtus angle");
  } else {
    console.log("it is not triangle");
  }
}
missingAngle(20, 4);
missingAngle(0, 0);

//4
function isRaining(boolean) {
  let weather = boolean;
  weather == true
    ? console.log("wet day - you need an umbrella")
    : console.log("dry day - leave your umbrella at home");
}

isRaining(true);
isRaining(false);

//loops1
function geometricalSequence(number) {
  let result;
  let myresult = " ";
  for (let i = 0; i < 10; i++) {
    result = number ** i;
    myresult += result + " ";
  }
  console.log(myresult);
}

geometricalSequence(2);

//loops2

function multiplesOfThree(number) {
  let myresult = " ";
  let result;
  for (let i = 1; i <= 5; i++) {
    result = number * i;
    myresult += result + " ";
  }
  console.log(myresult);
}
multiplesOfThree(3);

//Math1
function powerOf(number) {
  let result;
  for (let i = 0; i <= number; i++) {
    result = Math.pow(number, i);
  }
  return result;
}

console.log(powerOf(3));
console.log(powerOf(4));

//problemSolving
function vowelCount(str) {
  let result = str.toUpperCase().split("");
  let sum = 0;
  for (let i = 0; i <= result.length - 1; i++) {
    if (
      result[i] == "A" ||
      result[i] == "E" ||
      result[i] == "I" ||
      result[i] == "O" ||
      result[i] == "U"
    ) {
      sum = sum + 1;
    }
  }
  return sum;
}
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("gks"));

// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {
  nameOfCity,
  isDivisible,
  missingAngle,
  isRaining,
  geometricalSequence,
  multiplesOfThree,
  powerOf,
  vowelCount,
};
