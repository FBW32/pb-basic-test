// Add answers here 

// 1. Los or New?
function nameOfCity(city1,city2){
    let theString1 = "los angeles";
    let theString2 = "newyork";
    if (theString1.startsWith('los') || theString2.startsWith('new')){
        console.log("los angeles , new york"); }
     else {
       console.log("_The city name does not begin with Los or New_");
   }
  
  } 
  nameOfCity(); // los angeles , new york

  //----------------------------

  // 2. isDivisible?

  function isDivisible(number){
    let num1 = number;
    let num2 = 40;
    if (num1 % 100===0){
      console.log("true");
    } else{
      console.log(false);
    }
  }
  isDivisible(1000); // true
  isDivisible(20); // false

  //------------------------------

  // 4. What's the weather?

  function isRaining() {
    let weather = 'rainey';
    console.log ((weather === 'rainey') ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home");
  
   }
   isRaining(); // wet day - you need an umbrella

   //-------------------------

   // Loops

   // 1. Sequence

   function geometricalSequence(string,number){
    const sNum = [];
  for (let x = 1; x <= sNum.length; x++);
  if  (sNum [i] *2){
  console.log(resulte)}
  }
  geometricalSequence("here",2); // not finsh

  //-----------------

  // 2. Multiples
  function multiplesOfThree(){
    let sum = 0;
  for (let x = 1; x <= 5; x++) {
    sum = sum + 3;
    console.log(`Sum = ${sum}`);
  }
  }
  multiplesOfThree("");
//    Sum = 3
// Sum = 6
// Sum = 9
// Sum = 12
// Sum = 15

//----------------------------
// math


function powerOF(number){
    let numP = 3
    console.log(numP* numP);
  }
  powerOF(3); // 9 . but its wrong i couldnt do it cuz time 

  //--------------------

  //Problem Solving 

//1. How many?

  function vowelCount(string)
  {
    var vowelList = 'aeiouAEIOU';
    var vcount = 0;
    
    for(var y = 0; y < string.length ; y++)
    {
      if (vowelList.indexOf(string[y]) !== -1)
      {
        vcount += 1;
      }
    
    }
    return vcount;
  }
  console.log(vowelCount("aiham")); // 3
  

  

  




// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, missingAngle, rainingToday, geometricalSequence, multiplesOfThree, powerOf, vowelCount};