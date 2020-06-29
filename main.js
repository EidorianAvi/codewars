// 6/25/2020

// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  const pos = arr.filter((num) => num > 0);
  return pos.length ? pos.reduce((num, sum) => sum + num) : 0;
}

Test.assertEquals(positiveSum([1, 2, 3, 4, 5]), 15);
Test.assertEquals(positiveSum([1, -2, 3, 4, 5]), 13);
Test.assertEquals(positiveSum([]), 0);
Test.assertEquals(positiveSum([-1, -2, -3, -4, -5]), 0);
Test.assertEquals(positiveSum([-1, 2, 3, 4, -5]), 9);

// 6/26/2020

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].See test cases for more examples.

function capitalize(s) {
  let output = [];
  let split = s.split("");

  let evens = split.map((letter, i) => {
    if (i % 2 == 0) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
  output.push(evens.join(""));

  let odds = split.map((letter, i) => {
    if (i % 2 != 0) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
  output.push(odds.join(""));

  return output;
}

// 6/27/2020

// You are going to be given a word.Your job is to return the middle character of the word.If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let length = s.length;
  let index = Math.floor(length / 2);
  if (length % 2 == 0) {
    return s.slice(index - 1, index + 1);
  } else if (length % 2 != 0) {
    return s.slice(index, index + 1);
  }
}
// 6/29/2020

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2(February), is part of the first quarter; month 6(June), is part of the second quarter; and month 11(November), is part of the fourth quarter.

const quarterOf = (month) => {
  let quarter1 = [1, 2, 3],
    quarter2 = [4, 5, 6],
    quarter3 = [7, 8, 9],
    quarter4 = [10, 11, 12];
  if (quarter1.includes(month)) {
    return 1;
  } else if (quarter2.includes(month)) {
    return 2;
  } else if (quarter3.includes(month)) {
    return 3;
  } else if (quarter4.includes(month)) {
    return 4;
  }
};
