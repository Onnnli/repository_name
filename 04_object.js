// execution context   --- ход выполнения кода
// стек --- выполнение программы с конца

//поднятитие 


// callback

//области видимости  блочная , глобальная


// замыкания 



// this --- call; apply; bind;

let sum = (a, b) => {
    let result = a + b;
    return result;
}



let person = {
    "name" : "Alex",
    "age" : 28,

    sayHi: function() {
        alert('Hi')
    }
}

let a = 'name'; 

console.log(person.name);
console.log(person[a]);

delete person.name;
console.log(person);


// person.sayHi = function () {
//     alert('Hi');
// }
// person.sayHi();
// console.log(person);



//==============================================================================================

let user = {
    "name" : 'Liza',
    "age" : 22, 
    SayIntro: function() {
        alert(`${this.name} : ${this.age}`)
    },

    "flag" : true,
    "admin" : true
}
//user.SayIntro();

let nameUser = user.hasOwnProperty('name') // ищет ключ в объекте тру / фолс 
    console.log(nameUser);

let ageUser = "age" in user; //есть ли в объекте 
    console.log(ageUser);

Object.keys(user);  // возращает массив, в котором в качестве значения ключи массива
    console.log(Object.keys(user));  



for(let key in user) {
    console.log(key); // ключи
    console.log(user[key]); //чтобы достать значения
}

//=====================================================================


let id = Symbol('id');
let im = Symbol('id');
let user2 = {
    name : "John",
    [id] : 123,
    [im] : 300,
}

console.log(user2);



for(let key in user2) {
    console.log(key);
    console.log(user2[key]);
}


let rectangle = {
    width : 300,
    height: 200,
    getArea: function(){
        console.log(`${this.width * this.height}`);
    }
}

rectangle.getArea();


// 


let obj2 = {
    name: 'Maj',
    age: 28,
    width: 300,
}


function isEmpty(obj) {
    let objLength = Object.keys(obj);
    console.log(objLength);
    if (objLength.length > 0 ) {
        return false
    }  
        return true
}


console.log(isEmpty(obj2));


Object.keys(obj2) // массив ключей
Object.values(obj2) // массив значений
Object.entries(obj2); //массив ключ - значение


let prices = {
    vafl: 200,
    apple: 100,
    grusha : 150,
    flower: 110,
    rose: 750
};

function Sum(obj) {
    let arr = Object.values(prices);
    let arrSum = 0; // переменная которая нужно для суммы обяз
    for( let key in arr) {
        arrSum += arr[key]; 
    }
    return arrSum;
}

console.log(Sum(prices));


let now = new Date();
let date = new Date("2017-01-26");

console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());


/// JSON

let book = {
    title: 'Prof ss',
    author: 'Nick',
    edition: 3,
    year: 2011
}
let jsonText = JSON.stringify(book);
console.log(jsonText);



