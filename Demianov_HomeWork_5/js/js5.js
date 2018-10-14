



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








