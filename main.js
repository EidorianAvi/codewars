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


// * Complete the timeConversion function below.

function timeConversion(s) {
   
   let timeWithoutPeriod = s.substring(0, 8);
   let splitTime = timeWithoutPeriod.split(":");
   
   if(s.includes("AM")){
       if(splitTime[0] != 12){
           return timeWithoutPeriod;
       } else {
           splitTime[0] = "00";
           return splitTime.join(":");
       }
   } else if(s.includes("PM")){
       if(splitTime[0] != 12){
           let militaryHour = (parseInt(splitTime[0]) + 12).toString();
           splitTime[0] = militaryHour;
           return splitTime.join(":");
       } else {
           return timeWithoutPeriod;
       }
   } 
   
}


function minimumBribes(q) {
  let minBribes = 0;
  for(let i = 0; i < q.length; i++){
      if(q[i] - (i+1) > 2){
          console.log("Too chaotic");
          minBribes = null;
          break
      }
      for(let j = Math.max(0, q[i] - 2); j < i; j++){
          if(q[j] > q[i]){
              minBribes++;
          }
      }
  }
  if( minBribes !== null ){
      console.log(minBribes);
  }
}


// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swaps = 0;
  for(let i =0; i< arr.length; i++){
      let currentNumber = arr[i];
      let properIndexNumber = arr[currentNumber - 1];
      while(currentNumber !== properIndexNumber){
          arr[i] = properIndexNumber;
          arr[currentNumber - 1] = currentNumber;
          swaps++;
          currentNumber = properIndexNumber;
          properIndexNumber = arr[currentNumber - 1];
      } 

  }
  return swaps;
}

// Complete the arrayManipulation function below.

// While this completes the task it runs at O(n^2) so it's not optimized enough.
function arrayManipulation(n, queries) {
  let mapOfAdditions = {};
  let highestNumber = 0;
  
  queries.forEach((query) => {
     for(let i = query[0] - 1; i <= query[1] - 1; i++){
         if(!mapOfAdditions[i]){
             mapOfAdditions[i] = query[2];
         } else {
             mapOfAdditions[i] += query[2];
         }
     }
  });
  
  for(const sum in mapOfAdditions){
      if( mapOfAdditions[sum] > highestNumber){
          highestNumber = mapOfAdditions[sum];
      }
  }
  
  return highestNumber;

}

//HACKERRANK ARRAY MANIPULATION
// Complete the arrayManipulation function below.
function arrayManipulation (n, queries) {
    
  //First I create an array in length of n    
  let zeroArray = Array(n);
  
  //These values will be used to determine what the max value will be
  let max = 0;
  let current = 0;
  
  //Iterate through each query and assign initial and final values based on position
  queries.forEach((query) => {
      //First I check if there is a value at that position. If not I initialize its initial value and final values
     zeroArray[query[0] - 1] = zeroArray[query[0] - 1] || {initial: 0, final: 0};
     zeroArray[query[1] - 1] = zeroArray[query[1] - 1] || {initial: 0, final: 0};
     
     //After that I increment both the start and final positions by the value.
     zeroArray[query[0] - 1].initial += query[2];
     zeroArray[query[1] - 1].final += query[2];
  });
  
  //Iterate through the zero array 
  zeroArray.forEach((index) => {
      //First I check if there is a value at that index
     if(index){
         //If there is I increment the current value
         current += index.initial;
         //I then check to see if the current value is larger than the max and if it is I assign the max is reassigned to be the current value.
         if(max < current){
             max = current;
         }
         // I then remove the final value of the index of the current value.
         current -= index.final;
     } 
  });
  
  return max;
  
}

// Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.

// breakingRecords has the following parameter(s):

// scores: an array of integers

function breakingRecords(scores) {
  let bestRecord = scores[0];
  let worstRecord = scores[0];
  let exceededExpectations = 0;
  let belowExpectations = 0;
  
  for(let i = 1; i < scores.length; i++){
      if(scores[i] > bestRecord){
          bestRecord = scores[i];
          exceededExpectations++;
      } else if (scores[i] < worstRecord){
          worstRecord = scores[i];
          belowExpectations++;
      } 
  }
  return [exceededExpectations, belowExpectations];
}

function minimumBribes(q) {
    let minBribes = 0;
    for(let i = 0; i < q.length; i++){
        if(q[i] - (i+1) > 2){
            console.log("Too chaotic");
            minBribes = null;
            break
        }
        for(let j = Math.max(0, q[i] - 2); j < i; j++){
            if(q[j] > q[i]){
                minBribes++;
            }
        }
    }
    if( minBribes !== null ){
        console.log(minBribes);
    }
}

// Complete the birthday function below.
// s is the numbers in the squares of chocolate
// d is his birthday and m is his birth month
// This function should return an integer with the number of ways she could set up the chocolate squares so that he gets m amount of pieces and their length equels d in length
// The pieces will be connected
function birthday(s, d, m) {
    let numberOfWays = 0;
    
    for(let i = 0; i < s.length - m+1; i++){
        if (s.slice(i, i+m).reduce((a, b) => a + b) === d){
         numberOfWays++   
        }
    }
        
    return numberOfWays;
}


function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            aliceScore++;
        } else if (a[i] < b[i]){
            bobScore++;
        } else {
            null
        }
    }
    
    return `${aliceScore} ${bobScore}`
}



// Complete the dayOfProgrammer function below.
// Takes in a year
// Returns a String in the form of dd.mm.yyyy of the 256th day of the year
// Leap years happen every 4 years
// range is from 1700-2700

function dayOfProgrammer(year) {
    
  //Handles the one year they were transitioning to a new calender
  if(year === 1918){
      return `26.09.${year}`;
  }  
  
  //First checks to see if it's a leap year in either of the calenders
  //If not it returns the standard non leap year programmers day
  if((year <= 1917 && year % 4 === 0) || year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
      return `12.09.${year}`;
  } else {
      return `13.09.${year}`;
  }
  
  
}

// Complete the migratoryBirds function below.
// arr is list of birds by ID.
// Returns most common birds ID.
// If two birds have the same amount of birds it returns the one with the lower ID
function migratoryBirds(arr) {
    let birdMap = {};
    let highestBirdCount = 0;
    let birdByID = 0;
    
    //First I map the birds by id and count
    for(let i = 0; i < arr.length; i++){
        if(!birdMap[arr[i]]){
            birdMap[arr[i]] = 1;
        } else {
            birdMap[arr[i]]++;
        }
    }
    
    //Then I check which bird has the highest count and lowest id number
    
    for(let id in birdMap){
        if((birdMap[id] > highestBirdCount) || (birdMap[id] == highestBirdCount && id < birdByID)){
            highestBirdCount = birdMap[id];
            birdByID = id;
        }
    }
    
    return birdByID;

}
