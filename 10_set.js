//УНИКАЛЬНЫЕ ЭЛЕМЕНТЫ


const number = [1, 2, 2, 1, 3, 5, 8, 4, 5, 4, 7];

const unique = [...new Set(number)] // spred operator
console.log(unique);


const  unique2 = Array.from(new Set(number));
console.log(unique2);



// ОБНОВЛЕНИЕ ОБЪЕКТА В МАССИВЕ ПО СВОЙСТВУ

const data = {
    id: 3,
    score: 107
};

const initial =[
    {
        id: 1,
        score: 1
    },
    {
        id: 2,
        score: 2
    },
    {
        id: 3,
        score: 7
    },
    {
        id: 4,
        score: 4
    }
];

const update = initial.map( u => u.id == data.id ? data : u);
console.log(update);



// ПРЕОБРАЗОВАНИЕ МНОГОМЕРНОГО МАССИВА В ОДНОМЕРНЫЙ

const arr = [
    [1, 2],
    [3, 4],
    [5, 6]
]

const arrUp = arr.reduce((res, a) => [...res, ...a], []);


console.log('arr',arrUp);

// ВЫЧИТАНИЕ ИЗ НАБОРОВ // ВЫБОРКА

const s1 = [1, 2, 3, 4, 5];
const s2 = [2, 4];
const chick = s1.filter( x => s2.indexOf(x) < 0)



console.log(chick);




