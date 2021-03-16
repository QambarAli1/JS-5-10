// MATH EXPRESSIONS
// ASSIGHNMENT NO 6
// Chp 6-9




// Q1


// var a = 10;
// document.write("<h2> Result : </h2>"+"<br>");
// document.write("The value of a is : "+ a +"<br>");
// document.write("........................................"+"<br>"+"<br>")

// document.write("The value of ++a is : "+ ++a +"<br>");
// document.write("Now the value of a is : "+a+"<br>"+"<br>");

// document.write("The value of a++ is :"+ a++ +"<br>");
// document.write("Now the value of a is : "+ a +"<br>"+"<br>");

// document.write("The value of --a is : "+ --a +"<br>");
// document.write("Now the value of a is : "+ a +"<br>"+"<br>");

// document.write("The value of a-- is : "+ a-- +"<br>");
// document.write("Now the value of a is : "+ a);




// Q2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is : "+ a +"<br>");
// document.write("b is : "+ b +"<br>");
// document.write("result is : "+ result);



//  Q3


// var yourName = prompt("What is your name ? ");
// alert("Hello " + yourName);




// Q5


// var a = +prompt("Enter the number you for table : ");
// for (i = 1; i <= 10; i++) {

//     if (a == "") {

//         document.write(5 + " x " + i + " = " + 5 * i + "<br>");
//     }
//     else {
//         document.write(a + " x " + i + " = " + a * i + "<br>");
//     }
// }




// Q6


// var subject1 = prompt("Enter first Subject name");
// document.write( subject1  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub1marks  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub1marks+"%"  +"<br>" +"<br>");
// var subject2 = prompt("Enter second Subject name");
// document.write( subject2  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub2marks   + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub2marks+"%" + "<br>"+"<br>");
// var subject3 = prompt("Enter third Subject name");
// document.write( subject3  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub3marks   + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub3marks+"%" + "<br>"+"<br>");
// var tmForEach = 100;
// var sub1marks = +prompt("Enter marks of first Subject");
// var sub2marks = +prompt("Enter marks of second Subject");
// var sub3marks = +prompt("Enter marks of third Subject");
// var totalMarks = tmForEach*3;
// var obtMarksTotal = sub1marks + sub2marks + sub3marks;
// var totalperc = obtMarksTotal/totalMarks*100;
// document.write("Subject" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Total Marks" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Obtained Marks" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Percentage" + "<br>"+"<br>");
// document.write(  "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalMarks  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obtMarksTotal  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalperc )






////   USER INPUT & CONDITIONAL STATEMENT
////   Assignment # 9-10
////   Chp 9-12




// Q1


// var a = ["Karachi","lahore"];
// var city = prompt("Enter your city name");
// if(city==a[0]){
//     document.write("Welcome to city of lights");
// }
// else{
//     document.write("Welcome to " + city);
// }




// Q2


// var gender = prompt("What is your grnder ? ");
// if(gender=="male"){
//     document.write("Good Morning Sir !");
// }
// else{
//     document.write("Good Morning Ma’am !");
// }




// Q3


// var color = prompt("Enter input color for road signal");
// if(color=="red"){
//     document.write("Must Stop")
// }
// else if(color=="green"){
//     document.write("Move Now")
// }
// else if(color=="yellow"){
//     document.write("Ready to move")
// }
// else{
//     document.write("Please enter valid color");
// }





// Q4


// var currentFuel = +prompt("Enter current fuel you have in litres :");
// if(currentFuel<0.25){
//     document.write("Please Refill the fuel in your car");
// }
// else{
//     document.write("You have enough fuel");
// }





// Q6


// var maxMarks = 100;
// var sub1 = +prompt("Enter Marks scored in Math");
// var sub2 = +prompt("Enter Marks scored in Physics");
// var sub3 = +prompt("Enter Marks scored in Computer");
// var MaxTotal = maxMarks*3;
// var obtMarks = sub1 + sub2 + sub3;
// var perc = obtMarks/MaxTotal*100;
// var grade = [];
// var remarks = [];
// document.write("<h1> Marks Sheet </h1>" + "<br>");
// document.write("Total Marks : " + MaxTotal + "<br>");
// document.write("Marks Obtained : " + obtMarks + "<br>");
// document.write("Percentage : " + perc+"%" + "<br>");
// document.write("Grade : " + grade +"<br>");


// if(perc >= 80 && perc <=100){
//     grade = document.write("A")
// }
// else if (perc<80 && perc >=50){
//     grade = document.write("B");
// }
// else if(perc<=50 && perc >= 33){
//     grade = document.write("c")
// }
// else{
//     grade = document.write("F");
// }


// document.write("<br>");
// document.write("Remarks " + remarks + "<br>");


// if(perc >= 80 && perc <=100){
//     remarks = document.write("You scored very good marks")
// }
// else if (perc<80 && perc >=50){
//     remarks = document.write("You need improvement");
// }
// else if(perc<=50 && perc >= 0){
//     remarks = document.write("You are fail")
// }
// else{
//     remarks = document.write("Error !");
// }





// Q7


// var a = 10;
// var guess = +prompt("Enter your guess number");
// if(guess==a){
//     document.write("Bingo! Correct answer")
// }
// else if(guess== a+1){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("You guesses wrong")
// }




// Q8


// var no = +prompt("Enter number to check whether it is divisible by 3 or not");
// if(no%3==0){
//     document.write("The number is divisible by 3")
// }
// else{
//     document.write("The number is not divisible by 3");
// }





// Q9


// var no =  +prompt("Enter number to check whether it is even or odd");
// if (no%2==0){
//     document.write("Number is Even");
// }
// else if(no%2!=0){
//     document.write("Number is Odd");
// }
// else{
//     document.write("Number is not even nor odd");
// }





// Q10


// var T = +prompt("Enter temperature in C");
// if(T > 40){
//     document.write("It is too hot outside")
// }
// else if (T > 30){
//     document.write("The Weather today is Normal")
// }
// else if (T > 20){
//     document.write("Today’s Weather is cool")
// }
// else if (T >= 10){
//     document.write("“OMG! Today’s weather is so Cool.”")
// }
// else if(T < 10){
//     document.write("Its C0ld")
// }
// else{
//     document.write("Error");
// }






// Q11


// var a = +prompt("Enter First Number");
// var operation = prompt("Enter operation to be performed");
// var b = +prompt("Enter Second Number");
// if (operation=="+"){
//     document.write(a+b);
// }
// else if (operation=="-"){
//     document.write(a-b);
// }
// else if (operation=="*"){
//     document.write(a*b);
// }

// else if (operation=="/"){
//     document.write(a/b);
// }

// else if (operation=="%"){
//     document.write(a%b);
// }
// else{
//     document.write("Error! Invalid operation")
// }






























