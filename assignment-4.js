
// Problem 1. anaToVori;
function anaToVori(ana){
    if(ana>=0){
        let vori = ana/16;
        return vori; 
    } else{
        return "Please, input number !";
    }
}

// Problem 2. Pandacost 
function pandaCost(singara, somucha, jilapi){
    //fixed food price
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;
    //started condition
    if(singara>=0 && somucha>=0 && jilapi>=0){
        let totalPrice = singara*singaraPrice + somucha*somuchaPrice + jilapi*jilapiPrice;
        return totalPrice;
    } else{
        return "Please, input valid number !";
    }  
}

// Problem 3. PicnicBudget
function picnicBudget(participants){
    // fixed money
    const firstGroup = 5000;
    const secondGroup = 4000;
    const thirdGroup = 3000;
    //started condition
    if(participants<0){
        return "Please, input valid number !";
    }
    else if (participants<=100){
        const firstCollection = participants*firstGroup;
        return firstCollection;
    }
    else if (participants<=200){
        const firstPart = 100*firstGroup;
        const secondRestGroup = participants - 100;
        const secondCollection = secondRestGroup*secondGroup
        const totalSecondCollection = firstPart + secondCollection;
        return totalSecondCollection;
    }
    else {
        const firstPart = 100*firstGroup;
        const secondPart = 100*secondGroup;
        const thirdRestGroup = participants - 200;
        const thirdCollection = thirdRestGroup*thirdGroup;
        const restTotal = firstPart + secondPart + thirdCollection;
        return restTotal;
    }
}

// Problem 4. Odd Friend Name 
function oddFriend(friendNames){
    let oddNames = [];
    //using for of loop
    for (const element of friendNames){
        if(typeof (element.length)!='number'){
            
            return "Please, Insert String Value!";
        }  
        else if(element.length%2!=0){
            oddNames.push(element);
            //ended loop here
            break;
        } 
    }
    return oddNames;
}
