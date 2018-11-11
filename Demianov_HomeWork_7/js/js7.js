
// Задача 1
/**
 * Фунцкция пробегает по всем дочерним элементам родителя 
 * и ищет совпадения с потомком. Пришлось использовать рекурсию т.к.
 * проще способа не нашел
 */

function isParent(parent, child) {
    for(let i = 0; i < parent.childNodes.length; i ++) {
        let innerChild = parent.childNodes[i];
        if (innerChild === child || isParent(innerChild, child)) {
            return true;
        }
    }
    return false;
        } 
   isParent(document.body.children[0], document.querySelector('mark')); 


// Задача 2

const myReferens = document.links;
for (let i = 0; i < myReferens.length; i ++) {
    if ( !myReferens[i].closest("ul")) {
    console.log(myReferens[i]);
    }
}

// Задача 3

const list = document.querySelector('ul');
const prevElement = list.previousElementSibling;
const nextElement = list.nextElementSibling;

// Задача 4

const myList = document.querySelectorAll("li").length;

// Nodes 

// Задача 1

let myList = document.querySelector('ul');
myList.classList.add('list');

// Задача 2

let myUl = document.body.childNodes[6];
myUl.setAttribute('id', "link");

// Задача 3

const list1 = document.querySelectorAll('li');
for(let i = 0; i < list1.length; i ++) {
    if (!(i % 2)) {
        list1[i].classList.add('item');
    }
}

// Задача 4

const links = document.querySelectorAll('a');
console.log(links);
for (let i = 0; i < links.length; i ++) {
    links[i].classList.add('custom-link');
}

// Манипуляция содержимым

// Задача 1

let parent= document.querySelector('ul');
for ( let i = 5; i ; i --) {
    let myLi = document.createElement('li');
    myLi.textContent = "item" + i;
    myLi.classList.add('new-item');
    parent.insertBefore(myLi, parent.childNodes[0]);
}

// Задача 2

let li = document.querySelectorAll('li');
for (let i = 0; i < 3; i ++) {
    let someA = li[i].firstChild;
    someA.insertAdjacentHTML('beforeend', '<strong> strong </strong');
}

// Задача 3

document.body.insertAdjacentHTML('afterbegin','<img>');
let image = document.querySelector('img');
image.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wzqbhZYngvCu-nfM0NnAmwmu5Db2jxNxwklWEWT3OasYapqHag');
image.setAttribute('alt', 'cool school');

// Задача 4

let mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', 'green');
mark.classList.add('green');

// Задача 5

let liList = document.querySelectorAll('li');
let beginLiArray = [];
for (let index = 0; index < liList.length; index ++) {
    beginLiArray.push(liList[index].textContent);
}
beginLiArray.sort((prev, next)=> {
    if (next > prev) {
    return 1;
    } else if(next < prev) {
    return -1;
    }
    return 0;
});
for (let i = 0; i < beginLiArray.length; i ++) {
    let someA1 = liList[i].firstChild;
     someA1.innerHTML = beginLiArray[i];
}

// С задачей 6 не успеваю разобраться.





    
















    
















