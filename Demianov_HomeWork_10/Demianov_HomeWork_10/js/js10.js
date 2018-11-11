//  This

// Задача 2

let goods = {
    item : "milk",
    amount : 50,
    price : 30,
    getSupply : function(){
    return this.item + "=" + this.amount * this.price;
}}
goods.getSupply();

// Задача 3

let parts = {
    item : "mirror",
    amount : 3,
    price : 250
}
parts.getSupply = goods.getSupply;
parts.getSupply();

// Задача 4

let size = {
    width : 5,
    height : 10
}
getSquare = function() {
return this.width * this.height;
}
getSquare.call(size);

// Задача 5

let numbers = [4, 12, 0, 10, -2, 4];
Math.min.apply(numbers, numbers);

// Задача 6

const element = {
    height : '15 px',
    marginTop : '5 px',
    marginBottom : '5 px',
    getFullHeight : function() {
    return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
}}
element.getFullHeight();

const block = {
    height : '5 px',
    marginTop : '3 px',
    marginBottom : '3 px'
}
element.getFullHeight.call(block);

// Задача 7

let element = {
    height : 25,
    getHeight : function() {
    return this.height;
}};
let getElementHeight = function () {
    return element.getHeight();
};
getElementHeight();

// замыкание

// Задача 3

let minus = function(a = 0) {
    return function(b = 0) {
    return a - b;
}};
minus(20)(6);

// Задача 4

let multiplyMaker = function(x) {
    let start = x;
    return function(a) {
    return start *= a;
}};
const multiply = multiplyMaker(2);
multiply();

// Задача 5

const myModul = (function(){
    let string = "";
    function setString(str){
        if (!str) {
        string = "";
        } else {
        string = str + "";
        }
    return string;    
    }
    function getString(){
    return  string;
    }
    function getLength(){
    return string.length;
    }
    function getRevers(){
    return string.split("").reverse().join("");
    }
    return {
    setString : setString,
    getString : getString,
    getLength : getLength,
    getRevers : getRevers
    };
})();
myModul.setString();
myModul.getString();
myModul.getLength();
myModul.getRevers();

// Задача 6
 
const calculator = (function (){
    let number
    function setNumber(num){
    number = num;
    return calculator;
    }
    function plus(plusMeaning){
    number += plusMeaning;
    return calculator;    
    }
    function minus(minusMeaning){
    number -= minusMeaning;
    return calculator;
    }
    function multi(multiMeaning){
    number *= multiMeaning;
    return calculator;
    }
    function divide(divideMeaning){
    number /= divideMeaning;
    return calculator;
    }
    function extent(extentMeaning){
    number = Math.pow(number, extentMeaning);
    return calculator;
    }
    function getMeaning(){
    console.log(number = Math.round(number * 100)/100);
    return calculator;
    }
    return {
    setNumber : setNumber,    
    plus : plus,
    minus : minus,
    multi : multi,
    divide : divide,
    extent : extent,
    getMeaning : getMeaning
    };
})();

calculator.setNumber(5).plus(3).minus(2).multi(10).divide(11).extent(2).getMeaning();


