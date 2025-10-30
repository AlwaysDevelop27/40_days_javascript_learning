/*
1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.

5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
*/

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
// Task 2: ATM Cash Withdrawal System
function atmWithdrawal(amount) {
    if (amount % 100 === 0) {  
        console.log("Withdrawal successful");
    } else {
        console.log("Invalid amount");
    }
}
atmWithdrawal(500); 
atmWithdrawal(250);
// Task 3: Simple Calculator
function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        default:
            console.log("Invalid operator");
    }
}
simpleCalculator(10, 5, '+'); 
simpleCalculator(10, 5, '-'); 
simpleCalculator(10, 5, '*'); 
simpleCalculator(10, 5, '/'); 
simpleCalculator(10, 5, '%');
// Task 4: Movie Ticket Price based on Age
function movieTicketPrice(age) {
    switch (true) {
        case (age < 18):
            console.log("Ticket Price: $3");
            break;
        case (age >= 18 && age <= 60):
            console.log("Ticket Price: $10");
            break;
        case (age > 60):
            console.log("Ticket Price: $8");
            break;
        default:
            console.log("Invalid age");
    }
}
movieTicketPrice(15); 
movieTicketPrice(30); 
movieTicketPrice(65);
// Task 5: Horoscope Sign Checker
function horoscopeSign(month) {
    switch (month.toLowerCase()) {
        case 'march':
        case 'april':
            console.log("Zodiac Sign: Aries");
            break;
        case 'april':
        case 'may': 
            console.log("Zodiac Sign: Taurus");
            break;
        case 'may':
        case 'june':
            console.log("Zodiac Sign: Gemini");
            break;
        // Add other months and signs as needed
        default:
            console.log("Invalid month");
    }   
}
horoscopeSign('March'); 
horoscopeSign('May'); 
horoscopeSign('June');
// Task 6: Triangle Type Checker
function triangleType(side1, side2, side3) {
    switch (true) {
        case (side1 === side2 && side2 === side3):
            console.log("Equilateral Triangle");
            break;
        case (side1 === side2 || side2 === side3 || side1 === side3):
            console.log("Isosceles Triangle");
            break;
        default:
            console.log("Scalene Triangle");
    }
}
triangleType(5, 5, 5); 
triangleType(5, 5, 8); 
triangleType(5, 6, 7);
    




