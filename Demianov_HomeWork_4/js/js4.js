

//!  ФУНКЦИИ

//* ЗАДАЧА 1

function multiply(a=0){
    let multi = a;
    for (let i = 1; i < arguments.length; i ++){
        multi *= arguments[i];
    }
    return multi;
}
multiply();


//* ЗАДАЧА 3

function reverseString(str){
    if (typeof str !== "string"){  // Если передать число
        str = str.toString();
    } 
    let revers = ""
    for (let i = str.length - 1; i>=0; i --){
        revers += str[i];
    }
    return revers;
}
reverseString();

//* ЗАДАЧА 4

function getCodeStringFromText(strOrigin){
    let arrUnicod = [];
    for (let i = 0; i < strOrigin.length; i ++){
        arrUnicod.push(strOrigin.charCodeAt(i) );
    }
    return arrUnicod.join(" ");
}
getCodeStringFromText();

//! МАССИВЫ

//* ЗАДАЧА 1

function doubleArray(startArray){
    const finishArray = startArray.concat(startArray);
return finishArray;
}
doubleArray();

//* ЗАДАЧА 2

function lastElement(array){
    return array.slice(-1);
}
 lastElement();

//* ЗАДАЧА 3

function getArray(N){
    const arr = [];
    for (let i = 1; i <= N; i ++){
        arr.push(i);
    }
    return arr;
}
 getArray();

//* ЗАДАЧА 4

function changeCollection(){
    let newArray = [];
    for (let i = 0; i < arguments.length; i ++){
        arguments[i].splice(0,1);
        newArray.push(arguments[i]);
    }
    return newArray
}

changeCollection();





