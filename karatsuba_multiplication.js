const karatsuba = (x, y) => {
  let z = karatsubaMultiplication(x, y);

  let z1 = parseInt(z[0]) * Math.pow(10, x.length);
  let z2 = parseInt(z[1]);
  let z3 = (parseInt(z[2]) + parseInt(z[3])) * Math.pow(10, x.length / 2);

  return z1 + z2 + z3;
};

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

let temp = karatsuba("5678", "1234");

function toFix(i) {
  var str = "";
  do {
    let a = i % 10;
    i = Math.trunc(i / 10);
    str = a + str;
  } while (i > 0);
  return str;
}

toFix(temp);
