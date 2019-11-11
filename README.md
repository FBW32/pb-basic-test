# Test - Programming Basics 
## Test Instructions 
* Follow all of the instructions below to complete the test. 
* Remember to print all your solutions. 
* Good luck!

### Conditional Algorithms 
* Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.

* Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

* Create a function named "_missingAngle_" which classifies the missing angle of a triangle as either acute, right or obtuse. 
**Notes**: An acute angle is smaller than 90°, a right angle is exactly 90° and an obtuse angle is greater than 90°  (but less than 180°). 
    > **Examples**: 
    - 11°, 20° should return "_obtuse_", since the missing angle would be 149° 
    - 27°, 59° ➞ The third angle is 92° so it is "_obtuse_"
    - 135°, 11° ➞ The third angle is "_acute_" 
    - 45°, 45° ➞ The third angle is a "_right angle_"

* Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "_wet day - you need an umbrella_". If false, print "_dry day - leave your umbrella at home_".

### Loops 
* Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_.
* Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_.

### Math 
* Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
    > **Examples**:
    - ```javascript 
        powerOf(3) //27
        ```

    - ```javascript 
        powerOf(4) //256
        ```

### Problem Solving 
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
      ```
