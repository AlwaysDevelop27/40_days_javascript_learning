/*
✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
✅ Task 2: Print the values to the console.
✅ Task 3: Try reassigning values to let and const variables and observe errors.
✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
*/

// Task 1: Declare variables
let name = "Alice";
let age = 25;
let isStudent = true;
const favoriteLanguage = "JavaScript";  
// Task 2: Print values to console      
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Programming Language:", favoriteLanguage);

// Task 3: Reassign values
name = "Bob";   
age = 30;
isStudent = false;
console.log("Updated Name:", name);
console.log("Updated Age:", age);
console.log("Updated Is Student:", isStudent);

// Uncommenting the next line will cause an error
// favoriteLanguage = "Python"; // Error: Assignment to constant variable.

// Task 4: Create object and array
let person = {
    name: "Charlie",
    age: 28
};  

let numbers = [1, 2, 3, 4, 5];
// Assign to new variables
let newPerson = person;
let newNumbers = numbers;       

// Modify new variables
newPerson.age = 29; 
newNumbers.push(6);
// Print original variables to observe changes
console.log("Original Person Object:", person); // age should be 29
console.log("Original Numbers Array:", numbers); // should include 6
console.log("New Person Object:", newPerson);
console.log("New Numbers Array:", newNumbers);

