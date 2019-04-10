// This file contains all of the 100,000 integers between 1 and 100,000 (inclusive) in some
// order, with no integer repeated.

// Your task is to compute the number of inversions in the file given, where the i^th
// row of the file indicates the i^th entry of an array.

// Because of the large size of this array, you should implement the fast divide-and-conquer
// algorithm covered in the video lectures.

// The numeric answer for the given input file should be typed in the space below.

// So if your answer is 1198233847, then just type 1198233847 in the space provided without
// any space / commas / any other punctuation marks. You can make up to 5 attempts, and we'll
// use the best one for grading.

const mergeSortInversions = obj => {
  if (obj.arr.length < 2) return obj;

  let mid = Math.floor(obj.arr.length / 2);
  let left = { arr: obj.arr.slice(0, mid), count: obj.count };
  let right = { arr: obj.arr.slice(mid), count: obj.count };
  let result = mergeAndCount(
    mergeSortInversions(left),
    mergeSortInversions(right)
  );

  return result;
};

const mergeAndCount = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  let count = left.count + right.count;

  while (i < left.arr.length && j < right.arr.length) {
    if (left.arr[i] > right.arr[j]) {
      result.push(right.arr[j]);
      j += 1;
      count += left.arr.length - i;
    } else {
      result.push(left.arr[i]);
      i += 1;
    }
  }

  result = [...result, ...left.arr.slice(i), ...right.arr.slice(j)];

  return { arr: result, count };
};

// let x = [1,3,5,2,4,6];
// console.log(mergeSortInversions({arr: x, count: 0}).count);

const util = require("util");
const fs = require("fs");
fs.readFileAsync = util.promisify(fs.readFile);
let result = [];

const parseTxt = async csvFile => {
  const data = await fs.readFileAsync(csvFile);
  const str = data.toString();
  const lines = str.split("\r\n");

  lines.map(line => {
    if (!line) return null;
    result.push(Number(line));
  });
  return result;
};
parseTxt("Week 2/IntegerArray.txt").then(() => {
  console.log(mergeSortInversions({ arr: result, count: 0 }));
});
