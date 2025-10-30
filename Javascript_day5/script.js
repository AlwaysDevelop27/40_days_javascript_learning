/*
1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
*
* *
* * *
* * * *
* * * * *
2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.

5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

Input: 6789
Output: 9876
6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
*/
// Task 1: Pyramid Pattern
function generatePyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }   
        console.log(pattern.trim());
    }
}
generatePyramid(5);
// Task 2: Multiplication Table
function multiplicationTable(n) {
    for(let i=1;i<=10;i++){
        console.log(n+ "x" + i + "=" +(n*i));
    }
}
multiplicationTable(3);
// Task 3: Summation of Odd Numbers between 1 to 500
function sumOfOddNumbers() {
    let sum = 0;
    for (let i = 1; i <= 500; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log("Sum of odd numbers between 1 to 500 is:", sum);
}
sumOfOddNumbers();
// Task 4: Skipping Multiples of 3
function printSkippingMultiplesOf3() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            continue; 
        }
        console.log(i);
    }
}
printSkippingMultiplesOf3();
// Task 5: Reverse Digits of a Number
function reverseDigits(number) {
    let reversed = 0;
    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }
    console.log("Reversed Number:", reversed);
}
reverseDigits(6789);
// Task 6: Differences between for, while, and do-while loop
/*
- For Loop: Used when the number of iterations is known beforehand. It initializes a counter, checks a condition, and increments/decrements the counter in one line.
- While Loop: Used when the number of iterations is not known and depends on a condition. It checks the condition before executing the loop body.
- Do-While Loop: Similar to the while loop, but it guarantees that the loop body will execute at least once since the condition is checked after the execution. 
