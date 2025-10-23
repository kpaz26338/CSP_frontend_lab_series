/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Kevin Paz")

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoritefood = "Steak"; 
favoritefood = "Pizza";


// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log (typeof mystery);
mystery = 42;
console.log (typeof mystery) // number



// TODO 4: Declare const schoolName, try to reassign
const schoolname = "Christopher Columbus high school"


// TODO 5: Create three valid camelCase variables and print them
let quarterback;
let pointGuard; // Declare

pointGuard = "Dwyane Wade"; // Initialize
let classroom = "L12" // Declare and Initialize


// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 17; // Declared and Initialized
console.log ("I am " + age + " years old");


/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   2. What challenges did you encounter, and how did you solve them?
   3. Where else could this programming concept be useful?
   =========================================================== */


   let width = number (prompt ("Give me the width"))
   let height = number( prompt ("Give me the height"));

let area = width * height;
let perimeter = 2 * (width + height);

   console.log("Area:", area);
   console.log("Perimeter:", perimeter);