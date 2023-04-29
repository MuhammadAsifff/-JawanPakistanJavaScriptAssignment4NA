// ---------------------------------- STRING METHODS ---------------------

// ----------------------------------Assignment # 21-25------------------
// ----------------------------------JAVASCRIPT -------------------------






// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "!");





// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser



// var favoriteModel = prompt("What is your favorite mobile phone model?");

// var inputLength = favoriteModel.length;

// document.write("The length of string is: " + inputLength);





// 3.Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .



// var word = "Pakistani";

// var index = word.indexOf("n");

// document.write("The index of the letter 'n'  is: " + index);




// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.



// var word = "Hello World";

// var lastIndex = word.lastIndexOf("l");

// document.write("The last index of the letter 'l' is: " + lastIndex);




// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.



// var word = "Pakistani";

// var character = word.charAt(3);

// document.write("The character at the 3rd index is: " + character);




// 6. Repeat Q1 using string concat() method.



// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "!");




// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.



// var word = "Hyderabad";

// var newWord = word.replace("Hyder", "Islam");

// document.write("The new word after replacing 'Hyder' with 'Islam' is: " + newWord);





// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;



// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// document.write("The new message is: " + newMessage);





// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.



// var stringNumber = "472";

// var number = Number(stringNumber);

// document.write("value: " + stringNumber + "<br>");
// document.write("The type: " + typeof stringNumber + "<br>");
// document.write("value: " + number + "<br>");
// document.write("The type: " + typeof number + "<br>");





// 10. Write a program that takes user input. Convert and
// show the input in capital letters.



// var userInput = prompt("Enter some text:");

// var uppercaseInput = userInput.toUpperCase();

// document.write("userInput: " + userInput + "<br>");
// document.write("uppercase: " + uppercaseInput);






// 11. Write a program that takes user input. Convert and
// show the input in title case.



// var userInput = prompt("Enter some text:");

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// var titleCaseInput = toTitleCase(userInput);

// document.write("input case : " + userInput + "<br>" );
// document.write(" title case : " + titleCaseInput);





// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.




// var num = 35.36;

// var str = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>" );
// document.write("Result: " + str);





// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .



// var username = prompt("Enter a username:");

// var regex = /[^\w@.,!]/;

// if (regex.test(username)) {
//   alert("Please enter a valid username without special symbols [@ . , !]");
// } else {
//   document.write("Your username is: " + username);
// }



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:



// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC bakery.What you went to order Sir/Ma'am?:").toLowerCase();

// var index = items.indexOf(userInput);

// if (index !== -1) {
//   alert(userInput + " is available at index " + index + " in our bakery");
// } else {
//   alert("We are sorry. " + userInput + " is not available in our bakery");
// }





// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.




// let password = prompt("Enter a password: ");
// let firstChar = password.charAt(0);
// let containsAlphabetsAndNumbers = false;

// for(let i = 0; i < password.length; i++) {
//   let charCode = password.charCodeAt(i);
//   if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
//     containsAlphabetsAndNumbers = true;
//     break;
//   }
// }

// if(password.length >= 6 && isNaN(firstChar) && containsAlphabetsAndNumbers) {
//   alert("Valid password!");
// } else {
//   alert("Please enter a valid password");
// }





// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.



// var university = "University of Karachi";
// var arr = university.split(" ");
// document.write("Array elements:<br>");
// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }






// 17. Write a program to display the last character of a user
// input.



// var userInput = prompt("Enter a string:");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write("User input: " + userInput + "<br>" );
// document.write("The last character of input: " + lastChar);






// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.



// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/gi) || []).length;
// document.write("The word 'the' occurs " + count + " times in the given string.");





















// // -------------------------------------------------------MATH METHODS-----------------------
// ----------------------------------------------------------Assignment # 26-30----------------
// ---------------------------------------------------------JAVASCRIPT------------------------





// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// let num = prompt("Enter a positive integer:");
// document.write("<h3>Number: " + num + "</h3>");
// document.write("<h3>Round off value: " + Math.round(num) + "</h3>");
// document.write("<h3>Floor value: " + Math.floor(num) + "</h3>");
// document.write("<h3>Ceil value: " + Math.ceil(num) + "</h3>");






// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// let num = prompt("Enter a negative floating point number:");
// document.write("<h3>Number: " + num + "</h3>");
// document.write("<h3>Round off value: " + Math.round(num) + "</h3>");
// document.write("<h3>Floor value: " + Math.floor(num) + "</h3>");
// document.write("<h3>Ceil value: " + Math.ceil(num) + "</h3>");






// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5



// let num = prompt("Enter a number:");
// let absValue = Math.abs(num);
// document.write("<h3>The absolute value of " + num + " is " + absValue + "</h3>");





// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("<h3>The value of the dice is " + diceValue + "</h3>");




// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser



// let coinValue = Math.floor(Math.random() * 2) + 1;
// let coinSide = coinValue === 1 ? "Heads" : "Tails";
// document.write("<h3>The coin landed on " + coinSide + "!</h3>");







// 6. Write a program that shows a random number between 1
// and 100 in your browser.



// let randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("<h3>The random number is " + randomNumber + "!</h3>");




// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms




// let weightInput = prompt("Please enter your weight:");
// let weight = parseFloat(weightInput);

// if (isNaN(weight)) {
//   document.write("<h3>Invalid weight input!</h3>");
// } else {
//   document.write("<h3>Your weight is " + weight + " kgs.</h3>");
// }







// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.



// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userNumberInput = prompt("Guess the secret number between 1 and 10:");

// if (userNumberInput === null) {
//   document.write("<h3>Game cancelled.</h3>");
// } else {
//   let userNumber = parseInt(userNumberInput);
//   if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
//     document.write("<h3>Invalid input!</h3>");
//   } else if (userNumber === secretNumber) {
//     document.write("<h3>Congratulations, you guessed the secret number!</h3>");
//   } else {
//     document.write("<h3>Sorry, the secret number was " + secretNumber + ".</h3>");
//   }
// }

















// // -------------------------------------------DATE METHODS-------------
// -----------------------------------------Assignment # 31-34-------------
// -------------------------------------------JAVASCRIPT---------------



// 1. Write a program that displays current date and time in
// your browser.



// const now = new Date();
// const datetime = now.toLocaleString();

// document.write("Current date and time: " + datetime);







// 2. Write a program that alerts the current month in words.
// For example December.



// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const now = new Date();
// const monthIndex = now.getMonth();

// const currentMonth = months[monthIndex];

// alert("The current month is " + currentMonth + ".");








// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.



// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const now = new Date();
// const dayIndex = now.getDay();

// const currentDay = days[dayIndex];

// alert("The first three letters of the current day are " + currentDay + ".");






// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.



// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const now = new Date();
// const dayIndex = now.getDay();

// const currentDay = days[dayIndex];

// if (currentDay === "Saturday" || currentDay === "Sunday") {
//   alert("It's Fun day!");
// } else {
//   alert("It's a regular day.");
// }







// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.



// const now = new Date();
// const date = now.getDate();

// if (date < 16) {
//   alert("First fifteen days of the month.");
// } else {
//   alert("Last days of the month.");
// }






// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// const now = new Date();
// const minutesSinceEpoch = Math.floor(now.getTime() / 1000 / 60);

// console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);







// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.



// const now = new Date();
// const hour = now.getHours();

// if (hour < 12) {
//   alert("It's AM.");
// } else {
//   alert("It's PM.");
// }






// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.




// const laterDate = new Date(2020, 11, 31);

// console.log(laterDate);







// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



// const startingDate = new Date("June 18, 2015");
// const now = new Date();
// const timeDiff = now.getTime() - startingDate.getTime();
// const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// alert("Number of days past since 1st Ramadan: " + daysDiff);








// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.



// const referenceDate = new Date();
// const beginningOf2015 = new Date("January 1, 2015");
// const secondsDiff = Math.floor((referenceDate.getTime() - beginningOf2015.getTime()) / 1000);

// document.write("Seconds elapsed since the beginning of 2015: " + secondsDiff);








// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// let currentDate = new Date();

// let currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1);

// console.log(currentDate);





// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?



// let currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert(currentDate);






// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.



// let age = prompt("What is your age?");

// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;

// document.write("Your birth year is " + birthYear);







// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge



// let customerName = prompt("Enter your name:");
// let currentMonth = prompt("Enter the current month:");
// let numberOfUnits = parseFloat(prompt("Enter the number of units:"));
// let chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));

// let netAmountPayable = numberOfUnits * chargesPerUnit;

// let latePaymentSurcharge = 0;
// if (netAmountPayable > 0 && netAmountPayable <= 100) {
//     latePaymentSurcharge = 10;
// } else if (netAmountPayable > 100 && netAmountPayable <= 300) {
//     latePaymentSurcharge = 15;
// } else if (netAmountPayable > 300) {
//     latePaymentSurcharge = 20;
// }

// let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + currentMonth + "<br>");
// document.write("Number of units: " + numberOfUnits.toFixed(2) + "<br>");
// document.write("Charges per unit: " + chargesPerUnit.toFixed(2) + "<br>");
// document.write("<br>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));
















// // -----------------------------------FUNCTION-------------------------
// -------------------------------Assignment # 35-38-------------------
// ------------------------------JAVASCRIPT----------------------------


// 1. Write a function that displays current date & time in your
// browser.



// function displayDateTime() {
//     const dateTime = new Date(); 
//     const dateString = dateTime.toLocaleString(); 
    
//     document.getElementById("datetime").innerHTML = dateString;
//   }

// window.addEventListener("load", displayDateTime);







// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

  

// function greetUser(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     alert(`Hello, ${fullName}! Welcome to our website.`);
//   }

//   greetUser("John", "Doe");






// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

  


// function addNumbers() {
//     const num1 = Number(prompt("Enter the first number:")); 
//     const num2 = Number(prompt("Enter the second number:")); 
    
//     const sum = num1 + num2; 
    
//     return sum; 
//   }


//   const result = addNumbers(); 
// console.log(`The sum of the two numbers is: ${result}`); 







// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

  

// function calculator(num1, num2, operator) {
//     let result; 
    
//     switch(operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num1 / num2;
//         break;
//       default:
//         alert("Invalid operator."); 
//         return;
//     }
    
//     document.write(`<p>${num1} ${operator} ${num2} = ${result}</p>`);
    
//     return result;
//   }



//   calculator(10, 5, "+"); 


//   const result = calculator(6, 3, "*"); 
// console.log(result); 








// 5. Write a function that squares its argument.



// function squareNumber(num) {
//     const square = num * num; 
    
//     return square; 
//   }


//   const result = squareNumber(5); 
// console.log(result); 



// 6. Write a function that computes factorial of a number.



// function factorial(num) {
//     let result = 1; 
    
//     for(let i = 1; i <= num; i++) {
//       result *= i;
//     }
    
//     return result; 
//   }


//   const result = factorial(5); 
// console.log(result); 







// 7. Write a function that take start and end number as inputs
// & display counting in your browser.



// function countNumbers(start, end) {
//     for(let i = start; i <= end; i++) {
//       document.write(`${i}<br>`); 
//     }
//   }

//   countNumbers(1, 10); 






// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()



// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num; 
//     }
    
//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
//     const hypotenuseSquare = baseSquare + perpendicularSquare;
//     const hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     return hypotenuse;
//   }


//   const result = calculateHypotenuse(3, 4); 
// console.log(result); 







// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables



// function calculateRectangleAreaWithValue(width, height) {
//     const area = width * height;
//     return area;
//   }
  
//   function calculateRectangleAreaWithVariables() {
//     const width = 5;
//     const height = 10;
//     const area = width * height;
//     return area;
//   }


//   const result1 = calculateRectangleAreaWithValue(5, 10); 
// console.log(result1); 


// const result2 = calculateRectangleAreaWithVariables(); 
// console.log(result2);








// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.



// function checkPalindrome(str) {
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = formattedStr.split('').reverse().join('');
//     return formattedStr === reversedStr;
//   }


//   const result1 = checkPalindrome("racecar"); 
// console.log(result1); 

// const result2 = checkPalindrome("hello world"); 
// console.log(result2); 







// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'



// function capitalizeWords(str) {
//     const words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];
//       const capitalizedWord = word.slice(0, 1).toUpperCase() + word.slice(1);
//       words[i] = capitalizedWord;
//     }
//     return words.join(' ');
//   }


//   const result = capitalizeWords("the quick brown fox"); 
// console.log(result); 






// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'



// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
  

//   const result = findLongestWord("Web Development Tutorial"); 
// console.log(result); 







// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'



// function countOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
//     return count;
//   }


//   const result = countOccurrences('JSResourceS.com', 'o'); 
// console.log(result); 






// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2



// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference}.`);
//   }
  
//   function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     console.log(`The area is ${area}.`);
//   }


//   calcCircumference(5); 
// calcArea(5);















// FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DO￾
// WHILE LOOPS

// Assignment # 38-44
// JAVASCRIPT

  

// function power(a, b) {
//     const result = Math.pow(a, b);
  
//     return result;
//   }
  

//   const result = power(2, 3); 
//   console.log(result); 
    






// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
  

//   const isLeap = isLeapYear(2020); 
//   console.log(isLeap);






// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions



// function calculateTriangleArea(a, b, c) {
//     const s = (a + b + c) / 2;
    
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
//     return area;
//   }
  
//   const area = calculateTriangleArea(3, 4, 5); 




//   function calculateTriangleArea(a, b, c) {
//     const s = (a + b + c) / 2;
    
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
//     return area;
//   }
  
//   const area = calculateTriangleArea(3, 4, 5); 









// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.



// function mainFunction(sub1, sub2, sub3) {
//     var totalMarks = sub1 + sub2 + sub3;
//     var averageMarks = average(totalMarks);
//     var percentageMarks = percentage(totalMarks);
//     console.log("Total Marks: " + totalMarks);
//     console.log("Average Marks: " + averageMarks);
//     console.log("Percentage: " + percentageMarks + "%");
//   }
  
//   function average(totalMarks) {
//     return totalMarks / 3;
//   }
  
//   function percentage(totalMarks) {
//     return (totalMarks / 300) * 100;
//   }
  

//   mainFunction(70, 80, 90);
  
  
  



  

//   5. You have learned the function indexOf. Code your own custom
//   function that will perform the same functionality. You can code
//   for single character as of now.  

  

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1; 
//   }





   

  
// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
  


// function deleteVowels(sentence) {
//     const vowels = ["a", "e", "i", "o", "u"];
  
//     const lowerSentence = sentence.toLowerCase();
  
//     let result = "";
//     for (let i = 0; i < lowerSentence.length; i++) {
//       const char = lowerSentence[i];
  
//       if (!vowels.includes(char)) {
//         result += sentence[i];
//       }
//     }
  
//     return result;
//   }








// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
  


// function countOccurrences(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//       const current = text[i].toLowerCase();
//       const next = text[i + 1].toLowerCase();
//       switch (current) {
//         case "a":
//           if (next === "e" || next === "i" || next === "o" || next === "u") {
//             count++;
//           }
//           break;
//         case "e":
//           if (next === "a" || next === "i" || next === "o" || next === "u") {
//             count++;
//           }
//           break;
//         case "i":
//           if (next === "a" || next === "e" || next === "o" || next === "u") {
//             count++;
//           }
//           break;
//         case "o":
//           if (next === "a" || next === "e" || next === "i" || next === "u") {
//             count++;
//           }
//           break;
//         case "u":
//           if (next === "a" || next === "e" || next === "i" || next === "o") {
//             count++;
//           }
//           break;
//         default:
//           break;
//       }
//     }
//     return count;
//   }

  

//   const sentence = "Pleases read this application and give me gratuity";
//   const occurrences = countOccurrences(sentence);
//   console.log(occurrences); 
  







// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.



// function kmToMeters(distance) {
//     return distance * 1000;
//   }
  
//   function kmToFeet(distance) {
//     return distance * 3280.84;
//   }
  
//   function kmToInches(distance) {
//     return distance * 39370.1;
//   }
  
//   function kmToCentimeters(distance) {
//     return distance * 100000;
//   }

  

//   const distance = 50; 
//   const distanceInMeters = kmToMeters(distance);
//   const distanceInFeet = kmToFeet(distance);
//   const distanceInInches = kmToInches(distance);
//   const distanceInCentimeters = kmToCentimeters(distance);
  
//   console.log(`Distance in meters: ${distanceInMeters}`);
//   console.log(`Distance in feet: ${distanceInFeet}`);
//   console.log(`Distance in inches: ${distanceInInches}`);
//   console.log(`Distance in centimeters: ${distanceInCentimeters}`);








// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.



// function calculateOvertimePay(hoursWorked) {
//     const standardHours = 40;
//     const hourlyRate = 12;
//     let overtimePay = 0;
  
//     if (hoursWorked > standardHours) {
//       const overtimeHours = hoursWorked - standardHours;
//       overtimePay = overtimeHours * hourlyRate;
//     }
  
//     return overtimePay;
//   }
  
//   const hoursWorked = 45;
//   const overtimePay = calculateOvertimePay(hoursWorked);
//   console.log(`Overtime pay is Rs. ${overtimePay.toFixed(2)}`);
  
  





// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.



// function countCurrency(amount) {
//     let hundredNotes = Math.floor(amount / 100);
//     let fiftyNotes = Math.floor((amount % 100) / 50);
//     let tenNotes = Math.floor(((amount % 100) % 50) / 10);
    
//     console.log("You will receive:");
//     console.log(hundredNotes + " hundred notes");
//     console.log(fiftyNotes + " fifty notes");
//     console.log(tenNotes + " ten notes");
//   }
  
//   countCurrency(4); 
//   countCurrency(17); 
//   countCurrency(135); 
  