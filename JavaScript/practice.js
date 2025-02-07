//GET USER INPUT AND CHECK IF IT IS A MULTIPLE OF 5 OR NOT
// let num = prompt("Enter Number");

// if(num%5 === 0) {
//     console.log("Multiple of 5",num);
// } else{
//     console.log("Not multiple of 5",num);
// }

//WRITE A CODE TO GET GRADES ACCORDING TO STUDENT SCORE
// let score = prompt("enter score = ");
// let grade;

// if(score > 80 && score < 100) {
//     grade = "A";
// }
// if(score > 70 && score < 89) {
//     grade = "B";
// }
// if(score > 60 && score < 69) {
//     grade = "C";
// }
// if(score > 50 && score < 59) {
//     grade = "D";
// } else {
//     grade = "F";
// }

// console.log("Your grade according to the score is",grade);

//CALCULATE SUM OF FIRST N NATURAL NUMBERS USING FOR LOOP
// let num = prompt("Enter the number upto which you want to calculate sum = ");
// let sum = 0;
// for(let count=1; count<=num; count++) {
//     sum = sum + count;
// }
// console.log("The sum is",sum);

//PRINT ALL EVEN NUMBERS FROM 0 TO 100
// for(let num = 1; num <= 100; num++) {
//     if(num % 2 === 0) {
//         console.log("num = ",num);
//     }
// }

//CREATE A NUMBER GUESSING GAME
// let num_to_guess = 25;
// let guess = prompt("Enter your number between 10-30: ");

// while(num_to_guess != guess) {
//     guess = prompt("WRONG! Retry : ");
// }

// console.log("CONGO! The number guessed is correct");

//PROMPT A USERNAME AND GENERATE WITH @ , FULLNAME AND ITS LENGTH
// let user_name = prompt("Enter your username: ");
// let output = "@"+user_name+user_name.length;
// console.log(output);

//FIND AVERAGE MARKS OF CLASS
// let stu = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of stu) {
//     sum += val
// }
// let avg = sum/stu.length
// console.log(avg);

//TO FIND FINAL PRICE AFTER DISCOUNT OF 10%
// let items = [100,500,870,346,650];
// let i = 0;
// for(let val of items){
//     console.log(`value of item at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value of items after offer = ${items[i]}`);
//     i++;
// }

//CREATE A FUNCTION USING NAME "FUNCTION" KEYWORD THAT TAKES STRING AS AN ARGUMENT AND RETURNS NUMBER OF VOWELS IN IT
// function CountVowel(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

//PRINT THE SQUARE OF EACH ELEMENT IN THE ARRAY USING FOREACH LOOP
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach(function printSquare(n,idx){
//     console.log(n**2,idx);
// })

//CREATE AN ARRAY OF MARKS AND ILTER OUR THE MARKS ABOVE 90+
// let marks = [83,99,97,98,34,66];
// let AboveNinety = marks.filter(function print_marks(m){
//     if(m >= 90){
//         return m;
//     }
// })
// console.log(AboveNinety);

//TAKE USEER INPUT AND CREATE AN ARRAY FROM 1 TO N THEN USE REDUCE METHOD TO PRINT MULTIPLICATION AND SUM OF NUMBERS
// let n = prompt("Enter a number : ");
// let array = [];
// for(let i=1; i<=n; i++ ){
//     array[i-1] = i;
// }
// console.log(array);
// let Sum = array.reduce(function print_sum(res,curr){
//     return res + curr;
// })
// console.log(Sum);
// let Multiply = array.reduce(function print_multiply(res1,curr1){
//     return res1 * curr1;
// })
// console.log(Multiply);