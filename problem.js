// // Problem 1. String Variable

// var personName = "Sujon Chambugong";
// var isRaining = true;
// var pass = false;
// var marks = 80;
// var productPrice = 520;

// // Problem 2. let const Variable
// let myName = "Chambugong Sujon";
// myName = "Sujon Chambugong"; //|Changed name
// const actualPrice = 320;
// //actualPrice = 520; //const not changable variable.

// //Problem 3. -, +, *, /, % 
// // let num2 = 25;
// // let num1 = 50;
// // let total = num1 + num2;
// // let total1 = num1 - num2;
// // let total2 = num1 / num2;
// // let total3 = num1 * num2;
// // let total4 = num1 % num2;
// // console.log(total);
// // console.log(total1);
// // console.log(total2);
// // console.log(total3);
// // console.log(total4);

// // Problem 4. Comparision ><!=
// let age1 = 45;
// let age2 = 50;
// // six way to console.log
// // console.log(age1>age2);
// // console.log(age1<age2);
// // console.log(age1>=age2);
// // console.log(age1<=age2);
// // console.log(age1!=age2);
// // console.log(age1==age2);

// // Problem 5. two conditions
// let ariful = 45;
// let soriful = 40;
// let sohidul = 25;
// // console.log(ariful>soriful && ariful>sohidul);
// // console.log(soriful>ariful || soriful > sohidul);

// // Problem 6. if else condition
// let mark = 70;
// if(mark>=60){
//     // console.log("Effort is good");
// } else if(mark>=45){
//     // console.log("You have to hard work more");
// } else{
//     // console.log("Next time you will get chance");
// }

// //Problem 7. while loop
// let i = 7;
// while(i<=19){
//     // console.log(i);
//     i+=2;
// }

// // Problem 8. Array 
// let newArray = ["12", "15", "45", "30", "35", "25", "20"];
// newArray[3] = "18";
// newArray.push("50", "60");
// newArray.pop()
// // console.log(newArray);

// // Problem 9. array for loop
// let loopArray = ["12", "15", "45", "30", "35", "25", "20"];
// for(let i=0; i<loopArray.length;i++){
//     // console.log("For loop -"+ i + "- " + loopArray[i]);
// }

// //Problem 10. largest numbers from 80




// let largestArray = ["52", "55", "65", "80", "85", "90", "95"];
// let largeNumber = [];
// for(let i=0;i<largestArray.length; i++){
//  if(largestArray[i]%2!=0){
//     largeNumber = largestArray[i];
//     //  console.log(largeNumber);
//      break;
     
//  }
// }







// //Problem 11.

// function multiNumber(multi1, multi2, multi3){
//     return  multi1 * multi2 * multi3;
// }
// const totalMulti = multiNumber(12, 12, 12);
// // console.log(totalMulti);

// // Problem 12.

// //Problem Solving
// // Problem 01.


// // Problem 02. Feet to inch
// let inches = 0;
// function feetToInch(feet){
//     return inches = feet*12;
// }

// const realFeet = feetToInch(12);
// // console.log(realFeet);

// let feet = 0;
// function feetToInch1(inch){
//     return feet = inch/12;
// }

// const realInch = feetToInch1(39);
// // console.log(realInch);

// // Problem 03. Centimeter to Meter
// let meter = 0;
// function centimeterToMeter(centimeter){
//     return meter = centimeter/100;
// }

// const realMeter = centimeterToMeter(500);
// // console.log(realMeter);




// // Problem 04. Book pages
// let books = [
//     {BookName: "Honest Man", Pages: 100 },
//     { BookName: "Poor Man",  Pages: 200 },
//     {BookName: "Rich Man", Pages: 300 }
// ];

// let totalPages = 0;
// function paperRequirements (firstBook, secondBook, thirdBook){
//     return totalPages = firstBook*books[0].Pages + secondBook*books[1].Pages + thirdBook*books[2].Pages;
// }

// const totalBookPages = paperRequirements(50, 30, 15);
// // console.log("Need " + totalBookPages + " pages for books");




// // Problem 05. BestFrients name

// function bestFriend (myBestFrient){
//     let largeName = [];
//     for(let i=0;i<myBestFrient.length;i++){
//         // console.log(myBestFrient[i]);
//         let element = myBestFrient[i];
//         if(typeof (element.length)!='number'){
//             return "hello";
//         } else if(element.length%2!=0){
//             largeName = element;
//         } else {
//             break;
//         }
//     }
//     return largeName;
// }

// const myFrients = bestFriend(["Anjon", "Ariful", "Asok", "Nikil", "Nitendra", "Shaiful", "Kochin"]);
// // console.log(myFrients);



// // Problem 06.

// let searchPositive = ["2", "5", "6", "8", "-2", "-3", "-5", "-1", "3", "4"];
// function findPositiveNumber(){
//     let positiveNumber = [];
//     for(let i=0; i<searchPositive.length;i++){
//         let element = searchPositive[i]; 
//         if(element>=0){
//             positiveNumber.push(element);
//         } else{
//             break;
//         }
//     }
//     return positiveNumber;
// }
// const positiveValue = findPositiveNumber(searchPositive);
// // console.log(positiveValue);





// // // Problem 4. Odd Friend Name 
// // function oddFriend(friendNames){
// //         let oddNames = [];
// //         for(let i=0;i<friendNames.length; i++){
// //             let element = friendNames[i];
// //             if(element.length >=0){
// //                 oddNames = "Please, input Valid Number!";
// //             }
// //            else if(element.length%2==1){
// //                 oddNames.push(element);
// //                 // console.log(oddNames);  
// //             } else{
// //                 break; 
// //             }
// //         }
// //         return oddNames;
    
// //     }

// // const oddy = oddFriend(["Pori", "Ashutosh", "Anjon", "Ariful", "Asok", "Nikila", "Nitend", "Shaifula", "Kochin"]);
// // console.log(oddy);




// // function picnicBudget(person) {
// //     let budget;
// //     if (person > 200) {

// //         let first100Budget = 100 * 50;
// //         let second100Budget = 100 * 40;
// //         let remainingBudget = (person - 200) * 30;

// //         budget = first100Budget + second100Budget + remainingBudget;

// //     } else if (person > 100) {
 
// //         let firstBudget = 100 * 50;
// //         let remainingBudget = (person - 100) * 40;
// //         budget = firstBudget + remainingBudget;
// //     } else {
// //         budget = person * 50;
// //     }
// //     return budget;
// // }

// // const totalBudget = picnicBudget(201);
// // // console.log(totalBudget);


// // let sum = 0;
// // for(let i = 5; i>=1; i--){
// //     sum = sum + i;
// //     // console.log(sum);
// // }
// // console.log(sum);

// function sum(i){
//     console.log(i)
//     if(i==1){
//         return 1;
//     }
//     return i + sum(--i);
// }
// // console.log(sum(5));

// let a = "hi";
// let b = "there";

// // console.log(a + b);

// const array = [1, 2, 3, 4, 5, 6, 7];
// // array.pop();
// // console.log(array);
// for ( let i = 1; i<array.length;i++){
//     if(i==5){
//         continue;
//     }
//     // console.log(array[i]);
// }

// let myWord = "Javascriptcoder";
// let vowels = '';
// for(let word of myWord){
//     vowels = word.length;
//     if(vowels == "a" && vowels == "e" && vowels == "i" && vowels == "o" && vowels == "u"){
//         vowels.push(word);
//         // console.log(vowels);
//         // continue;
//     } 
    
// }


// //blue button
// const btnPink = document.getElementById('make-me-hotpink');
// btnPink.onclick = makePink;

// function makePink(){
//     document.body.style.backgroundColor = 'hotpink';
//     console.log("hello");
// }

// //purple button
// const btnPurple = document.getElementById('make-me-purple');
// btnPurple.onclick = makePurple;

// function makePurple(){
//     document.body.style.backgroundColor = 'purple';
//     console.log("hello");
// }
// //green button
// const btnGreen = document.getElementById('make-me-green');
// btnGreen.onclick = makeGreen;

// function makeGreen(){
//     document.body.style.backgroundColor = 'green';
//     console.log("hello");
// }

// //Megenta button
// const btnMegenta = document.getElementById('make-me-megenda');
// btnMegenta.onclick = makeMegenta;

// function makeMegenta(){
//     document.body.style.backgroundColor = 'magenta';
//     console.log("hello");
// }


//comments post

const btnPost = document.getElementById('com-push');

btnPost.addEventListener('click', function(){
    const commentText = document.getElementById('comment-text').value;

    const posttext = document.createElement('p');
    posttext.innerText = commentText;
    // console.log(posttext);
    const signPlus = document.createElement('span');
    signPlus.innerText = "+";
    posttext.appendChild(signPlus);
  
const parentDiv = document.getElementById('comments-box');
parentDiv.appendChild(posttext);
    

});


