// 1\ Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
  return age * 365;
}
/* 2\ Create a function that takes two numbers as arguments and returns their sum. */
function addition(a, b) {
  return a + b;
}
/* 3\ Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers. */
function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}
/* 4\ Create a function that takes an array containing only numbers and return the first element.*/
function getFirstValue(arr) {
  return arr[0];
}
/* 5\ Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
function addition(num) {
  num++;
  return num;
}
/* 6\ Write a function that takes the base and height of a triangle and return its area. */
function triArea(base, height) {
  return (base * height) / 2;
}
/* 7\ Create a function that takes voltage and current and returns the calculated power.*/
function circuitPower(voltage, current) {
  return voltage * current;
}
/* 8\  Given an n-sided regular polygon n, return the total sum of internal angles (in degrees). */
function sumPolygon(n) {
  if (n > 2) {
    return (n - 2) * 180;
  }
  return "the number has to be greater than 2.";
}

// 9\ Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
/*Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11 */

function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}
// 10\ Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
  let S = 0;
  for (let i = 0; i <= num; i++) {
    S += i;
  }
  return S;
}
/* 11\ Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
Notes
Step 0 returns 0 matchsticks.
The input (step) will always be a non-negative integer.
Think of the input (step) as the total number of houses that have been connected together.*/
function matchHouses(step) {
  if (step == 0) {
    return 0;
  }
  if (step == 1) {
    return 6;
  } else {
    return step * 5 + 1;
  }
}
// 12\ Left Shift by Powers of Two
/*Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers   */
function shiftToLeft(x, y) {
  return x * 2 ** y;
}
// 13\ Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}
// 14\ Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
function timeForMilkAndCookies(date) {
  if (date.getDate() == 24 && date.getMonth() == 11) {
    return true;
  } else {
    return false;
  }
}
/* 15\ Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false */
function canNest(arr1, arr2) {
  if (
    Math.min.apply(Math, arr1) > Math.min.apply(Math, arr2) &&
    Math.max.apply(Math, arr1) < Math.max.apply(Math, arr2)
  ) {
    return true;
  }
  return false;
}
/* 16\ Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
Explanation
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n. */
function numberSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}
/* 17\ Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).
Examples
seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"

seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"

seriesResistance([0.5, 0.5]) ➞ "1.0 ohm" */
function seriesResistance(arr) {
  let S = 0;
  for (let i = 0; i < arr.length; i++) {
    S += arr[i];
  }
  if (S <= 1) {
    return `${S} ohm`;
  }
  return `${S} ohms`;
}
/* 18\ Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me." */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (other.age < this.age) {
      return `${other.name} is younger than me.`;
    }
    if (other.age > this.age) {
      return `${other.name} is older than me.`;
    }
    if (other.age == this.age) {
      return `${other.name} is the same age as me.`;
    }
  }
}
/* 19\ Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34. */
function largestSwap(num) {
  let numStr = num.toString();
  if (parseInt(numStr[0]) >= parseInt(numStr[1])) {
    return true;
  }

  return false;
}
/* 20\ A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement" */
function detectWord(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      string += str[i];
    }
  }
  return string;
}
/* 21\ Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(a) {
	retunr a ** 3
}  
*/
function cubes(a) {
  return a ** 3;
}
/* 22\ Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/
function lessThan100(a, b) {
  let Sum = a + b;
  if (Sum < 100) {
    return true;
  }
  return false;
}
/* 23\ Create a function that takes two arrays and insert the second array in the middle of the first array.
Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]] */
function tuckIn(arr1, arr2) {
  arr1.splice(1, 0, ...arr2);
  return arr1;
}
/* 24\ Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0 */
function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}
/* 25\ Write a function redundant that takes in a string str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
Notes
Your function should return a function, not a string. */
function redundant(str) {
  return function () {
    return str;
  };
}
/* 26\  In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.*/
function possibleBonus(a, b) {
  if (a > b || b - a > 6 || b - a == 0) {
    return false;
  }
  if (b - a <= 6) {
    return true;
  }
}
/* 27\ Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

Examples
shiftToRight(80, 3) ➞ 10

shiftToRight(-24, 2) ➞ -6

shiftToRight(-5, 1) ➞ -3

shiftToRight(4666, 6) ➞ 72

shiftToRight(3777, 6) ➞ 59

shiftToRight(-512, 10) ➞ -1 */
function shiftToRight(x, y) {
  let z = Math.floor(x / 2 ** y);
  return z;
}
/* 28\ Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
The catch is you can only use arithmetic or comparison operators, which means:

No if... else statements.
No objects.
No arrays.
No formatting methods, etc.
The goal is to write a short, branch-free piece of code.

Examples
perimeter("s", 7) ➞ 28

perimeter("c", 4) ➞ 25.12

perimeter("c", 9) ➞ 56.52 */
function perimeter(l, num) {
  const isSquare = l === "s";
  const squarePerimeter = isSquare * (4 * num);
  const circlePerimeter = !isSquare * (6.28 * num);

  return squarePerimeter + circlePerimeter;
}
/* 29\ Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1 */
function num_of_digits(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
/* 30\ Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven. */
function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).includes("7")) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}
