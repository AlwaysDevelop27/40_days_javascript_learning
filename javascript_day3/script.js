/*
1. Odd or Even?
 Take a number and find if the number is an odd or even number.
 Print the number and result in the console.
2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

 Manage age as a variable.
 Check if the age is elligible for a driving license and print it on the console accordingly.
3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?
4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

 Create a color variable.
 Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
6. Leap Year Checker
Is 2025 a Leap Year?

 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
7. Max of Three Numbers
Find the max number from the lot.

 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.
8. Bitwise Doubling
A tricky one for you

 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.
*/

function isOddOrEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is an Even number.");
    }
    else {
        console.log(number + " is an Odd number.");
    }
}
isOddOrEven(7); 

function canGetDrivingLicense(age) {
    if (age >= 18) {
        console.log("You are eligible to get a driving license.");
    }
    else {
        console.log("You are not eligible to get a driving license.");
    }
}
canGetDrivingLicense(20);

function calculateCTC(monthlySalary, bonusPercentage) {
    let annualSalary = monthlySalary * 12;
    let bonus = (bonusPercentage / 100) * annualSalary;
    let ctc = annualSalary + bonus;
    console.log("Your CTC is: " + ctc + " rupees.");
}
calculateCTC(12300, 20);

function trafficLight(color) {
    if (color.toLowerCase() === "red") {
        console.log("STOP");
    }
    else if (color.toLowerCase() === "green") {
        console.log("GO");
    }
    else {
        console.log("Invalid color. Please use 'red' or 'green'.");
    }
}
trafficLight("Red");
function electricityBillCalculator(unitsPerDay, costPerUnit, discountPercentage) {
    let monthlyUnits = unitsPerDay * 30;
    let monthlyBill = monthlyUnits * costPerUnit;
    let annualBill = monthlyBill * 12;
    let discount = (discountPercentage / 100) * annualBill;
    let annualBillAfterDiscount = annualBill - discount;
    console.log("Monthly Electricity Bill: " + monthlyBill + " rupees.");
    console.log("Annual Electricity Bill after " + discountPercentage + "% discount: " + annualBillAfterDiscount + " rupees.");
}
electricityBillCalculator(10, 150, 20);

function isLeapYear(year) {
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(year + (isLeap ? " is a Leap Year." : " is not a Leap Year."));
}
isLeapYear(2025);

function maxOfThreeNumbers(p, q, r) {
    let max = p;
    if (q > max) {
        max = q;
    }   
    if (r > max) {
        max = r;
    }
    console.log("The maximum number is: " + max);
}
maxOfThreeNumbers(10, 25, 15);

function bitwiseDoubling(count) {
    let doubledCount = count << 1; 
    console.log("Original count: " + count);
    console.log("Doubled count using Bitwise shift: " + doubledCount);
}
bitwiseDoubling(5);




