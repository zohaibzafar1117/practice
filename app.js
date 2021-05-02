        //    CHAPTER NO 1
        // Q1 1. Write a script to greet your website visitor using JS alert box.
        //  alert("Hello world ")

        // Q2. Write a script to display following message on your web page:
        // alert("Error!please enter a valid password")
        
        // Q3. Write a script to display following message on your web page: (Hint : Use line break)
        // alert("Welcome to JS Land  \n  Happy coding!")

        // Q4. Write a script to display following messages in sequence:
        // 1)
        // alert("Welcome to JS Land ")
        // 2)

// Q5. Generate the following message through browser’s developer console:

// Q6. Make use of alerts in your new/existing HTML & CSS project.
// work done in index.html
// Q7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// ALERTS | JAVASCRIPT
// Page 3 of 3
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)
// work done in index.html

// CHAPTER 2
// Assignment # 2 JAVASCRIPT

// Q1. Declare a variable called username.

// var username;

// Q2. Declare a variable called myName & assign to it a string that represents your Full Name.

//         var myName = "Muhammad Zohaib"

// Q3. Write script to
// a) Declare a JS variable, titled message.

// var message;

// b) Assign “Hello World” to variable message

        //  message = ("Hello World");
// 
// c) Display the message in alert box.

        // alert(message);

// Q4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

        // var fname = prompt("enter your full name");
        // var age = +prompt("enter your age");
        // var qual = prompt("enter your qualification");

        // alert("Student Name is" + " " + fname);
        // alert("Age is" + " " + age + " " + " years old");
        // alert("QUalification is" + " " + qual);

// 5. Write a script to display the following alert using one JS variable:
//Q 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

        // var Email = "zohaibzafar1117@mail.com"
        // alert("My Email Address is " + " " + Email)

// Q7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

        // var mess = "A smarter way to learn JavaScript";
        // alert(mess);

// Q8. Write a script to display this in browser through JS

        // document.write("Yah! I can write HTML content through JavaScript")

// Q9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”

        // var a = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
        // alert(a);


// -- END --

// Assignment # 3 JAVASCRIPT
// VARIABLES FOR NUMBERS
// VARIABLES FOR NUMBERS | JAVASCRIPT

// Q1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = 20;
// alert ("I am " + " " + a + "yerars old");

// Q2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

// var b = 14;
// alert("You have visited this site for " + " " + b + " " + "times")

// Q3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear = 1990;
// var c = typeof birthYear;

// document.write("My Birth year is" + " " + birthYear + "<br>") ;
// document.write("Data type of my declared variable is " + " " + c ) ;



// Q4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
// a. Visitor’s name 

// var fname = prompt("Enter you name")

// b. Product title

// var product = prompt("Enter your product name")

// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser:
//  “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var Quantity = +prompt("Enter the quantity ");

// document.write(fname + " ordered " + Quantity + " " + product + " " + " on XYZ Clothing store")


// -- END --


// Assignment # 4 JAVASCRIPT
// VARIABLE NAMES: LEGAL & ILLEGAL
// VARIABLE NAMES: Legal & Illegal | JAVASCRIPT
// Page 1 of 1
// Q1. Declare 3 variables in one statement.

// var a = 1, b = 2, c = 3;

// Q2. Declare 5 legal & 5 illegal variable names.

// 5 legal

// var first;
// var $second;
// var third_3;
// var four;
// var five5;

// 5 illegal

// var 1st;
// var second?;
// var -three;
// var ?four;
// var 5;

// Q3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”

// document.write("<h1>Rules for naming JS variables</h1>")

// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// document.write(" Variable names can only contain numbers, $ and _. For example $my_1stVariable")



// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name

// document.write(" Variables must begin with a letter, $ or _. For example $name, _name or name")

// d) Variable names are case _________

// document.write("Variable names are case sensitive")

// e) Variable names should not be JS _________

// document.write("Variable names should not be JS keyword")

// -- END --


// Assignment # 5 JAVASCRIPT
// MATH EXPRESSIONS
// MATH EXPRESSIONS | JAVASCRIPT

//Q 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//  var a = +prompt("enter first number")
//  var b = +prompt("enter first number")

//  var c = a +b ;

//  document.write("Sum of " + a + " and " + b + " is equal to " + c )

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// // Subtraction
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")

// var c = a - b ;

// document.write("Subtraction of " + a + " and " + b + " is equal to " + c )

// // division
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")

// var c = a / b ;

// document.write(" if you divide  " + a + " from " + b + "answer is equal to " + c )

// multiplication
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")

// var c = a * b ;

// document.write("Product of " + a + " and " + b + " is equal to " + c )

// modulus
// var a = +prompt("enter first number")
// var b = +prompt("enter first number")

// var c = a%b ;

// document.write("if you divide " + a + " from " + b + " your reminder will be " + c )




// Q3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.

        var a;
        
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

        document.write("value after variable decleration is " + a + "<br>")

//  c. Initialize the variable with some number. 

        a = 5;

//  d. Show the value of variable in your browser like “Initial value: 5”. 
        document.write("Initial value is " + a + "<br>");

//  e. Increment the variable. 

        a++;


//  f. Show the value of variable in your browser like “Value after increment is: 6”.

        document.write("value after increament is " + a + "<br>" );

//   g. Add 7 to the variable. 

        var a = a + 7;

//   h. Show the value of variable in your browser like “Value after addition is: 13”. 

document.write("value after addition is " + a + "<br>" );

//   i. Decrement the variable. 

        a--;
        

//   j. Show the value of variable in your browser like “Value after decrement is: 12”. 

document.write("value after  decreament is " + a + "<br>" );

//   k. Show the remainder after dividing the variable’s value by 3.

        a = a%3;

//   l. Output : “The remainder is : 0”.

document.write(" the remainder after dividing the variable’s value by 3 is " + a + "<br>" );

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// MATH EXPRESSIONS | JAVASCRIPT
// Page 3 of 9
// 5. Write a script to display multiplication table of any number in your browser. E.g
// MATH EXPRESSIONS | JAVASCRIPT
// Page 4 of 9
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// MATH EXPRESSIONS | JAVASCRIPT
// Page 6 of 9
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// MATH EXPRESSIONS | JAVASCRIPT
// Page 7 of 9
// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 9 of 9