                           //   21
                            // Changing case


    // ----------------------- toLowerCase ------------                       

    //  var city = prompt('Enter Your City Name');
    //  city = city.toLowerCase()  
    //  var arr = ['karachi' , 'islamabad' , 'pishawer'] 
    //  for (var i=0; i<arr.length; i++){
    //     if(arr[i] ===city){
    //         alert('city has found');
    //     }
    //     else{alert('City not Found')};
    //  }                





    // ----------------------- toUpperCase ------------                       

    //  var city = prompt('Enter Your City Name');
    //  city = city.toUpperCase()  
    //  var arr = ['KARACHI' , 'ISLAMABAD' , 'PISHAWER'] 
    //  for (var i=0; i<arr.length; i++){
    //     if(arr[i] ===city){
    //         alert('city has found');
    //     }
    //     else{alert('City not Found')};
    //  }                








    //  ------------First letter capitalize from user------


    // var city = prompt('Enter Your City Name');
    // var firstchar = city.slice(0,1);
    // firstchar =  firstchar.toUpperCase();
    // var otherChar = city.slice(1);
    // otherChar = otherChar.toLowerCase();

    // var city = firstchar+otherChar;
    // console.log(city);

    //  var arr = ['Karachi' , 'Islamabad' , 'Pishawer'];
    //  for (var i=0; i<arr.length; i++){
    //     if(arr[i] ===city){
    //         alert('city has found');
    //     }
    //     else{alert('City not Found')};
    //  }  










    // -------------22
//            Strings:
//            Measuring length
//               and extracting parts------------------------

// var str = 'abcdf'
// var strPart = str.slice(1);
// console.log(strPart)






// var myName='asif';
// var text = myName.slice(0,1).toUpperCase();
// text = text + myName.slice (1,5);
// console.log(text);








                        // checking double spaces


//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
 
//   }
  
//  }










                       //        23
                        //     Strings:
                        // Finding segments

//  var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should";
//   for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//  text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//  console.log(text);
//   }
//   }









// ------------------- Finding index-------------------


// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should";
// var indxNum = text.indexOf('World War II');
// console.log(indxNum);







// ------------------- Finding index of last-------------------


// var text = "The New Yorker magazine doesn't allow the phrase World War II. New They say it should";
// var indxNum = text.lastIndexOf('New');
// console.log(indxNum);







//-----------------// Finding and replacing  segments---


//  var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should";
//  var indxNum = text.indexOf('World War II');
//  var firstText = text.slice(0,indxNum);
//  var replacingText = 'The Second World War';
//  var thirdText = text.slice(indxNum+12);
//  console.log(firstText+replacingText+thirdText);











                //              24
                //          Strings:
                // Finding a character at a location


                // var a = "Asif";
                // console.log(a.charAt(3));










//----------------- slice in string--------------


// string.slice(startIndex, endIndex);


// let str = "Hello, World!";

// // Extract a slice of the string from index 0 to 4 (excluding index 4)
// let slice1 = str.slice(0, 4); // Output: "Hell"
// console.log(slice1);

// // Extract a slice of the string from index 7 to the end of the string
// let slice2 = str.slice(7); // Output: "World!"
// console.log(slice2);

// // Extract a slice of the string from index -6 to the end of the string
// let slice3 = str.slice(-6); // Output: "World!"
// console.log(slice3);

// // Extract a slice of the string from index 2 to index 8 (excluding index 8)
// let slice4 = str.slice(2, 8); // Output: "llo, W"
// console.log(slice4);







// -------------------chatAt----------------------

// var text = 'Luxury Mogul is Takes Top Spot. The worlds richest person is Frances Bernard Arnault';
// var charAtIndex=text.charAt(4);
// console.log(charAtIndex);




// something is exit----------------


// for(i=0; i <text.length; i++){

// }











                                //           25
                                //         Strings:
                                //   Replacing characters



// -----------------replacing character

// var text = 'Luxury Mogul is Takes Top Spot. The worlds richest person is Frances Bernard Arnault';
// text=text.replace(/is/g,'Asif');
// // console.log(text);
// document.write(text);







//    var para = "this is example";
//    var para1 = para.replace("example" , "text");
//    console.log(para1);










                   // Global  Replacing characters

    //    var para = "this is example , this is example";
    //    var para1 = para.replace(/example/g, "text");
    //    console.log(para1);








//-----------------// Finding and replacing  segments---


//  var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should";
//  var indxNum = text.indexOf('World War II');
//  var firstText = text.slice(0,indxNum);
//  var replacingText = 'The Second World War';
//  var thirdText = text.slice(indxNum+12);
//  console.log(firstText+replacingText+thirdText);










// -------------------------------26
// Rounding numbers

// 0 - 0.4 (round off to smallest number)
// 0.5 - 0.9 (round off to largest number)

// floor // forcefully round off to smallest number 
// ceil // forcefully round off to largest number
// randamNumber // 16 decimal places 

// var num= 2.5;
// myNumber=Math.round(num);
// console.log(myNumber);



// var num= 2.5;
// myNumber=Math.floor(num);
// console.log(myNumber);




// var num= 2.5;
// myNumber=Math.ceil(num);
// console.log(myNumber);





// var randamNumber = Math.randam()
// console.log(math.ceil(randamNumber * 6));





// string to number 
//Number // parseInt //parseFloat

// var num = "5.3";
// num=parseFloat(num);
// num=Number(num);
// var num_2 = 0.7;
// var total = num + num_2
// console.log(total);


// number to string
//toString

// var a = 7;
// a=a.toString()
// console.log(typeof a )
// var b = ' Second most powerful number';
// var total = a + b;
// console.log(total);










// ----------------27-------------------------
// -----------Generating random numbers-------


// var randam1 = Math.random() ;
// console.log(randam1);






// multiply by 7 means it generate number between 1 to 6.9

// var randam1 = Math.random() * 7;
// console.log(randam1);







// ------------------makig game 
                  
//                 head tail---------------


// var headsuser = prompt("enter heads username");
// var tailsuser = prompt("enter tails username");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);
// if(floor=== 0){
//     alert("Heads " + headsuser + " win the toss")
// }
// else{
//         alert("Tails " + tailsuser + " win the toss")
// }
// console.log(floor);










// -----------------28-----------------
// ---------Converting strings to integers and decimals---


// ----------------two method-------------------


// Number("10");

// var num = "10";
// num = Number(num);


// console.log(num);





// parseInt("10");

// var num = "10";
// num = parseInt(num);
// console.log(num);










// -------------------29-----------------------------
// -----Converting strings to numbers, numbers to-----
// -------------strings------------------------


// var num = 10;
// console.log(num.toString());










// -------------------------30-------------------
// -----------Controlling the length of decimals-----


// var num = 77.445366;
// var cont = num.toFixed(3);
// console.log(cont);










// ----------31
// ---------------Getting the current date and time





// var now = new Date();
// console.log(typeof now.toString());
// console.log(now);



// var a = new Date();
// console.log(a);



// var a = new Date();
// console.log(a);
// var b = a.toString();
// var c = b.slice(0,3);
// console.log(c);



// const now = new Date();
// console.log(now);



// const now = new Date();

// const year = now.getFullYear();
// const month = now.getMonth() + 1; // add 1 because getMonth() returns a zero-based index
// const day = now.getDate();
// const hour = now.getHours();
// const minute = now.getMinutes();
// const second = now.getSeconds();
// const millisecond = now.getMilliseconds();

// console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`);



// ---------------get day---------------------


//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  console.log(nameOfToday);










// ---------------32
// -----------------------Extracting parts of the date and time



// var day = now.getDay();
// var daysArr = ["sun","mon","tues","wed","thurs","fri","sat"];
// var today = daysArr[day]
// console.log('Day',today);
// var day = now.getDay();



// var monthArr = ["jan","feb","march","apr","may","june","july"];
// var month = now.getMonth();
// var nowMonth = monthArr[month]
// console.log(nowMonth);


// var fullYear = now.getFullYear();
//  console.log(fullYear);

// var hour = now.getHours();
//  console.log(hour);

// var milisec = now.getMilliseconds();
//  console.log(milisec);

// var min = now.getMinutes();
//  console.log(min);

// var sec = now.getSeconds();
//  console.log(sec);

// var time = now.getTime();
//  console.log(time);

// var tzone = now.getTimezoneOffset();
//  console.log(tzone);










// ----------------------33
// --------------------------Specifying a date and time



// var today = new Date();
// var d = new Date("July 21, 1983 13:25:00");
// console.log(d);



// ------------------ date of birth calculater-------

// var dob =new Date(prompt("Enter your date of birdth","Jan 1,1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12));
// document.write(accuage);






// var dob =  prompt("Enter your date of birth", "Jan 1, 1970");
// var dobmili = new Date(dob).getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12));
// document.write(accuage);













// ---------------in console sir do-------------


// var dob = new Date("Dec 26, 1991");
// var dobmili = dob.getTime();
// var today = new Date();
// var todarmili = today.getTime()
// dobmili
// todarmili
// var diff = todarmili - dobmili
// diff
// var diffyear = diff/(1000*60*60*24*30*12);
// diffyear
// var accuage = Math.floor(diffyear);
// accuage













// function agecalc(){
// var dob = new Date(prompt("Enter your date of bith","Jan 1, 1970"))
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage);
// }

// agecalc();










// -----------------34
// ----------------Changing elements of a date and time



// var d = new Date();
// d.setFullYear(2001);
// console.log(d);



//  var d = new Date();
//  d.setFullYear(2001);
//  d.setMonth(11);
//  console.log(d);








// ==================age calculator=====================


// var now = new Date();
// var nowTime = now.getTime()
// console.log(nowTime);


// var birthDate = new Date (prompt("Jan 1,1970"));
// var birthDateTime = birthDate.getTime()
// console.log(birthDateTime);


// var diff = nowTime - birthDateTime
// console.log(diff);


// var myBirthYear = (diff/(999*60*60*24*365));
// console.log(Math.floor(myBirthYear));










// ---------------------35
// -----------------------Functions



// ================syntex=========

// function first(){

// }



// console.log("His");

// function first(){
// alert("He' World");
// }

// console.log("World");




// ===============by default value

// function getTime(greeting,name= "now"){
//     alert(greeting + "" + name);
//     var now = new Date()
//     var hours = now.getHours()
//     var min = now.getMinutes()
//     var sec = now.getSeconds()
//     console.log("Now the time is " + hours + " " + min + " " + sec)
// }

// getTime("Welcome", );
// getTime("Welcome", "Asifff");

// function getTime(greeting,name){
//     alert(greeting + "" + name);
//     var now = new Date()
//     var hours = now.getHours()
//     var min = now.getMinutes()
//     var sec = now.getSeconds()
//     console.log("Now the time is " + hours + " " + min + " " + sec)
// }

// getTime("Welcome", "Asif");
// getTime("Welcome", "Asifff");











// -------------------------37------------------------
// ---------------------Functions:------------------
// -----------------------Passing data back from them--





// ================ getting value fromm function===


// // Parameters
// function first(a,b){
// return a+b
// }

// // arguments
// console.log(first(2,3));

// console.log(first(7,3));







// // Parameters
// function first(a,b){
// return "It's never to late";
// }

// // arguments
// console.log(first(2,3));










// --------------------------38---------------------
// ----------------------------Functions:---------------
// -------------------------Local vs. global variables---



// function foo(){
//  var a = "Asif";
//  console.log(a);
// }                  ====== not working============



// var a = "Asif";

// function foo(){
//      console.log(a);
//      } ====== not working============






//  var a = "Asif";

//  function foo(){
//     a = "Ahmed";
//  } 

//  foo();

// console.log(a);




// ==================now not calling function===========

//  var a = "Asif";

//  function foo(){
//     a = "Ahmed";
//  } 

 

// console.log(a);








 
// one way

// function greeting(){
//     alert("He's World");
// }

// greeting();





// second way

// function greeting(greet){
//     alert(greet);
// }

// greeting("NA Times");



// function add(a,b,c){
//     alert(a+b+c);
// }

// add(7,7,7);





// ------------taking value from function------


// function add(a,b,c){

//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g);





// globally declare  within the function declare

// var h = 15;
// function add(a,b,c){
// alert(h);
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g);







// globally declare 

// function add(a,b,c){
// alert(h);
// var h = 15;
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11);
// alert(g);








// function agecalc(){
// var dob = new Date(prompt("Enter your date of bith","Jan 1, 1970"))
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage);
// }

// agecalc();











// =========================Making calculator using function===


// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     } 
//     else if(opr === "*"){
//         return num1 * num2
//     }else{
//         return "Incorrect Operator!"
//     }
// }
// var result = calc(5,"-",5);
// var result1 = calc(4,"*",6);
// var result2 = calc(4,"$",9)
// console.log(result)
// console.log(result1)
// console.log(result2)










// function foo(a,b){
//     return a+b
// }

// console.log(foo(1));







// function foo(a,b= 3){
//     return a+b
// }

// console.log(foo(1));





// function foo(a,b=3){
//     return a+b
// }

// console.log(foo(1,5));






// function foo(){
// }

// console.log(foo(1,5)); ===========undefined===========




// function foo(){
// }

// console.log(foo()); ===========undefined===========










                //            39
                // switch statements:
                // How to start them




                // var name = "Ghous"

// switch (name) {
//     case "Ghous":
//         alert("Hello Ghous")
//         break;
//     case "Basit":
//         alert("Hello Basit")
//         break;
//     default:                   =======in 40 chapter
//         alert("hello")
// }










// var userInput = prompt("Enter a day" , "Enter Here")
// switch (userInput) {
//     case "Monday":
//         alert("Today is Monday");
//         break
//     case "Tuesday":
//         alert("Today is Tuesday");
//         break
//     case "Wednesday":
//         alert("Today is Wednesday");
//         break
//     case "Thursday":
//         alert("Today is Thursday");
//         break
//     case "Friday":
//         alert("Today is Friday");
//         break
//     case "Saturday":
//         alert("Today is Saturday");
//         break
//     case "Sunday":
//         alert("Today is Sunday");
//         break
//    default:
//     alert("Invalid Input");     
// }  



// var age = +prompt("Enter a age" , "Enter Here")
// switch (true) {
//     case age>1 && age<20:
//         alert("Your age is greater then 1 and less then 20");
//         break
//         case age>20 && age<40:
//             alert("Your age  greater then 20 and less then 40");
//             break
//         default:
//       alert("Invalid Input");     
//         } 










                        //     41
                        // while loops


// =================syntex=================


// var i = 0;
//  while (i <= 3) {
//  alert(i);
//  i++;
//  }



// var i = 0;
//  while (i < 10) {
//  console.log(i);
//  i++;
//  console.log(i);
//  }



// var b = 0;
// while(b<10){
//     console.log(b);
//     b++;
// }

// =======it only work if condition true==










                        //          42
                        // do...while loops



// var i = 0;
// do{
//     console.log(i);
//     i++
// }   while (i <=3)        




// var c = 0;
// do{
//     console.log(c)
//     c++;
// }
// while(c<10);

// =it must be play wheter condition true or false=










                // --------------------43
// -------------------------------Placing scripts


// ======how many places we places javascript in html=====



//  <script>
//  function sayHi() {
//  alert("Hello world!")
//  }
//  function sayBye() {
//  alert("Buh-bye!")
//  }
//  </script>



{/* <script src="whatever.js"></script> */}









                    // --------------44.
// --------------------------------Commenting------



// The first way is to mark a single line as a comment, as in line 1 here.


 // This is a comment, ignored by the browser


 

/*
When a comment requires more than one line,
a block comment like this, with its opening
and closing tags, is the way to go.
*/
 //JavaScript multi-line comment tags are the same as CSS comment tags. Open with /*.
//Close with */.
