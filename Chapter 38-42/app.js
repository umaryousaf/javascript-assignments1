// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 38-42
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************



// Task 1
// var a = +prompt("Enter A Value")
// var b = +prompt("Enter B Value")

// var sqr = Math.pow(a,b);

// document.write("Value of A: " + a + "<br>")
// document.write("Value of B: " + b + "<br>" + "<br>")
// document.write("Raised Value: " + sqr)




// Task 2
// var year = +prompt("enter a year")

// function leapyear(){
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// alert(leapyear())





// Task 3
// var a = +prompt("Enter Value of First Side")
// var b = +prompt("Enter Value of Second Side")
// var c = +prompt("Enter Value of Third Side")

// var s = (a + b + c) / 2;

// var area = s*(s-a)*(s-b)*(s-c);

// document.write("Value of Triangle's First Side: " + a + "<br>")
// document.write("Value of Triangle's First Side: " + b + "<br>")
// document.write("Value of Triangle's First Side: " + c + "<br>" + "<br>")
// document.write("Area of Triangle is: " + area)




// Task 4
// var marks1 = +prompt("Enter numbers of First Subject")
// var marks2 = +prompt("Enter numbers of Second Subject")
// var marks3 = +prompt("Enter numbers of Third Subject")
// var getMarks = marks1 + marks2 + marks3

// function  mainFunction(){
//     var totalMarks = 300;

//     function average(){
//         return getMarks / 3
//     }
//     document.write("Average Marks: " + average() + "<br>")

//     function percentage(){
//         return (getMarks / totalMarks) * 100
//     }
//     document.write(" Marks Percentage: " + percentage())
// }
//  mainFunction()





// Task 6
// function disemvowel() {
//     var text = prompt("enter a text")
//     return text.replace(/[aeiou]/gi, '');
    
//   }
//  document.write(disemvowel())
 



// Task 8
// var distance = +prompt("Enter distance in Km");

// function meter(){
//     document.write("Distance in Meters: " + distance*1000 + "<br>")
// };
// meter();

// function feet(){
//     document.write("Distance in Feet: " + distance*3280.8 + "<br>")
// };
// feet();

// function inches(){
//     document.write("Distance in Inches: " + distance*39370 + "<br>")
// };
// inches();

// function centimeter(){
//     document.write("Distance in Centimeters: " + distance*100000)
// };
// centimeter();



// Task 9
// var workingHours = +prompt("Enter time you do work above 40 Hours") ;
// var overtime = workingHours - 40 ;
// var amount = overtime * 12.00 ;

// function overTime(){
//     if(workingHours - 40){
//         console.log(overtime * 12 )
//     }
// }

// console.log(amount);



// Task 10
// function currencyDenomination() {
//     var cash =  prompt("Enter cash (in hundreds): ");                              
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination()



