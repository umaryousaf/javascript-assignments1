// ***************************************************************************************
// ///////////////////////////////////////////////////////////////////////////////////////
//                                      CHAPTER 49-52
// ///////////////////////////////////////////////////////////////////////////////////////
// ***************************************************************************************



// Task 1
// function showText(){
//     var first = document.getElementById("first");
//     var last = document.getElementById("last");
//     var email = document.getElementById("email");
//     var phone = document.getElementById("phone");
//     var address = document.getElementById("address");

//     document.write("First Name: " + first.value + "<br>")
//     document.write("Last Name: " + last.value+ "<br>")
//     document.write("Email Address: "  + email.value+ "<br>")
//     document.write("Phone Number: " + phone.value+ "<br>")
//     document.write("Address: " + address.value+ "<br>")
    

// }



// Task 2
// function readMore() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }



// Task 3
// var table = document.getElementById("table")

// function add(){
//     var id = document.getElementById("id")
//     var name = document.getElementById("name")
//     var Subject = document.getElementById("Subject")




//     var tr = document.createElement("tr")

//     var td1 = document.createElement("td");
//     td1.appendChild(document.createTextNode(id.value));
//     tr.appendChild(td1)
    
//     var td2 = document.createElement("td");
//     td2.appendChild(document.createTextNode(name.value));
//     tr.appendChild(td2)

//     var td3 = document.createElement("td");
//     td3.appendChild(document.createTextNode(Subject.value));
//     tr.appendChild(td3)

//     var td4 = document.createElement("td");
   

//     var editBtn = document.createElement("button");
//     editBtn.setAttribute("class" , "btn btn-success  mr-2")
//     editBtn.setAttribute("onclick" , "editBtn(this)")
//     editBtn.appendChild(document.createTextNode("Edit Text"))
    
//     var delBtn = document.createElement("button");
//     delBtn.setAttribute("class" , "btn btn-danger")
//     delBtn.setAttribute("onclick" , "delBtn(this)")
//     delBtn.appendChild(document.createTextNode("Delete Item"))

//     td4.appendChild(editBtn);
//     td4.appendChild(delBtn);

//     tr.appendChild(td4)

//     table.appendChild(tr);

//     id.value = ""
//     name.value = ""
//     Subject.value = ""
// }

// function delBtn(e){
//     e.parentNode.parentNode.remove();
// }

//  CHAPTER 49-52 End 