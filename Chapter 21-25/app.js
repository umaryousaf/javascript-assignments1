// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 21-25
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************

// TASK 1
// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;

// document.write("Welcome " + fullName);


// TASK 2
// var mob = prompt("Enter Your Favourite Mobile");
// var mob1 = mob.length;

// document.write("My favorite phone is: " +  mob + "<br>")
// document.write("Length Of String: " + mob1)


// TASK 3
// var name = "Pakistani";
// var name1 = name.indexOf("n");

// document.write("String: " +  name + "<br>")
// document.write("Index Of n: " + name1)


// TASK 4
// var name = "Hello World";
// var name1 = name.lastIndexOf("l");

// document.write("String: " +  name + "<br>")
// document.write("Index Of l: " + name1)


// TASK 5
// var name = "Pakistani";
// var name1 = name.charAt(5);

// document.write("String: " +  name + "<br>")
// document.write("Character at index 5: " + name1)


// TASK 6
// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " , lastName);

// document.write(" Welcome " + fullName);


// TASK 7 id pending
// var name = "HYDERABAD";
// document.write("City: " + name + "<br>");
// var firstLetter = name.replace("HYDER" ,"ISLAM");

// document.write("After Replacement: " + firstLetter  );


// TASK 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g , "&");

// document.write(message1);


// TASK 9
// STRING
// const name = "472";
// document.write("Value: "+ name + "<br>");
// document.write("Type: "+ typeof name  + "<br>");
// NUMBER
// const age1 = 56;
// document.write("Value: "+ age1  + "<br>");
// document.write("Type: "+ typeof age1  + "<br>");


// TASK 10
// var program = prompt("Enter any word");
// document.write("User Input: " + program + "<br>");

// var program1 = program.toLocaleUpperCase();
// document.write("Upper Case: " + program1 + "<br>");


// TASK 11
// var str = prompt("Enter any word");
// document.write("User Input: " + str + "<br>");

// var firstLetter = str.slice(0,1).toUpperCase();
// var otherLetters = str.slice(1);
// document.write("Upper Case: " + firstLetter + otherLetters);


// TASK 12
// var num = 35.36;
// var num1 = num.toString();
// var num2 = num1.replace("." , "")

// document.write( "Number: " +  num1 + "<br>")
// document.write("Result: " + num2 + "<br>")


// TASK 13
// var name = prompt("Enter Name");

// for (var i = 0; i < name.length ; i++){
//     if(name[i] === "!" || name[i] === "@" || name[i] === "." || name[i] === "," || name[i] === "$"){
//         document.write("Error Found")
//     }
//      else(
//         document.write("No Error Found")
//     )
//     break;
    
// }






// TASK 14 
// var A = ["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");

// var index = A.indexOf(search);
// if (index > -1) {
//     document.write(search+" is available at index "+(index+1)+" of our bakery");
//     check=true;
// }
// else {
//     document.write("We are sorry "+search  +" is not available in our bakery");
// }




// TASK 15  
// var password = prompt("Enter Your Password");

// var passw=  /^[A-Za-z]\w{6,}$/;  
// if(password.match(passw)){ 
// alert("Your Password Is Correct")
// }else{ 
// alert("You Don't Enter A Valid Password. Try Again")
// }





// TASK 16
// var university = "University of Karachi"
// for(i = 0; i < university.length; i++){
//     document.write(university[i] + "<br>")
// }


// TASK 17
// var name = prompt("Enter Any Name");
// var lastIndex = name.length - 1;
// var lastLetter = name.charAt(lastIndex);
// console.log(lastLetter)


// TASK 18
// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrences of word the ");