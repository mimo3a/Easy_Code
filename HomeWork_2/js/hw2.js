// // ! Домашнее задание 2

 //* ОБЪЕКТ

 //* Задача 1

  let shop = { product : "iphone" }; // FIXME: May be shopItem ?

 //* Задача 2

  shop.price = "1000";
  shop.currency = "dollar";

 //* Задача 3

  shop.details = {
      model : "6s",
      color : "grey"
  };

 //* ПРИСВАИВАНИЕ

 //* Задача 1

  а = а + 10
  a += 10;

  b = b * 18
  b *= 18;

  c = c - 10
  c -= 10

  x = a + x
  x += a

  y = y * z
  y *= z;

  i = i * 5 * y
  i *= 5 * y;

 //* Задача 2

  q *= q; // FIXME: May be to add real example as in previous exercises?

 //* УСЛОВНЫЕ ОПЕРАТОРЫ

 // * Задача 1

 // let b ; 
 if ( b === 'hidden' ) { 
     b =  'visible' ;
 } else {
     b =  'hidden' ; // If the b was not string then we have hidden type changing...
 };

// Ternary operator
b = b === 'hidden' ? 'visible' : 'hidden';

 // * Задача 2

 let a ;
 if ( a === 0 ) {
     a = 0 ;
 } if ( a < 0 ) {
     a = ' less then zero' ;
 } else {
     a *= 10;
 };
 
 //* ПРЕОБРАЗОВАНИЕ ТИПОВ

  let a = 0 || 'string';
 //   a = "string" 
 // "sting" - true, 0 - false. Запнулось на правде.

  let a = 1 && 'string';
 //   a = "string"
 // 1 - true, 'string' - true. Folse нет, поэтому запнулось на последнем true.

  let a = 0 || 25;
  // a = 25
  // 0 - fasle, 25 - true. Запнулось на true.

  let a = null && 25;
  //a = null
  // null - false, 25 - true. Запнулось на false.

  let a = null || 0 || 35;
  // a = 35 
  // null - false, 0 - false, 35 - true. Запнулось на true.

  let a = null && 0 && 35;
  // a = null 
  // null - false, 0 - false, 35 - true. Запнулось на первой false.

  12 + 14 + '12'
  // "2612"
  //  12 + 14 => 26
  //  26 преобразовалось в строку т.к. его складывают со строкой "12"   
  // "26" + "12" => "2612"

  3 +  2 - "1" 
  // 4
  // 3 + 2 => 5
  // "1" преобразовалось в число, т.к. его отнимают от числа.
  // 5 - 1 => 4

  '3' + 2 - 1 
  // 31
  // 2 преобразовалось в строку, т.к. его складывают со строкой.
  //   '3' + '2' => '32'
  // '32' преобразовалось в число, т.к. от него отнимают число.
  // 32 - 1 => 31

  true + 2 
  // 3
  // true преобразовалось в 1, т.к. его складывают с числом
  // 1 + 2 => 3

  +'10' + 1 
  // 11
  // +'10' => 10
  // 10 +1 => 11

  undefined + 2 
  // NaN
  // undefined не преобразовывается в число

  null + 5 
  // 5
  // null преобразовалось в 0

  true + undefined 
  // NaN
  // true преобразовалось в 1
  // undefined не преобразовывается в число









 
