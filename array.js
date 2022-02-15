
// const  numbers = [2,3,4,5,6,7,8,9,10,18,19,32,45,48,54,55,63,87];
//slice
// const numberSliced = numbers.slice(4, 10);
// console.log(numberSliced);
// console.log(numbers);

//splice 
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);

const  numbers = [2,3,4,10,18,19,32,45,9,63,87,48,54,55,5,6,7,8,];
//sorted
// const sortedNumber = numbers.sort();
// console.log(sortedNumber);
// reverse
// const sortedNumber = numbers.reverse();
// console.log(sortedNumber);

const  numb = [2,3,4,10,18,19,32,45,9,63,87,48,54,55,5,6,7,8,];

function addNumbers(num1, num2){
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;
    }
    return sum;
}
const totalNum = addNumbers(numb);
// console.log(totalNum);

const task = "Practice Makes a person perfect";
const index = task.toLowerCase().indexOf("M");
console.log(index);

const str1 = 'Bangladesh is a beautiful country.'; 
console.log(str1.endsWith("country."));

const str= 'I love coding more than eating.';
const string = str.slice(2, 6);
console.log(string);

const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());