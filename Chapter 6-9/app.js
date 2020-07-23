// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 6-9
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// Task 1
// var number = 20;
// document.write("Result: <br />");
// document.write("The value of a is: " + number);
// document.write("<br /><br /> -----------------------------");

// var number = ++number;
// document.write("<br /><br />The value of ++a is: " + number);
// document.write("<br />Now the value is: " + number);

// document.write("<br /><br /><br />The value of a++ is: " + number++);
// document.write("<br />Now the value is: " + number++);

// var number = --number;
// document.write("<br /><br /><br />The value of --a is: " + --number);
// document.write("<br />Now the value is: " + number);

// document.write("<br /><br /><br />The value of a-- is: " + number--);
// document.write("<br />Now the value is: " + number--);

// Task 2
// var a = 5;
// document.write("a is " + a);
// var b = 10;
// document.write("<br />b is " + b);
// var result = --a - --b + ++b + b--;
// document.write("<br />  Result is " + result);

// Task 3
// var name = prompt("Enter Your name");
// document.write("Welcome " + name);

// Task 5
// var number = +prompt("Enter number");
// for(var i = 1; i<=10; i++){
// 	if(number){
// 		document.write(number + " x " + i + " = " + number*i + "<br />");
// 	}else{
// 		document.write("8 x " + i + " = " + 8*i + "<br />");
// 	}
// }

// Task 6
// var totalMarks = 100;
// var subjectOne = prompt("Enter Subject One");
// var subjectTwo = prompt("Enter Subject Two");
// var subjectThree = prompt("Enter Subject Three");

// var ObtainedMarks1 = +prompt("Obtained Marks 1st Subject ");
// var ObtainedMarks2 = +prompt("Obtained Marks 2nd Subject ");
// var ObtainedMarks3 = +prompt("Obtained Marks 3rd Subject ");

// var Percentage1 = (ObtainedMarks1 / totalMarks) * 100;
// var Percentage2 = (ObtainedMarks2 / totalMarks) * 100;
// var Percentage3 = (ObtainedMarks3 / totalMarks) * 100;

// var totalObtainedMarks = ObtainedMarks1 + ObtainedMarks2 + ObtainedMarks3;
// var totalPercentage = ((Percentage1 + Percentage2 + Percentage3) / 300) * 100;

// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subjectOne + "</td><td>" + totalMarks + "</td><td>" + ObtainedMarks1 + "</td><td>" + Percentage1 + "%</td></tr>");
// document.write("<tr><td>" + subjectTwo + "</td><td>" + totalMarks + "</td><td>" + ObtainedMarks2 + "</td><td>" + Percentage2 + "%</td></tr>");
// document.write("<tr><td>" + subjectThree + "</td><td>" + totalMarks + "</td><td>" + ObtainedMarks3 + "</td><td>" + Percentage3 + "%</td></tr>");
// document.write("<tr><td>Total</td><td>300</td><td>" + totalObtainedMarks + "</td><td>" + totalPercentage + "%</td></tr>");
// document.write("</table>");
