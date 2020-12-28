let map = new Map();
    map.set('Artem', 22);
    map.set(1, 'one');
    map.set(true, 'yes');

//у массива фиксированная длина

map.size // длина
console.log(map.size);



//map.clear() // удаляет


console.log(map.size);

map.set('key', 'value') // ДОбавляет


console.log(map);

map.get('key'); // забрать значение из коллекции
//         // если не имеет то underfind
console.log(map.get('key'));


map.has('key'); // имеет ли 

console.log(map.has('key'));



// map.delete('key'); // удаляет
// console.log(map);

console.log(map.keys());// клбчи

for(let key of map.keys()) {
    console.log(key);
}


console.log(map.values()); //значение

for(let val of map.values()) {
    console.log(val);
}


console.log(map.entries()); // ключ-значение

for(let entr of map.entries()) {
    console.log(entr);
}


// в качве ключей имеет свой тип// бул строку цифру в отличие от боъекта





let set = new Set();

set.add('rabbit');
set.add('value');
// set.clear();
//set.delete('value');
set.has('rabbit');
console.log(set.size);
console.log(set);


let set2 = new Set(['open', 'close'])
console.log(set2);


for(let item of set){
    console.log(item);
}

let obj = {name: 'Liza', age: 22, weight: 45};
let obj2 = {name: 'Maks', age: 25, weight: 60};



let weak = new WeakMap();

weak.set(obj, 'woman');
weak.set(obj2, 'man')
obj = null;
   
   console.log(weak);
   console.log(weak.has(obj));

let personA = {name: 'Liza', age: 22, weight: 45};
let personB = {name: 'Maks', age: 25, weight: 60};


let weakSet = new WeakSet();

weakSet.add(personA);
weakSet.add(personB);

personA = null;
console.log(weakSet);



