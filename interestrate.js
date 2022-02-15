
// function myGrade(marks, grades){
//     if(marks<0 || marks>100){
//         grades = "Invalid Marks";
//     }else if(marks>=80 && marks<=100){
//         grades = "A+";
//     } else if(marks>=70 && marks<=79){
//         grades = "A";
//     } else if(marks>=60 && marks<=69){
//         grades = "A-";
//     } else if(marks>=50 && marks<=59){
//         grades = "B";
//     } else if(marks>=40 && marks<=49){
//         grades = "C";
//     } else if(marks>=33 && marks<=39){
//         grades = "D";
//     } else{
//         grades = "Failed";
//     } 
//     return grades;
// }

// var myMarks = 75;
// var myResult = myGrade(myMarks);
// // console.log("My Grade is "+ myResult);


// var productPrice = 45;
// var productVat = 9;
// var productTime = 8;
// function simpleInterest(amount, vat, time){
//     var interest = (amount*vat*time)/100;
//     return interest;
// }

// var myInterest = simpleInterest(500, 6, 5);
// // console.log("My interest is " + myInterest);

// // const myNumber = 6.235145;
// // const myFloor = Math.floor(myNumber);
// // const myNumber = 3.021545;
// // const myCeil = Math.ceil(myNumber);
// const myNumber = Math.random()*10;
// const myFloor = Math.floor(myNumber);
// // console.log(myFloor);


// // larger and lowest number
// var businessman = 500;
// var minister = 650;
// var army = 900;
// // var max = Math.max(businessman, minister, army);
// // console.log("Larger is", max);


// // largest Number
// function largestNumber(businessman, minister, army){
//     if(businessman>minister && businessman>army){
//         return businessman;
//     } else if(minister>businessman && minister>army){
//         return minister;
//     } else{
//         return army;
//     }
// }

// const largerPerson = largestNumber(350, 450, 540);
// // console.log('Our larger person is ', largerPerson);
// // smallest Numnber
// function smallestNumber(businessman, minister, army){
//     if(businessman<minister && businessman<army){
//         return businessman;
//     } else if(minister<businessman && minister<army){
//         return minister;
//     } else{
//         return army;
//     }
// }
// const smallPerson = smallestNumber(350, 450, 540);
// // console.log('Our small person is ', smallPerson);

// // array
// const number = -75;
// const answer = Math.abs(number);
// // console.log(answer);

// function add(a, b){
//     return a + b;
// }
// // console.log(add("adam" + "eve"));

// var sentence = "I am hardworking. I am determined. I will be a web developer.";
// var count = 0;
// for(var i = 0; i < sentence.length; i++){
//   var letter = sentence[i];
//   if(letter == 'a'){
//     count++;
//   }
// }
// // console.log(count);


// const myArray = ["25", "12", "30", "45", "19", "80", "22", "15"];
// const newArray = myArray.filter(function(arrayNum){
//     return arrayNum > 40;
// });

// // console.log(newArray);

// const allArray = ["25", "12", "30", "45", "19", "80", "22", "15"];
// function avgArray(numbers){
//     let sum = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element > sum){
//             sum = element;
//         } 
//     }
//     return sum;
// }

// const newTotal = avgArray(allArray);
// // console.log(newTotal);

// // odd number
// const enArray = ["25", "12", "30", "45", "19", "80", "22", "15"];
// enArray.push(55);
// console.dir(enArray);
// function evenArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         if(i%2==0){
//           console.log(numbers[i]);
//         } 
//     }
// }

// evenArray(enArray);

// let sum = 0;
// for(let i=0; i<=3; i++){
//     sum+=i;
//     // console.log(sum);
// }



// var str = new String('My name is Sujon Chambugong and 36 years old.');
// str.push("a");
// // console.dir(str);
// // console.log(str.length);
// // console.log(str);
