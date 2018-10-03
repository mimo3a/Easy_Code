//! ДОМАШНЯЯ РАБОТА 3

//  ЗАДАЧА 1

 let beginText = "I am in the easycode";
 let finishText = "";
 let litera;
 for (let i = 0; i < beginText.length; i ++) {
      if (beginText [i] === " ") {
        i ++;
        litera = " " + beginText[i].toUpperCase();
      } else {
        litera = beginText[i];
      };
      finishText += litera;
    };
 console.log(finishText);

//  ЗАДАЧА 2

let forward = "tseb eht ma i";
let reverse = "";
for (let i = forward.length - 1; i >= 0; i --) {
    reverse += forward[i];
};
console.log(reverse);

//  ЗАДАЧА 3

let n = 10;
let factorial = 1;
for (let i = 1; i <= n; i ++) {
    factorial *= i;
};
console.log(n + "!=" + factorial);

// ЗАДАЧА 5

let startString = "JavaScript is a pretty good language";
let finishString = "";
let someLitera;
let lit = 0;
while (lit < startString.length) {
    if (startString[lit] === " ") {
      lit ++;
      someLitera = startString[lit].toUpperCase();
    } else {
      someLitera = startString[lit] ;
    };
    finishString += someLitera ;
    lit ++;
  };
console.log(finishString);

//  ЗАДАЧА 6

let oddOf = 0;
for (let num = 1; num <= 15; num ++) {
        if (num % 2) {
        oddOf += 1;
        };
     };
console.log(oddOf);

//  ЗАДАЧА ИЗ УРОКА

let str = "Hello world";
let res = "";
for (let i = 0; i < str.length; i++) {
    res += str[i];
        if (i === str.length - 1) {
            break;
        };
    res += "*";
    };
    console.log(res);

     

        
  

