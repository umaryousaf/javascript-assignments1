// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 9-11
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// Task 1
// var city = prompt("Enter City")
// if(city = "karachi") {
//     document.write("Welcome to the city of lights")
// };

// Task 2
// var gender = prompt("Enter Gender")
// if(gender == "male"){
//     document.write("Good Morning Sir.")
// }else if(gender == "female"){
//     document.write("Good Morning Ma'am.")
// }else{
//     document.write("You Are Custom")
// }


// Task 3
// var signal = prompt("Enter Signal Color")
// if(signal == "red"){
//     document.write("Must Stop")
// }else if(signal == "yellow"){
//     document.write("Ready to move")
// }else if(signal == "green"){
//     document.write("Move Now")
// }else{
//     document.write("You are not eliglbe to cross it.")
// }


// Task 4
// var fuel = +prompt("Enter your fuel")
// if(fuel < 0.25 ){
//     document.write("Please refill the fuel in your car")
// }else{
//     document.write("You have enough fuel to survive")
// }

// Task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Correct Script

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Wrong Script


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// condition 3 is wrong

// if (c === 13){
// alert("condition 2 is true");
// }
// condition 2 is true

// if (++c < 14){
// alert("condition 3 is true");
// }
// condition 3 is wrong

// if(c === 14){
// alert("condition 4 is true");
// }
// condition 4 is true


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Correct script

// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }
// condition are true

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// True Condition


// Task 6
// var marks1 = +prompt("Enter marks 1");
// var marks2 = +prompt("Enter marks 2");
// var marks3 = +prompt("Enter marks 3");

// var totalObtainedMarks = marks1 + marks2 + marks3
// var totalMarks = 300;

// var percentage = (totalObtainedMarks/totalMarks) * 100

// if(percentage >= 80){
//     document.write("Total Marks: " + totalMarks + "<br> Marks Obtained: " + totalObtainedMarks + "<br> Percentage: " + percentage + "% <br> Grade: A-one <br> Remarks: Excellent")                   
// }else if(percentage >= 70){
//     document.write("Total Marks: " + totalMarks + "<br> Marks Obtained: " + totalObtainedMarks + "<br> Percentage: " + percentage + "% <br> Grade: A <br> Remarks: Good")                   
// }else if(percentage >= 60){
//     document.write("Total Marks: " + totalMarks + "<br> Marks Obtained: " + totalObtainedMarks + "<br> Percentage: " + percentage + "% <br> Grade: B <br> Remarks: You need to improve")                   
// }else if(percentage < 60){
//     document.write("Total Marks: " + totalMarks + "<br> Marks Obtained: " + totalObtainedMarks + "<br> Percentage: " + percentage + "% <br> Grade: Fail <br> Remarks: Sorry")                   
// }else {}


// Task 7
// var secretNumber = 4
// var guessNumber = +prompt("Enter Number");

// if(secretNumber === guessNumber ){
//     document.write("Bingo! Correct Answer")
// } else if(secretNumber + 1){
//     document.write("Close enough to the correct answer")
// }


// Task 8
// var num = 3;
// var num1 = +prompt("Enter Number");

// if(num1%num == 0){
//     document.write("Your Number is divisible by 3 ")
// }else{
//     document.write("Your Number is not divisible by 3")
// }


// Task 9
// var num = 2;
// var num1 = +prompt("Enter Number");

// if(num1%num == 0){
//     document.write("It is even Number")
// }else{
//      document.write("It is Odd Number")
// }


// Task 10
// var T = +prompt("Enter Temperature");
// if(T > 40){
//     document.write("It is too hot outside.")
// }else if(T > 30){
//     document.write("The Weather today is Normal.")
// } else if(T > 20){
//     document.write("Today’s Weather is cool.")
// } else if(T > 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }


// Task 11 
// var num1 = +prompt("Enter number 1");
// var num2 = +prompt("Enter number 2");
// var operation = prompt("Enter operation");

// if (operation === "+") {
//     document.write("Sum of " + num1 + " and  " + num2 + " is " + (num1 + num2));
// } else if (operation === "-") {
//     document.write("Substraction of " + num1 + " and  " + num2 + " is " + (num1 - num2));
// } else if (operation === "*") {
//     document.write("Multiplication of " + num1 + " and  " + num2 + " is " + (num1 * num2));
// } else if (operation === "/") {
//     document.write("Division of " + num1 + " and  " + num2 + " is " + (num1 / num2));
// } else if (operation === "%") {
//     document.write("Modulus of " + num1 + " and  " + num2 + " is " + (num1 % num2));
// } else {
//     document.write("Error");
// }