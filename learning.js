// ----------------------------- Github prep Zbynek Marak ------------------------------

// Simple calculator
// Create a program that takes user input - first number, then second number and in the end operator
// After taking user input, calculator will perform the task - f.e. "Enter first number: " - User will input first number, then "Enter second number: " - User will input second number,
// Then calculator asks for operation - "Enter an operation you want to perform: " - User will input - +, -, /, *
// Input 1: 20, Input 2: 10, Operation: /, The result will be 2, because 20 / 10 = 2, watch out for right order 10 / 20 and 20 / 10 is not the same

//CALCULATOR//
var  firstnumber =  Number(prompt("Enter first number"));  // stanovuju, na co se bude ptat okno
var sign = prompt("enter matematic operation");
var secondnumber =  Number(prompt("Enter second number"));


if (sign == "+"){
	var result = firstnumber + secondnumber
	alert ('Vysledek je: ' + result);
} else if (sign=="-") {
	var result = firstnumber - secondnumber
	alert ('Vysledek je: ' + result);
}
else if (sign == "*") {
	var result = firstnumber * secondnumber
	alert ('Vysledek je: ' + result);
}
else if (sign == "/" && secondnumber !=0) {     //tady nastavim, ze to nebude delitelne nulou....
	var result = firstnumber / secondnumber
	alert ('Vysledek je: ' + result);
}


// mohu pouzit i console.log misto alert.....
//else if (sign == " + ....."){

// console.log (firstnumber + nebo - nebo * nebo / secondnumber)
//}









// Prime number in Javascript
// Create a program that will evaluate if entered number by user is prime or it isnt prime


// I wanna take input from user -- Number

var number = prompt("Enter a number: ")
alert (number)

// Check if number is prime

var isPrime = true;

// if(number === 2) {
// 	isPrime = true;
// }

//if(number / 2 == )
for(var i = 2; i < number; i++) {  // i ++ je, ze se mi zveda hodnota
	console.log(i)
	console.log(number % i)     
	if(number % i === 0) {    // to % mi udava zadane cislo, 
		isPrime = false;
		break;
	}
}


if(isPrime){
	alert(`${number} is prime number`)             
}                                                      // if / je to prvcislo, else / neni
else  alert (`${number} is a not prime number`);







// Pet Store
// Create a program that will keep asking user to input animals and then store them into an array, after user inputs empty string, the program will then write out all animals that user put into the console

var looptrough = true;
var animalstorage = [];

while(looptrough){
	var input = prompt("write your animal: "); 
		if (input ==="") {                    // nastavuji, aby se mohlo vypsat zvire
			looptrough = false;
			break;
		} 
		    else {

				animalstorage.push(input)
		}
} 

for (var i = 0; i < animalstorage.length; i++) {
	console.log(animalstorage[i])
}





// Write a program that will display current date

var today = new Date();

var date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;
alert("today is: " + dateTime);


//nebo
 var mydate = new date();
 console.log(mydate);




// Write a program that calculates number of days left until Christmas

// moznost...............................................
// today = new Date();

// xmas = new Date("December 25, 2021");
// msPerDay = 24 * 60 * 60 * 1000 ;
// timeLeft = (xmas.getTime() - today.getTime());


// document.write("<p>" + timeLeft + "</p>");

// e_daysLeft = timeLeft / msPerDay;
// daysLeft = Math.floor(e_daysLeft);
// e_hrsLeft = (e_daysLeft - daysLeft)*24;
// hrsLeft = Math.floor(e_hrsLeft);
// minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);
// document.write("Days<br> <h4>" + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left </h4> Until December 25th 2021<P>");

 // var now = new Date();
 // var currentMonth = (now.getMonth() + 1);
 // var currentDay = now.getDate();
 //  var nextChristmasYear = now.getFullYear();
 //  if(currentMonth == 12 && currentDay > 25){
 //  	nextChristmasYear = nextChristmasYear + 1;
 //     }
 //    var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
 //    var christmasDay = new Date(nextChristmasDate);
 //    ar diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

 //     var days = 0;
 //     var hours = 0;
 //     var minutes = 0;
 //     var seconds = 0;

 //     if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
 //         Convert these seconds into days, hours, minutes, seconds.
 //       days = Math.floor(diffSeconds / (3600*24));
 //         diffSeconds  -= days * 3600 * 24;
 //         hours   = Math.floor(diffSeconds / 3600);
 //         diffSeconds  -= hours * 3600;
 //         minutes = Math.floor(diffSeconds / 60);
 //         diffSeconds  -= minutes * 60;
 //         seconds = diffSeconds;
 //     }
 //     calculateChristmasCountdown();

 // bez presneho casu...............................

//  today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+  //odpocet dnu 
" days left until Christmas!");






// Write a program that outputs current URL of any website




// Create a class that will be named: "Wizard", give the wizard some attributes, maybe name, age, mana and so on depending on what you like
// Wizards can cast spells, create a function that will be able to cast spell "Fire Surge" and when it casts the spell, wizard will lose some of his mana also when wizards cast the spell
// we want to be updated by a quote "Fire Surge casted!" and also we want to see status of current mana -> Console output - Current mana: xx (some number)



// Create a console application, that will  do the following:
// Creates an interface, that will ask to select following sections
// Runescape skill groups (Artistan, Gatherer, Combat)
// Each section will show menu with actual skills in list f.e. (1. Mining
																2. Fishing 
																And so on.. )
// Each of those options will store in global variable from user input to keep track of what user wants and so on
// If he select f.e. 1. Gatherer from group menu and then Choose 1. Mining again - The console output will be looking like this:

// ---------------- GATHERER -------------------
// 1. Mining
// 2. Fishing .. etc
// Please select skill: 
// User will select mining
// ---------------- Mining Script -------------------
// Script initializing. /.. /... /. /.. /... - loop that does loading dots from 1 to 3