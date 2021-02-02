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

// Format a string of names like 'Bart, Lisa & Maggie'.

function list(names){
  let characters = [];
  let lastPosition = characters.length - 1;
  
  for(let i = 0; i < names.length; i ++){
    characters.push(names[i].name);
  }
  
  if(characters.length === 0){
    return '';
  } else if (characters.length === 1){
    return characters.join('');
  } else if (characters.length === 2){
    return characters.join(' & ')
  } else {
    let allNamesButLast = characters.slice(0, lastPosition);
    let lastName = characters.slice(lastPosition);
    return allNamesButLast.join(', ') + ` & ${lastName}`;
  }

}

// First 8 bits in string are the r value
// Second 8 bits in string are the g value
// Third 8 bits in string are the b value

// Finds which color the string is closest to.
// If equal distance to  two colors it will return as ambiguous


function closestCol(pixels) {
    //This is where I'll store the strings 
    let outputArray = [];
    
    // I loop through each pixel and use a helper function to find closest value string
    for(let pixel of pixels){
        outputArray.push(calculateEachString(pixel));
    }
    
    return outputArray;
}

// This helper function handles each pixel and does the calculations for distance.

function calculateEachString(pixel){
    // Array that will hold the values of each distance
    let distanceArray = [];
    
    // Seperated the bits into 3 bytes
    const firstEight = pixel.split('').slice(0, 8);
    const secondEight = pixel.split('').slice(8, 16);
    const thirdEight = pixel.split('').slice(16, 24);
    
    
    // Helper function that translates each Byte into its number value
    const redValue = convertBinaryToNumber(firstEight);
    const greenValue = convertBinaryToNumber(secondEight);
    const blueValue = convertBinaryToNumber(thirdEight);
    
    //Euclidian distance calculations as provided with RGB values
    const blackDistance = Math.sqrt(Math.pow((redValue - 0), 2) + Math.pow((greenValue - 0), 2) + Math.pow((blueValue - 0), 2));
    const whiteDistance = Math.sqrt(Math.pow((redValue - 255), 2) + Math.pow((greenValue - 255), 2) + Math.pow((blueValue - 255), 2));
    const redDistance = Math.sqrt(Math.pow((redValue - 255), 2) + Math.pow((greenValue - 0), 2) + Math.pow((blueValue - 0), 2));
    const greenDistance = Math.sqrt(Math.pow((redValue - 0), 2) + Math.pow((greenValue - 255), 2) + Math.pow((blueValue - 0), 2));
    const blueDistance = Math.sqrt(Math.pow((redValue - 0), 2) + Math.pow((greenValue - 0), 2) + Math.pow((blueValue - 255), 2));

    //Pushes the values into the distanceArray
    distanceArray.push(blackDistance);
    distanceArray.push(whiteDistance);
    distanceArray.push(redDistance);
    distanceArray.push(greenDistance);
    distanceArray.push(blueDistance);
    
    //Uses helper function to find string with lowest distance value and returns it.
    return findLowest(distanceArray);
}

//Converts array of strings representing binary into number value
function convertBinaryToNumber(array){
    
    let sum = 0;
    //current binary value
    let counter = 1;
    
    array.reverse().forEach((index) => {
        if(index === '1'){
            sum += counter
        }
        counter *= 2;
    });

    return sum;
}

// Helper function that finds lowest distance value in array and returns it as appropriate string value.
function findLowest(distanceArray){
    let lowest = Infinity;
    let answer;
    
    // Calculates the lowest distance and assigns the string to the indexed value
    for(let i = 0; i < distanceArray.length; i++){
        if(distanceArray[i] === lowest){
            answer = 'Ambiguous';
        } else if(distanceArray[i] < lowest){
            lowest = distanceArray[i];
            switch(i){
                case 0:
                    answer = 'Black'
                    break
                case 1: 
                    answer = 'White'
                    break
                case 2:
                    answer = 'Red'
                    break
                case 3:
                    answer = 'Green'
                    break
                case 4: 
                    answer = 'Blue'
                    break
                default:
                    null
            }
        }
    }
    
    return answer;
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

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

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill
// Complete the bonAppetit function below.

//If the bill is even log 'Bon Appetit' if it isn't it prints how much money Brian owes Anna

function bonAppetit(bill, k, b) {
    let total = bill.reduce((acc, val) => acc + val, 0);
    let annasBill = (total - bill[k])/2;
    
    if(b - annasBill === 0){
        console.log("Bon Appetit");
    } else {
        console.log(b - annasBill);
    }

}

// Complete the pageCount function below.
// int n: the number of pages in the book
// int p: the page number to turn to

//Can start at either the front or the back of the back.
//Returns an Integer with the smalles amount of page a user can turn to reach the designated page. 

function pageCount(n, p) {
  const fromFront = Math.floor(p/2);
  const fromBack = Math.floor((n/2)-fromFront);
  const shortestLength = [fromFront, fromBack].sort((a, b) => a - b)[0];
  
  return shortestLength;


}



// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget

// RETURNS int: the maximum that can be spent, or  if it is not possible to buy both items

function getMoneySpent(keyboards, drives, b) {
    let highestPossible = 0;
    
    //First I will sort the prices
    const sortedKeyboards = keyboards.sort((a, b) => a - b);
    const sortedDrives = drives.sort((a, b) => a - b);
    
    //Then I will check if the two lowest prices are possible to purchase together.
    if(sortedKeyboards[0] + sortedDrives[0] > b){
        return -1;
    }
    
    //I will then cycle through both arrays and see what the largest value I can get.
    //This will however lead to O(n^2) time complexity. 
    //This should still be acceptable due to the restrictions on params. 
    
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let sumOfBoth = keyboards[i] + drives[j];
            if(sumOfBoth <= b && sumOfBoth > highestPossible){
                highestPossible = sumOfBoth;
            }
        }
    }
    
    return highestPossible;
}

// Complete the catAndMouse function below.
// int x: Cat 's position
// int y: Cat 's position
// int z: Mouse 's position
// RETURNS string: Either 'Cat A', 'Cat B', or 'Mouse C' depending on which cat reaches the mouse first. IF they reach it at the same time the mouse gets away. 

function catAndMouse(x, y, z) {
  const catADist = Math.abs(x - z);
  const catBDist = Math.abs(y - z);
  
  if(catADist === catBDist){
      return 'Mouse C';
  } else if (catADist > catBDist){
      return 'Cat B';
  } else {
      return 'Cat A';
  }
}


/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  let tallestCandle = candles.sort((a,b) => a-b)[candles.length-1];
  let onlyTallest = candles.filter((candle) => candle === tallestCandle);
  
  return onlyTallest.length;

}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

//It takes in an array.
//It's looking for the longest subarray where the difference between values is 1.
//RETURNS an integer of the length of that subarray

function pickingNumbers(a) {  
  let longestSubArray = 0;

  for(let i = 0; i < a.length; i++){
      let count = 0;
      for(let j = 0; j < a.length; j++){
          if(a[j] === a[i] || a[j] === (a[i] + 1)){
              count++;
          }       
      }
      longestSubArray = Math.max(longestSubArray, count);
  
  }
  return longestSubArray;
}

//k is how high you the runner can jump
//height is the height of every hurdle
//the function returns 0 if the runner can jump all of the hurdles
//It returns how much more height is needed to clear tallest hurdle from runners standard jump 

// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  return Math.max(...height) - k > 0 ? Math.max(...height) - k : 0;
}

// Complete the designerPdfViewer function below.

// h is an array of height values of the alphabet. index 0 is a index 25 is z
// word is the given string.

// The function returns the area of the word.
// The area will be the largest letter height times the length of the word.

function designerPdfViewer(h, word) {
  const wordLength = word.length;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  let tallestLetter = 0;
  
  for(let i = 0; i < word.length; i++){
      const letterIndex = alphabet.indexOf(word[i]);
      if(h[letterIndex] > tallestLetter){
          tallestLetter = h[letterIndex];
      }
  }
  
  return wordLength * tallestLetter;
  
}

// Complete the divisibleSumPairs function below.

// int n: the length of array 
// int ar[n]: an array of integers
// int k: the integer divisor

// Returns int: the number of pairs where a[i] + a[j] is divisible by k

function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for(let i = 0; i < ar.length; i ++){
      for(let j = i + 1; j < ar.length; j++){
          if(i < j && (ar[i] + ar[j]) % k === 0){
              counter++;
          }
      }
  }
  
  return counter;

}

// Complete the angryProfessor function below.

// int k: the threshold number of students
// int a[n]: the arrival times of the  students
// Returns 

// string: either YES if class is cancelled or NO if it isn't cancelled

function angryProfessor(k, a) {
  let onTime = 0;
  
  for(let i = 0; i < a.length; i++){
      if(a[i] <= 0){
          onTime++;
      }
  }
  
  if(onTime >= k){
      return 'NO';
  } else {
      return 'YES';
  }
}

// Complete the utopianTree function below.

// int n: the number of growth cycles to simulate

// Returns int: the height of the tree after the given number of cycles

//Every spring the tree doubles in size and every summer the tree grows by 1 meter

function utopianTree(n) {
  let treeHeight = 1;
  for(let i = 1; i <= n; i++){
      if(i % 2 === 0){
          treeHeight++;
      } else {
          treeHeight *= 2;
      }
  }
  
  return treeHeight;
}

// int i: the starting day number
// int j: the ending day number
// int k: the divisor


// Returns int: the number of beautiful days in the range

// A day is considered beautiful if its normal and reverse are divisible by k 

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  let beautifulDays = 0;
  
  for(let l = i; l <= j; l++){
      const reversedNumber = parseInt(l.toString().split('').reverse().join(''));
      if(Math.abs(l - reversedNumber) % k === 0){
          beautifulDays++;
      }
  }
  
  return beautifulDays;
}

// Complete the viralAdvertising function below.
// int n: the day number to report

// Returns int: the cumulative likes at that day

//Starts with 5 and half those people share it with 3 people each

function viralAdvertising(n) {
  let shared = 5;
  let cumulative = 0;
  
  for(let i = 1; i <= n; i++){ 
      let peopleWhoLiked = Math.floor(shared / 2);
      cumulative += peopleWhoLiked;
      shared = peopleWhoLiked * 3;
  }
  
  return cumulative;
}

// Complete the whatFlavors function below
// cost: an array of integers representing price for a flavor
// money: an integer representing the amount of money they have to spend

// Prints two space-separated integers denoting the respective indices for the two distinct flavors they choose to purchase in ascending order. Recall that each ice cream flavor has a unique ID number in the inclusive range from  to .
function whatFlavors(cost, money) {
  let indexes = {};
  let output = [];
      
  for(let i = 0; i < cost.length; i++) {
      indexes[cost[i]] = i;
  }
  
  // console.log(indexes);
  for(let i = 0; i <  cost.length; i++) {
      let difference = money - cost[i];
      if(indexes.hasOwnProperty(difference) && indexes[difference] !== i){
          output.push(i + 1);
          output.push(indexes[difference] + 1);
      }
  }
  
  console.log(Math.min(...output), Math.max(...output));

}

// Complete the minimumAbsoluteDifference function below.

// int arr[n]: an array of integers

// Returns int: the minimum absolute difference found

function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  let lowestDifference = Infinity;
  
  for(let i = 0; i < arr.length; i++){
      if(arr[i + 1]){
          if(Math.abs(arr[i + 1] - arr[i]) < lowestDifference){
              lowestDifference = Math.abs(arr[i + 1] - arr[i]);
          }
      }     
  }
  
  return lowestDifference;

}


function permutationEquation(p) {
  //Form an indexarray and find the index of x and then find the index of that value from the indexArray.
  let indexArray = [];
  let temp;
  let resArray = [];
  for(let i = 0; i < p.length; i++){
      indexArray[p[i]] = i + 1;
  }
  for(let x = 1; x <= p.length; x++){
      temp = indexArray[x];
      resArray.push(indexArray[temp]);     
  }
  return resArray;

}

// Complete the findDigits function below.
function findDigits(n) {
  let split = n.toString().split('');
  let counter = 0;
  
  for(let i = 0; i < split.length; i++){
      if(n % split[i] === 0){
          counter ++;
      }
  }
  
  return counter;

}

const diagonalDifference = (array) => {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  const lastElementIndex = array.length - 1;

  array.forEach((row, index) => {
    firstDiagonal += row[index];
    secondDiagonal += row[lastElementIndex - index];
  });

  return Math.abs(firstDiagonal - secondDiagonal);
};

function capitalize(s){
  let output = []
  let split = s.split('');
  
  let evens = split.map((letter, i) => {
    if (i % 2 == 0){
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
  output.push(evens.join(''));
  
   let odds = split.map((letter, i) => {
    if (i % 2 != 0){
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
  output.push(odds.join(''));
  
  return output
}


/*
 * Complete the 'chooseFlask' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY requirements
 *  2. INTEGER flaskTypes
 *  3. 2D_INTEGER_ARRAY markings
 */

// zero based index
// RETURN minimum waste flask and will return the minimum index 
// IF no correct answers return -1

// STDIN    Function
// -----    --------
// 2    →   requirements[] size n = 2
// 4    →   requirements = [4, 6]
// 6
// 2    →   flaskTypes = 2
// 5    →   markings[] size total_marks = 5
// 2    →   markings[][] size columns = 2 (always)
// 0 5  →   markings = [[0, 5], [0, 7], [0, 10], [1, 4], [1, 10]]
// 0 7
// 0 10
// 1 4
// 1 10

//RETURNS 0

// STDIN    Function
// -----    --------
// 2    →   requirements[] size n = 2
// 10   →   requirements = [10, 15]
// 15    
// 3    →   flaskTypes = 3
// 6    →   markings[] size totalMarks = 6
// 2    →   markings[][] size columns = 2
// 0 11 →   markings = [[0, 11], [0, 20], [1, 11], [1, 17], [2, 12], [2, 16]]
// 0 20
// 1 11
// 1 17
// 2 12
// 2 16

// RETURNS 1

function chooseFlask(requirements, flaskTypes, markings) {
  // Write your code here
  requirements.sort((a, b) => a - b);
  // console.log({requirements, flaskTypes, markings})
  
  let minWaste = Infinity;
  let minWasteIndex = -1;
  
  // read the input from markings
  let flasks = {}
  // let possibleFlasks = [];
  
  // process one flask against the requirements at a time
  for(let i = 0; i < markings.length; i++){
      if(flasks[markings[i][0]]){
          flasks[markings[i][0]].push(markings[i][1])
      } else {
          flasks[markings[i][0]] = [markings[i][1]]
      }
      
  }
  
  for(let i = 0; i < flaskTypes; i++){
      let waste = 0;
      
      let lastK = 0
      
      if(flasks[i][flasks[i].length - 1] >= requirements[requirements.length -1]){
          for(let j = 0; j < requirements.length; j++){
              // loop through markings
              flasks[i].find(mark => mark >= requirements[j])
              for (let k = lastK; k < flasks[i].length; k++){
                  if(flasks[i][k] >= requirements[j]){
                      lastK = k;
                      waste += flasks[i][k] - requirements[j];
                      break;
                  }
              }
              
          }
          if(waste < minWaste){
              minWaste = waste;
              minWasteIndex = i;
          }        
      }
  }
  
  return minWasteIndex;


}
