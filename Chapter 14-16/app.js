// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 14-16
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// Task 1
// var studentNames = [];

// Task 2
// var studentNames = new Array();

// Task 3
// var stringArray = ["apple", "Banana", "Pineapple", "Pear"];

// Task 4
// var intArray = [2, 4, 8, 41];

// Task 5
// var booleanArray = [true, false];

// Task 6
// var mixedArray = ["Ali", "Hamza", 54, 12, true];

// Task 7
// var degrees = ["Matric", "Inter", "M.COM", "B.A", "BSC", "BCS", "Masters.", "ATP"];
// document.write("Qualifications: <br/><br/>");
// for (var i = 0; i < degrees.length; i++) {
//     document.write(i + 1 + ")" + degrees[i] + "<br/>");
// }

// Task 8
// var names = ["Doe", "Alex", "John"];
// var marks = [643, 765, 567];
// for (var i = 0; i < names.length; i++) {
//     document.write("Score for " + names[i] + " is " + marks[i] + ". Percentage is " + ((marks[i] / 1000) * 100) + "%<br />");
// }

// Task 9
// var colors = ["royal blue", "pink", "red", "orange", "white", "brown"];

// var startColorAdd = prompt("Color Name");
// colors.unshift(startColorAdd);

// var startColorAdd = prompt("Color Name");
// colors.push(startColorAdd);

// var startColorAddFirst = prompt("Color Name");
// var startColorAddSecond = prompt("Color Name");
// colors.unshift(startColorAddFirst, startColorAddSecond);

// colors.shift();

// var colorPosition = +prompt("Color Position");
// var colorName = prompt("Color Name");
// colors.splice(colorPosition, 0 , colorName);

// var colorPosition = +prompt("Color Position");
// var colorsLength = prompt("Colors length");
// var newArr = colors.splice(colorPosition, colorsLength);

// Task 10
// var scores = [100, 456, 321, 342];
// document.write("Score of students: "+scores +"<br />");
// document.write("Ordered scores of students: "+scores.sort());

// Task 11
// var city = ["Faisalabad", "Rawalpindi", "Islamabad", "D.G.Khan", "Lahore", "Multan"];
// document.write("Cities: " + city + "<br />");
// var selectedCity = city.slice(0, 3);
// document.write("Selectd Cities: " + selectedCity);

// Task 12
// var array = ["My", "name", "is", "umar"];
// document.write("Array: <br />" + array + "<br /><br />");
// document.write("String: <br />" + array.join(" "));

// Task 13
// var device = ["CPU", "mouse", "Screen", "Handfree"];
// for(var i = 0; i < device.length; i++){
// 	document.write("Out: <br />");
// 	document.write(devices[i] + "<br />");
// }

// Task 14
// var device = ["CPU", "mouse", "Screen", "Handfree"];
// var deviceReversed = device.reverse();
// for(var i = 0; i < deviceReversed.length; i++){
// 	document.write("Out: <br />");
// 	document.write(deviceReversed[i] + "<br />");
// }

// Task 15
// var company = ["Apple", "Q-Mobile", "Techno", "Samsung", "Nokia", "Dawnlance"];
// document.write("Select Company <br /><select>");
// for(var i = 0; i < company.length; i++){
// 	document.write("<option>" + company[i] + "</option>")
// }
// document.write("</select>");