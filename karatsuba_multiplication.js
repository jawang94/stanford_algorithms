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
