let personLiza = {
    name: 'Liza',
    age: 22,
    weight: 45,
    bike() {
        console.log('liza + bike');
    }
};

let personZhenya = {
    name: 'Zhenya',
    age: 18
}
personZhenya.height = 189;

personZhenya.__proto__ = personLiza;



console.log(personLiza);
console.log(personZhenya);



console.log(personZhenya.name);
console.log(personZhenya.weight);
personZhenya.bike()


let alex = {
    __proto__: personLiza,
}

console.log(alex);
//переопределение методу

alex.bike = function() {
    console.log('alex + car');
}


alex.bike()




// prototype
//es5
let dog = {
    eat: function() {
        return 'eat other'
    }
}

function Foo(name, age) {
    let objDog = Object.create(dog);
    objDog.name = name;
    objDog.age = age;
    return objDog
};


let pushok = new Foo('Billy', 400);

console.log(pushok);

//

// es6

function DogObject(name, age) {
    this.name = name;
    this.age = age;
}

DogObject.prototype.speak = function() {
    console.log('Hello, Vladimir');
}

let gav = new DogObject('Venya', 450)
gav.speak();
console.log(gav);

//prototype с конструкторами // доп свойство с конгструктором
//proto с объектами




