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

// 6/30/2020

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

//   arrayDiff([1, 2], [1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]

function arrayDiff(a, b) {
  const output = [];
  a = a.toString().split(",").map(Number);
  b = b.toString().split(",").map(Number);

  for (var i in a) {
    if (!b.includes(a[i]) && a != 0) output.push(a[i]);
  }
  return output;
}

// 07/01/2020

// You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a method that takes the array as an argument and returns this "outlier" N.

//   Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11(the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160(the only even number)

function findOutlier(integers) {
  let evens = [],
    odds = [];
  integers.forEach((integer) => {
    integer % 2 == 0 ? evens.push(integer) : odds.push(integer);
  });
  return evens.length > odds.length ? odds[0] : evens[0];
}

// 07/02/2020

// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.It must return the display text as shown in the examples:

// likes[] // must be "no one likes this"
// likes["Peter"] // must be "Peter likes this"
// likes["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names) {
  let arrayLength = names.length;
  switch (arrayLength) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${arrayLength - 2} others like this`;
  }
}

// 07/03/2020

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//   Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  let splitArray = numbers.split(" ");
  let output = [];
  let high = output.push(splitArray.reduce((a, b) => Math.max(a, b)));
  let low = output.push(splitArray.reduce((a, b) => Math.min(a, b)));
  return output.join(" ");
}


// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//  // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  const numbers = num.toString().split('');
  if (numbers.length === 1) {
      return 0;
  }

  const product = numbers.reduce((product, digit) => {
      return product * digit;
  }, 1);

  return 1 + persistence(product);
}

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let duplicates = 0;
  const characters = text.toLowerCase().split('').sort();
  let letters = []
  for( let i = 0; i < characters.length; i++){
    if(characters[i] == characters[i + 1]) {
        letters.push(characters[i]);
    }
  }
  return [...new Set(letters)].length;
}



/*
  Input:
  flightLength: duration oof the flight in minutes
  movies: array of movies times in minutes
  Output: 
  boolean, true if there exists TWO different movies that add up EXACTLY to the flightLength
  Examples:
  flightLength 160
  movies [80, 110, 40] => false
  [80, 110, 80] => true
  [20, 30, 110, 40, 50] => true
*/

// Big O notation
/*
n is the length of the movies array

O(1) - constant
O(n) - linear
O(n^2) - quadratic
O(2^n) - exponential
*/
function twoMovies(flightLength, movies){
	const movieObj = { }
	
	for( let i = 0; i < movies.length; i++) {
		let target = flightLength - movies[i]
		
		// looking for the target in the rest of the array
		if (movieObj[target]) {
			return true
		}
		movieObj[movies[i]] = "anything";

		// for (let j = i+1; j < movies.length; j++){
		// 	if(movies[j] === target) {
		// 		return true;
		// 	} 
		// }
	}
	return false;
}

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"


// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// validPhoneNumber("(123) 456-7890")  =>  returns true
// validPhoneNumber("(1111)555 2345")  => returns false
// validPhoneNumber("(098) 123 4567")  => returns false

function validPhoneNumber(phoneNumber){
  
  let splitBySpace = phoneNumber.split(' ');
  if (splitBySpace[0].length != 5){
    return false;
  }
  
  if(!splitBySpace[1].includes('-')){
    return false
  }
  
  let splitByDash = splitBySpace[1].split('-');
  if(splitByDash[0].length != 3 || splitByDash[1].length != 4){
    return false
  }
  
  return true;
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let counter = 0;
  let index = 0;
  while(index < c.length - 1){
      if(c[index + 2] !== 1 && index + 2 < c.length){
          index = index + 2;
      } else {
          index = index + 1;
      }
      counter += 1;
  }
  return counter
}


// * Complete the 'gradingStudents' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY grades as parameter.
//  */

function gradingStudents(grades) {
    
    let integarArray = [];
    
    grades.forEach((grade) => {
        if(grade < 38){
            integarArray.push(grade);
        } else {
            let splitGrade = grade.toString().split("");
            switch(parseInt(splitGrade[1])){
                case 3:
                    integarArray.push(Math.ceil(grade/5)*5);
                    break
                case 4:
                    integarArray.push(Math.ceil(grade/5)*5);
                    break
                case 8: 
                    integarArray.push(Math.ceil(grade/5)*5);
                    break
                case 9: 
                    integarArray.push(Math.ceil(grade/5)*5);
                    break
                default: 
                    integarArray.push(grade);
                    break
            }            
        }        
    });
    
    return integarArray;
}