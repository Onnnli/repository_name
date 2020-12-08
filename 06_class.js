//ооп
//Инкапсуляция -- сокрытие метода исполнения
//Полиморфизм -- переопределение методов 
                    // например добавление аргумента

// Наследование --- 
// обстракция -- 


// бэйбл -- преобразует в ес5
    // программа для изменения кода на более старую версию


'use strict'


function Person(name, age) {
    this.name = name;
    this.age = age;
}

class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    SayHi() {
        alert(`Hello ${this.name} ${this.age}`);
    }
}


let person = new Person1('Liza', 18) ;

// person.SayHi();

let person2 = new Person1('Liza', 18);

// person2.SayHi();

console.log(person2 == person);

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} имеет скорость ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} стоит`)
    }
}



let monkey = new Animal('Monkey');

// monkey.run(200);
// monkey.stop();


class Phoenix extends Animal{
    constructor(name, age) {
        super(name); // если подтягиваем из основного 
        this.age = age;
        this.speed = 0;
    }
    fly() {
        alert(`${this.name} летит`);
    }
    run(speeed) {
        this.speed = speeed + 100;
        alert(`${this.speed} очень быстрый `);
    }
}

let phoenix = new Phoenix('Johny');

phoenix.run(700);
phoenix.stop();
phoenix.fly();




