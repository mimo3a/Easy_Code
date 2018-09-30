// строки

// Задача 1

let string = "some test string";
console.log( string[ 0 ] , string[ string.length - 1 ]);

// задача 2

let first = string[ 0 ].toUpperCase();
let middle = string.slice( 1 , string.length - 1 );
let last = string[ string.length - 1 ].toUpperCase();
console.log( first + middle + last );

// задача 3

console.log(string.indexOf( "string" ));

// задача 4

let firstSpace = string.indexOf( " " );
console.log(string.indexOf( " ", firstSpace + 1 ) );

// задача 5

console.log( string.substr( 4,4 ));

// задача 6

console.log( string.substring( 4,9 ));

// задача 7

console.log( string.substr( 0, string.length - 6 ));

// задача 8

let a = 20;
let b = 16;
console.log( a.toString() + b.toString() );

// Числа

// задача 1

console.log( Math.PI.toFixed(2) );

// Задача 2

console.log( "min =" + Math.min( 15,11,16,12,51,12,13,51 ) ,"max =" + Math.max( 15,11,16,12,51,12,13,51 ));

// Задача 3 а

let randomNumber = Math.random();
console.log( randomNumber.toFixed(2) );

// задача 3 б

let userNumber = prompt( "Введите, пожалуйста, число", 100 );
console.log( Math.round( userNumber * Math.random() ));

// задача 4

console.log( "0.6 + 0.7 =", 0.6 + 0.7 );
console.log( "0.6 + 0.7 =", (0.6 * 10 + 0.7 * 10) / 10);

// задача 5

console.log( parseInt( "100$ ") );







