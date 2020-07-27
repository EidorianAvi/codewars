// Write a function `greet` that returns "hello world!"

greet() {
  return ("hello world!");
}

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

int nbYear(int p0, double percent, int aug, int p) {
  int n = 0;
  double pn = p0.toDouble();
  while (pn < p) {
    pn = pn * (percent * .01 + 1) + aug;
    n++;
  }
  return n;
}

// 07/17/2020

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

bool XO(str) {
  int x = 0;
  int o = 0;
  var split = str.split('');
  for (int i = 0; i < split.length; i++) {
    if (split[i].toLowerCase() == 'x') {
      ++x;
    } else if (split[i].toLowerCase() == 'o') {
      ++o;
    }
  }
  return x == o ? true : false;
}

// 07/22/2020

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

int solution(int n) {
  var spread = [for (var i = 0; i < n; i += 1) i];
  var threesAndFives =
      spread.where((number) => number % 3 == 0 || number % 5 == 0);
  return threesAndFives.reduce((i, n) => i + n);
}

// 07/23/2020

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

String accum(String str) {
  var split = str.split('');
  var output = [];
  for (var i = 0; i < split.length; i++) {
    String letter = (split[i] * (i + 1)).toLowerCase();
    String capitalized = letter[0].toUpperCase() + letter.substring(1);
    output.add(capitalized);
  }
  return output.join('-');
}

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

String solve(String s) {
  var split = s.split('');
  var upper = 0;
  var lower = 0;
  split.forEach((letter) => {
        if (letter == letter.toLowerCase()) {lower++} else {upper++}
      });
  if (upper > lower) {
    return split.map((letter) => letter.toUpperCase()).join('');
  } else {
    return split.map((letter) => letter.toLowerCase()).join('');
  }
}
