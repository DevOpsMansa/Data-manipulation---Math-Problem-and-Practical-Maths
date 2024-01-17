// Part 1: Math Problems

// Create variable declarations using both let and const.
// Apply different types of data literals.
// Use arithmetic operators to manipulate data.
// Use comparison operators to compare data.
// Implement escape sequences in strings for special characters.
// Use template literals for string interpolation and multi-line strings.
// Create effective documentation through the use of comments.

// Solution

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check 1. if all numbers are divisible (is not the same as divide %) by 5. Cache the result in a variable.
const DivisibleByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
// console.log(DivisibleByFive)
console.log (`All numbers are devisible by 5 with the sum of remainders equal 0: ${DivisibleByFive}.`)

// Check 2. if the first number is larger than the last. Cache the result in a variable.
const FirstLargerLast = n1 > n4;
// console.log(FirstLargerLast)
console.log (`The first number is larger than last is validaccording to the provided criteria: ${FirstLargerLast}.`)

// Check 3. Accomplish the following arithmetic chain:
// A. Subtract the first number from the second number.
const result = (n2 - n1) == 5
// console.log(result);
console.log (`First number subtracted from last gives a valid reuslt: ${result}.`)
// B. Multiply the result by the third number.
const resultBythird = (result * n3) == 100
// console.log(resultBythird);
console.log (`Result Multiply by the third number is valid: ${resultBythird}.`)
// C. Find the remainder of dividing the result by the fourth number.
const RemainderOf = (result % n4) == 0
// console.log(RemainderOf);
console.log (`Remainder when result is divided by the fourth number is valid: ${RemainderOf}.`)

//  OR ==>>

const Remainder = (((n2 - n1) * n3) % n4) % 5 == 0;
console.log (`The isRemainervalid according to the provided criteria: ${Remainder}.`) 


// Check 4. Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
// console.log(isUnder25)
console.log (`Changed to < and isUnder25 to eliminate ! as described is valid: ${isUnder25}.`)

// OR==>>
const Lessthan25 = (n1 < 25 )|| n2 < 25 || n3 < 25 || n4 < 25;
// console.log(Lessthan25)
console.log (`The Lessthan25 is valid according to the provided criteria: ${Lessthan25}.`) 

const isValid = DivisibleByFive && FirstLargerLast && RemainderOf && isUnder25;
// console.log(isValid)
console.log (`The four numbers are valid ccording to the provided criteria: ${isValid}.`) 

// Part 2: Practical Math

// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Solution

const distanceTrip = 1500;
const budgetfuel = 175;
const fuelCost_perGalllon = 3;
let fiftyfivePerHour_gallon = 30;
let sixtyPerHour_gallon = 28;
let seventyFivePerHour_gallon = 23;

const gallonsForTrip = budgetfuel / fuelCost_perGalllon;

 let gallonsUsed= "";

function CalculateGallons(n){
    if (n === 30){
         gallonsUsed = distanceTrip / n;
    } else if (n === 38){
      gallonsUsed = distanceTrip / n;
    } else if (n === 23){
     gallonsUsed = distanceTrip / n;
    } else{
      console.log("Enter another number");
    }
}

// Enter "n" which is the number of miles/hr and it will show you how many gallons you would use during the trip
let hoursTraveled = "";
function hours(n){
   if (n === 55){
    hoursTraveled = Math.round(distanceTrip / n);
   }else if(n === 60){
    hoursTraveled = Math.round(distanceTrip / n);
   }else if(n === 75){
    hoursTraveled = Math.round(distanceTrip / n);
   }else{
    console.log("Enter another number");
   }
}

//Enter the speed rate you will be going at,
hours(55);
//Enter the number of miles per gallon you will use up at that speed
CalculateGallons(30);
//

console.log(`At that speed, you will use ${gallonsUsed} gallons for the entire trip and will take you ${hoursTraveled} hours for the whole trip`);
