// 1 line patter
for (let i = 1; i < 10; i++) {
  console.log("*");
}

let pOne = " ";
for (let a = 0; a < 10; a++) {
  for (let j = 1; j < a; j++) {
    pOne = "* " + pOne;
  }
  console.log(pOne);
  pOne = " ";
}

// multi line
let p = " ";
for (let a = 0; a < 10; a++) {
  for (let j = 1; j < a; j++) {
    p = "* " + p;
  }
  console.log(p + " ");
  p = " ";
}
let secp = "";
for (let h = 0; h < 10; h++) {
  for (let k = 10; k > h; k--) {
    secp = secp + "* ";
  }
  console.log(secp);
  secp = " ";
}

for (let i = 1; i <= 10; i++) {
  let rtringle = "";
  for (let j = 0; j < 10 - i; j++) {
    rtringle += " ";
  }
  for (let k = 0; k < i; k++) {
    rtringle += "*";
  }
  console.log(rtringle);
}

for (let i = 1; i <= 10; i++) {
  let rtringle = "";
  for (let j = 0; j < 10 - i; j++) {
    rtringle += " ";
  }
  for (let k = 0; k < i; k++) {
    rtringle += "*";
  }

  console.log(rtringle);
}
for (let i = 10; i >= 1; i--) {
  let opptringle = "";
  for (let j = 0; j < 10 - i; j++) {
    opptringle += " ";
  }
  for (let k = 0; k < i; k++) {
    opptringle += "*";
  }
  console.log(opptringle);
}

// tringle
console.log("Full tringle");
for (let i = 1; i < 6; i++) {
  let d = "";
  for (let f = 0; f < 6 - i; f++) {
    d += " ";
  }
  for (let g = 0; g < i; g++) {
    d = d + "$ ";
  }
  console.log(d);
}
for (let i = 6; i >= 1; i--) {
  let opptringle = "";
  for (let j = 0; j < 6 - i; j++) {
    opptringle += " ";
  }
  for (let k = 0; k < i; k++) {
    opptringle += "$ ";
  }
  console.log(opptringle);
}

// swipe number
let a = 120;
let b = 190;
a = a + b;
b = a - b;
a = a - b;
console.log("b is ", b);
console.log("a is ", a);

// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
function numberValidation(num) {
  try {
    if (!Number === num) {
      throw new Error("Number type is not integer");
    } else {
      console.log("number is integer");
    }
  } catch {
    console.log("error");
  }
}

numberValidation(12);

// Write a JavaScript program to display the current day and time in the following format.
let currentDay = new Date();
let todayDayInNumber = currentDay.getDay();
const weekday = ["Sun", "Mon", "Tue", "wed", "Thus", "Fri", "Sat"];
let todayIs = weekday[todayDayInNumber];
console.log(`Today's Day : ${todayIs}`);

let currentTime = currentDay.getHours();
let covertInto = currentTime > 12 ? "PM" : "PM";
let convertHr = currentTime - 12;
let currentMin = currentDay.getMinutes();
let getSecond = currentDay.getSeconds();
console.log(
  "Current Time is",
  convertHr + " " + covertInto + ":" + currentMin + ":" + getSecond
);

// Write a JavaScript program that displays the largest integer among two integers.
let numOne = "30";
let numTwo = 20;
let numOneIsnum = parseInt(numOne);
let numTwoIsNum = parseInt(numTwo);
if (numOneIsnum > numTwoIsNum || numTwoIsNum < numOneIsnum) {
  console.log("Number One is big", numOneIsnum);
} else {
  console.log("Number Two is big", numTwoIsNum);
}

// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i, "number is even");
  } else {
    console.log(i, "number is odd");
  }
}
// Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
var students = [
  ["Dhruvi", 80],
  ["Nel", 77],
  ["Vihang", 88],
  ["Dasa", 95],
  ["Divyesh", 68],
];
let sum = 0;
let total = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i][1];
  total = sum / students.length;
}
if (total > 90) {
  console.log("A");
} else if (total > 80) {
  console.log("B");
} else if (total > 70) {
  console.log("C");
} else if (total > 60) {
  console.log("E");
} else {
  console.log("fail");
}

// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Write a JavaScript function that reverses a number.
function endStr(numbers)
{
    var finalNum = numbers.toString()
    let mynum =   Array.from(finalNum).reverse().join("")
    mynum.toString()
    return mynum
}
let result = endStr(123)
console.log(result)