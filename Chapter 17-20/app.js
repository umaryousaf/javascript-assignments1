// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 17-20
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// Task 1
// var array = [[4,6,4,8], [1,4,6,7], [9,5,0,4]];

// Task 2
// var array = [[3,5,6,7], [2,4,9,8], [1,4,0,3]];
// for(var i = 0; i < array.length; i++){
// 	document.write(array[i].join(" ") + " <br />");
// }

// Task 3
// for(var i = 1; i <= 10; i++){
// 	document.write(i + "<br />");
// }

// Task 4
// var number = +prompt("Enter number");
// var length = +prompt("Enter table length");
// for(var i = 1; i <= length; i++){
// 	document.write(number + " x " + i + " = " + number*i + "<br />");
// }

// Task 5
// var fruits = ["grapes", "watermellon", "mellon", "orange", "kiwi"];
// for(var i = 0; i < fruits.length; i++){
// 	document.write(fruits[i] + "<br />");
// }
// document.write("<br />");
// for(var i = 0; i < fruits.length; i++){
// 	document.write("Element at Index " + i + " is " + fruits[i] + "<br />");
// }

// Task 6
// document.write("<b>Counting: </b><br />");
// for(var i = 1; i <= 15; i++){
// 	document.write(i + ", ");
// }

// document.write("<b><br /><br />Reverse Counting: </b><br />");
// for(var i = 10; i > 0; i--){
// 	document.write(i + ", ");
// }

// document.write("<b><br /><br />Even: </b><br />");
// for(var i = 0; i <= 20; i++){
// 	if((i % 2) === 0){
// 		document.write(i, ", ");
// 	}
// }

// document.write("<b><br /><br />Odd: </b><br />");
// for(var i = 0; i <= 20; i++){
// 	if((i % 2) === 1){
// 		document.write(i, ", ");
// 	}
// }

// document.write("<b><br /><br />Series: </b><br />");
// for(var i = 1; i <= 20; i++){
// 	if((i % 2) === 0){
// 		document.write(i, "k, ");
// 	}
// }

// Task 8
// var array = [98232, 53343, 73458, 97671, 16772];
// var max = array[0];
// for(var i =0; i < array.length; i++){
// 	if(array[i] > max){
// 		max = array[i];
// 	}
// }
// document.write("Array items: " + array + "<br />");
// document.write("The largest number is "+max);

// Task 9
// var array = [98232, 53343, 73458, 97671, 16772];
// var max = array[0];
// for(var i =0; i < array.length; i++){
// 	if(array[i] < max){
// 		max = array[i];
// 	}
// }
// document.write("Array items: " + array + "<br />");
// document.write("The smallest number is "+max);


// Task 10
// var number = 2;
// for (var i = 2; i <= 100; i = i + number) {
//     document.write(i + ", ")
// }