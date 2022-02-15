

//uses of string 
const products = [
    'Asus laptop i5 5th gen',
    'Dell laptop i5 10th gen', 
    'Lenovo laptop Core i6 8th gen', 
    'Dell laptop i3 10th gen', 
    'Hp laptop core i5 10th gen', 
    'Lenovo laptop Core i5 7th gen', 
    'Mac laptop core 16 9th gen',
    'Lenovo laptop Core i5 5th gen'
]

const search = 'Lenovo';
const searchOut = [];
// indexof
for(const product of products){
    if(product.indexOf(search) != -1){
        // searchOut.push(product);
    }
}
// console.log(searchOut);

// includes
for(const product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        // searchOut.push(product);
    }
}
// console.log(searchOut);

//startwith
for(const product of products){
    if(product.toLowerCase().startsWith(search.toLowerCase())){
        // searchOut.push(product);
    }
}
// console.log(searchOut);




const names = ["Pori", "Ashutosh", "Anjon", "Ariful", "Asok", "Nikila", "Nitend", "Shaifula", "Kochin"];
// const seperateName = names.join('');
// const seperateName = names.join(' ');
// const seperateName = names.join(',');
// const seperateName = names.join(', ');
// console.log(seperateName);

function myFrients(friends){
    if(Array.isArray(friends) == false){
        return "Please provide an array !";
    }
    let longName = [];
    for(const friend of friends){
        if(friend.length > longName.length){
            longName = friend;
        }
    }
    return longName;
}

const friendNames = myFrients(names);
// console.log(friendNames);
if(names.indexOf('Pori') != -1){
    // console.log('Pori Exists');
} else{
    // console.log('Pori does not Exists');
}