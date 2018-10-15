



// Первая функция

function getNewArray(arr, callback) {
    let newString = "";
    for (let i = 0; i < arr.length; i ++) {
        newString += callback(arr[i]);
    }
    return console.log("New value: " + newString);
}

// Вторая функция

function firstLetterOnUpperCase(beginElement) {
        return beginElement[0].toUpperCase() + beginElement.slice(1);
    }

 // Третья функция

function multyOnTen(beginElement) {
    return beginElement * 10 + ",";
}

// Четвертая функция

function joinNameAndAge(beginElement) {
        return beginElement.name + " is " + beginElement.age + ", ";
}

// Пятая функция

function revers(beginElement) {
    let reversElement = "";
    for ( let i = beginElement.length - 1; i >= 0; i --) {
        reversElement += beginElement[i];
    }
    return reversElement + ", ";
}

let array = ["my", "name", "is", "trinity"];
getNewArray(array, firstLetterOnUpperCase);
array = [10, 20, 30];
getNewArray(array, multyOnTen);
array = [{age : 45, name : "John"}, {age : 20, name : "Aaron"}]
getNewArray(array, joinNameAndAge);
array = ["abc", "123"];
getNewArray(array, revers);

// Массивы

// Задача 1

function stringSort(beginStr) {
     let arr = beginStr.split("");
     arr.sort(function(prev, next) {
         if (next > prev) {
             return 1;
         }
         if (next < prev) {
             return -1;
         }
         return 0;
     });
     return arr.join("");
}

console.log(stringSort("abcdefghijklm"));

// Задача 2

function arrSortRev(beginArray) {
    beginArray.sort(function(prev, next) {
        return next - prev;
    })
    return beginArray;
}
console.log(arrSortRev([2,4,7,1,-2,10,-9]));

// Задача 3

function getNewArray(arr, start, finish) {
    return arr.slice(start, finish + 1);
}
let oldArray = ['a', 'b', 'c', 'd', 'e', 'f'];
let newArray = getNewArray(oldArray, 2, 4);

// Задача 4

let arrNum1 = ['one', 2, 'three', '4'];
let arrNum2 = arrNum1.concat(arrNum1);

// Задача 5

let arrNum3 = [1, 2, 3, 4, 5];
arrNum3.splice(2, 2);

// Задача 6

let arrNum4 = [1,2,3,4,5];
arrNum4.splice(2, 2, 'three', 'four');

// Задача 7

let arrNum5 = ['i', 'am', 'an', 'array'];
arrNum5.splice(3,0,'awesome');

// Задача 8

let arrNum6 = [ [14, 45], [1], ['a', 'c', 'd'] ];
arrNum6.sort( function(prev, next) {
return prev.length - next.length;
});

// Задача 9

let arrNum7 = [1, 2, 3, 'dom', 'iye'];
let arrNum8 = arrNum7.slice();

// Задача 10

let arrNum9 = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'intel', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'intel', info: {cores: 4, cache: 2}}
];
arrNum9.sort( function(prev, next) {
    return prev.info.cores - next.info.cores;
});
console.log(arrNum9);

// Задача 11

const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];
function sortProdacts(arr, price1, price2) {
    let correctArray = [];
    for ( let i = 0; i < arr.length; i ++) {
         element = arr[i];
         if (arr[i].price >= price1 && arr[i].price <= price2) {
             correctArray.push(arr[i]);
         }
    }
    correctArray.sort(function(prev, next) {
        return prev.price - next.price;
    });
    return correctArray;
}
console.log(sortProdacts(products, 15, 30));


























