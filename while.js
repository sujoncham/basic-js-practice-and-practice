// var i=0;
// while(i<=9){
//     console.log(i);
//     i++;
// }

// var fullName = 'sujon' + 'chambugong';

var firstName = "Sujon";
var lastName = "Chambugong";
var fullName = firstName + " " + lastName;
// console.log(typeof fullName);



var age = 65;
if (age > 18) {
  if (age > 30) {
    if (age > 60) {
      console.log("You are an Old Man!");
    } else {
      console.log("You are a complete man!!");
    }
  } else {
    console.log("you are a young guy!!");
  }
} else {
  console.log("you are a child!!");
}


var age = 65;
if(age > 18){
    if(age > 30 && age < 60){
        console.log("you are a complete man!");
    } else if(age > 60 && age <= 120){
        console.log("You are Old Man!!");
    } else{
        console.log("You are young Man!!");
    }
} else{
    console.log("You are a Child");
}

// large name and short name
var items = ['mouse', 'keyboard', 'lamp', 'pen', 'ram', 'processor'];
var newItem = items.filter(myItem);
function myItem(x){
    return x.length>=5;
}
 console.log(newItem);

//  greater than and less than

 var oddNumbers = [2, 3, 4, 5, 7, 8, 9];
 var newOdd = oddNumbers.filter(function(a){
     return a>5;
 })

 console.log(newOdd);


//  addition numbers
 function addTwoNumbers(num1, num2){
   var result = num1 + num2;
   return result;
 }

 var firstNumber = 45;
 var secondNumber = 45;

 var total = addTwoNumbers(firstNumber, secondNumber);

 console.log('Result is :'+ total);


//  remider number
function getRemider(number1, number2){
  number1%number2;

}
const remider = getRemider(12, 2);
console.log(remider);


// singal light
var singal = ["green", "yellow", "Red"];
for(var i=0; i<singal.length;i++){
  if(singal[i]=="green"){
    console.log("You should go");
  } else if(singal[i]=="Yellow"){
    console.log("You should wait");
  }else{
    console.log("You should stop");
  }
}

//  tero namota

function teroNamot(num){
  var result;
  for(var i=1; i<=10; i++){
    result = i*num;
    
  }
  console.log(result);
}

teroNamot(13);



var nameIs = "Zonayed";
function first(){
  var welcome = "Hello! ";
  second();
  console.log(welcome + nameIs);
}

function second(){
  var welcome2 = "Hi! ";
  third();
  console.log(welcome2 + nameIs);
}

function third(){
  var welcome3 = "Hey! ";
  console.log(welcome3 + nameIs);
}

first();

function upperCaseText(newText){
  return newText.toUpperCase();
}
var getTexct = upperCaseText("This is lower case text.");
console.log(getTexct);

function isMoonUp(hour){
  var hour = new Date().getHours(); 
  if(hour >=19 && hour <=5){
    return true;
  }
  return false;
}

var moonStatus  = isMoonUp(11);
console.log('Moon ki utse? - ' +moonStatus);


function incheToFeet(inches){
  var feet = inches/12;
  return feet;
}

var myInches = 156;
var feet = incheToFeet(myInches);
console.log(feet);



// program to check leap year
function checkLeapYear(year) {

  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}

// take input
const year = 2021;

checkLeapYear(year);

// namota 
function getFactorial(number){
  let fact =1;
  for(let i=1; i <=number; i++){
    fact = fact * i;
  }
  return fact;
}

const totalFact = getFactorial(12);
console.log(totalFact);


// even or odd

function evenOdd(oldy){
  if(oldy%2==0){
    console.log("My age is even.")
    return true;
  } else {
    console.log("My age is Odd.")
    return false;
  }
}

var myAge = evenOdd(36);
console.log('My age is ', myAge );

