// In this programming assignment you will implement one or more of the integer multiplication algorithms described in lecture.
// To get the most out of this assignment, your program should restrict itself to multiplying only pairs of single-digit numbers. You can implement the grade-school algorithm if you want, but to get the most out of the assignment you'll want to implement recursive integer multiplication and/or Karatsuba's algorithm.
// So: what's the product of the following two 64-digit numbers?

// 3141592653589793238462643383279502884197169399375105820974944592
// 2718281828459045235360287471352662497757247093699959574966967627

// [TIP: before submitting, first test the correctness of your program on some small test cases of your own devising. Then post your best test cases to the discussion forums to help your fellow students!]
// [Food for thought: the number of digits in each input number is a power of 2. Does this make your life easier? Does it depend on which algorithm you're implementing?]

// JavaScript implementation of Karatsuba Multiplication for Stanford Algorithms I course.
// Base function takes two integer strings and returns their sum as a string
const karatsuba = (x, y) => {
  let z = karatsubaMultiplication(x, y);

  let z1 = parseInt(z[0]) * Math.pow(10, x.length);
  let z2 = parseInt(z[1]);
  let z3 = (parseInt(z[2]) + parseInt(z[3])) * Math.pow(10, x.length / 2);

  // Converting integer value to a string to avoid scientific notation && JS integer overload
  function expandScientificNumber(i) {
    let str = "";

    do {
      let a = i % 10;
      i = Math.trunc(i / 10);
      str = a + str;
    } while (i > 0);

    return parseInt(str);
  }

  return expandScientificNumber(z1 + z2 + z3);
};

// Core logic function recursively calculates Karatsuba products
const karatsubaMultiplication = (x, y) => {
  if (x.length <= 2 || y.length <= 2) {
    return (parseInt(x) * parseInt(y)).toString();
  }

  const xLen = x.length;
  const yLen = y.length;
  const xMid = Math.floor(xLen / 2);
  const yMid = Math.floor(yLen / 2);

  let ac = karatsubaMultiplication(x.substring(0, xMid), y.substring(0, yMid));
  let bd = karatsubaMultiplication(x.substring(xMid), y.substring(yMid));
  let ad = karatsubaMultiplication(x.substring(0, xMid), y.substring(yMid));
  let bc = karatsubaMultiplication(x.substring(xMid), y.substring(0, yMid));

  return [ac, bd, ad, bc];
};

karatsuba("5678", "1234");
