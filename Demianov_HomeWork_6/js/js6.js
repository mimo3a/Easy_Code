// Задача 1

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
function filterCollection(arr, price1, price2) {
 const arrFiltered = arr.filter(item => item.price >= price1 && item.price <= price2);
 return arrFiltered.sort((prev, next) => prev.price - next.price);
}

console.log(filterCollection(products, 15, 30));

// Задача 2

const arrNum1 = [1, 2, 3, 5, 8, 9, 10];
const arrNum2 = arrNum1.map(item => ( {digit: item, odd: !!(item % 2)} ));
   
console.log(arrNum2);

// Задача 3

const arrNum3 = [12, 4, 50, 1, 0, 18, 40];
console.log(arrNum3.every(x => x !== 0));

// Задача 4

const arrNum4 = ['yes', 'hello', 'no', 'easycode', 'what'];
console.log(arrNum4.some(x => x.length > 3));

// Задача 5

const arrNum5 = [{char:"a",index:12},
                 {char:"w",index:8}, 
                 {char:"Y",index:10},
                 {char:"p",index:3},
                 {char:"p",index:2},
                 {char:"N",index:6},
                 {char:" ",index:5},
                 {char:"y",index:4},
                 {char:"r",index:13},
                 {char:"H",index:0},
                 {char:"e",index:11},
                 {char:"a",index:1}, 
                 {char:" ",index:9}, 
                 {char:"!",index:14}, 
                 {char:"e",index:7}];

 // Вариант 1

function wholeString(arr) {
    arr.sort((prev, next) => prev.index - next.index);
    return arr.reduce((a, x) => a += x.char, "");
}
console.log(wholeString(arrNum5));

// Вариант 2

function createString(stringElements) {
    const stringArray = [];
    stringElements.forEach(element => stringArray[element.index] = element.char);
    return stringArray.join('');
    }
 console.log(createString(arrNum5));



