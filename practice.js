


// var i = 50;
// while(i<=80){
//     if(i%2 ==1){
//         console.log(i);
//     }
//     i++;
// }

// var i = 1;
// while(i<=100){
//     console.log(i);
//     i++;
// }

var num1 = 120;
var num2 = 30;
var num3 = 20;

function threeNumber(){
    var total = num1 + num2 + num3;
    return total;
}

var newTotal = threeNumber();
console.log(newTotal);

function addNumbers(num1, num2, num3){
    var total = num1 + num2 + num3;
    return total;
}

var newNumber = addNumbers(120, 30, 50);
console.log(newNumber);


// temparature to Celcius
function temparature(celcius){
    return (celcius*9/5) + 32;
    
}

var todayTempare = temparature(12);
console.log(todayTempare);

// temparature to fahrenheit
function temparature1(fahrenheit){
    return (fahrenheit - 32)*5/9;
    
}

var newTempare = temparature1(30);
console.log(newTempare.toFixed(2));

// grade system
function gradeSystem(grade){
    if(grade >=80 && grade<=100){
        console.log("Got is A+");
    } else{
        console.log("Average Marks");
    }
    return grade;
}

gradeSystem(75);


var num12 = 123;
// num12.toString();
console.log(num12);


