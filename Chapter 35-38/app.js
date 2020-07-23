
// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 35-38
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************




// TASK 1 
// function date(){
//     document.write(new Date())
// };
// date();


// TASK 2 
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")

// function fullName(a ,  b){
//     var add = a + " " + b
//     return add;
// }

// alert(fullName(firstName, lastName))




// TASK 3 
// var num1 = +prompt("Enter First value")
// var num2 = +prompt("Enter second value")

// function sum(a,b){
//     var theSum = a+b
//     return theSum;
// }

// alert(sum(num1, num2))


// TASK 4 
// var num1 = +prompt("Enter First value")
// var num2 = +prompt("Enter second value")
// var opr = prompt("Enter operater value")

// function calc(num1, opr, num2){
//     if(opr ==="+"){
//         return num1 + num2
//     }else if (opr === "-"){
//         return num1- num2
//     }else if (opr === "*"){
//         return num1 * num2
//     }else if (opr === "/"){
//         return num1 / num2
//     }else {
//         return "Incorrect Operation"
//     }
// }

// document.write(calc(num1, opr, num2));


// TASK 5 
// var num1 = +prompt("Enter value")

// function sqr(num1 ){
//     var sqr1 = Math.pow(num1, 2);
//     return sqr1;
// }
// alert(sqr(num1));


// TASK 6 
// var num1 = +prompt("Enter value")

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }  
// alert(factorialize(num1))


// TASK 7
// var num1 = +prompt("Enter First Number")
// var num2 = +prompt("Enter second Number")

// function myFunction(a,b) {
    
//    for( var i = a; i <= b ; i++  ){
//     document.write(i + "<br>" )
// }
// }
// myFunction(num1 ,num2);

// var num1 = +prompt("Enter First Number")
// var num2 = +prompt("Enter second Number")

// for( var i = num1; i <= num2 ; i++  ){
//     document.write(i + "<br>" )
// }


// TASK 8 
// var base = +prompt("Enter base")
// var per = +prompt("Enter perpendicular")

// function hypo(b, p ){

//     function sqr(s){
//         return s*s
//     }

//     var base1 = sqr(b)
//     var per1 = sqr(p)

//     var hypo1 = base1 + per1
//     return Math.sqrt(hypo1)
// }

// document.write(hypo(base, per))


// TASK 9 
// var num1 = 4
// var num2 = 5

// function multiply(a , b){
//     var c = a * b
//     return c
// }
// console.log(multiply(num1, num2))
// console.log(multiply(4,5))


// TASK 10 
// var stri = prompt("Enter A Palindrome Word")
// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false + ": it is not a palindrome word";
//         }
//     }

//     return true + ": it is a palindrome word";
// }

// document.write(palindrome(stri))



// TASK 11 
// stri = prompt("Enter a string")

// function uppercase(str){
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase(stri));


// TASK 12

// var stri =prompt("Enter a few words")

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/g);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word(stri));


// TASK 13 

// var str = prompt("Enter string");
// var word = prompt("Enter word");

// function count(a, l) {
//     return a.split(l).length - 1;
// }
// console.log(count(str, word));




// TASK 14 

// FOR CIRCUMFERANCE
// var radius = +prompt("Enter radius")

// function calcCircumference(a){
//     var b = 2*Math.PI*radius
//     return "The circumference is " + b
// }

// document.write(calcCircumference(radius))


// FOR AREA
// var radius = +prompt("Enter radius")

// function calcArea(a){
//     var b = Math.PI*radius*radius
//     return "The Area is " + b
// }

// document.write(calcArea(radius))