// Add answers here 

// #### 1. Los or New?
function nameOfCity(string) {
    if ((string[0]=== "L" &&
        string[1]=== "o" &&
        string[2]=== "s") ||
        (string[0]=== "N" &&
        string[1]==="e" &&
        string[2]=== "w" ) ) {
            return string;
        } else {
            return "The city name does not begin with Los or New";
        }
}
console.log(nameOfCity("Berlin"));

// ===============XXXXXX===============
// #### 2. isDivisible?
function isDivisible(x) {
    if ( x % 100 == 0 ) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(200));

// ===============XXXXXX===============
// #### 3. Missing Angle
function missingAngle(a,b,c) {
    let sum = a + b + c;
        sum = 180;
        if (c = 90) {
            console.log("right angle");
        } else if (c < 90) {
            console.log("acute");
        } else if (c >90 && c < 180) {
            console.log("obtuse");
        }return c;
}
console.log(missingAngle(45,45));
// ===============XXXXXX===============
// #### 4. What's the weather?
let rain = true;
function isRaining(rain) {
    return (rain = true) ? " wet day - you need an umbrella" : "dry day - leave your umbrella at home "
}
console.log(isRaining(rain));

// ===============XXXXXX===============
//### Loops 
//#### 1. Sequence
function geometricalSequence(x){
    let sequence = [];
    for (i=1; i<=x; i=i*2) {
        sequence.push(i);
    }  return(sequence);
}
console.log(geometricalSequence(256));

// ===============XXXXXX===============
// #### 2. Multiples
function multiplesOfThree(x) {
    let arr =[];
    for (i = 3; i<= x; i=i +3) {
        arr.push(i);
    }return arr;
}
console.log(multiplesOfThree(15));

// ===============XXXXXX===============
// ### Math 

// #### 1. You've got the power
function powerOf(y) {
    return Math.pow(y,y);
}
console.log(powerOf(3));
// ===============XXXXXX===============
// #### 1. How many? 
function vowelCount(string) {
    let str = string.split(' ');
    let vowelsNum = 0;
    let newWord = [];
    for (i=0; i < string.length; i++) {
        if (string[i] =="a" ||
            string[i] =="e" ||
            string[i] =="i" ||
            string[i] =="o" ||
            string[i] =="u" ) {
                vowelsNum++;
                newWord = string[i];
            }
    } return vowelsNum;
}
console.log(vowelCount("hello"));


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};