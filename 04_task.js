//Задача 1.Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let arr1 = ['a', 'b', 'c'];
let b = [1, 2, 3];

console.log(arr1.concat(b));

//Задача 2.Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let arr2 = ['a', 'b', 'c'];

// или arr2.concat(1, 2, 3)
arr2.push(1);
arr2.push(3);
arr2.push(4); 
console.log(arr2);

// Задача 3.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

let arr3 = [1, 2, 3];

arr3.reverse();
console.log(arr3);


//Задача 4.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

let arr4 = [1, 2, 3, 4, 5];
let arrSlice = arr4.slice(0, 3) // возвращает новый массив, содержащий копию части исходного массива.
console.log(arrSlice);

//Задача 5.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

let arrSlice2 = arr4.slice(3, 5);
console.log(arrSlice2);

// Задача 6.Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let obj = {
    js:'test', 
    jq: 'hello', 
    css: 'world'
};


console.log(Object.keys(obj));

//Задача 7.Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let arr7 = [1, 2, 3, 4];
let revArr = [];
    for(let i = arr7.length; i > 0; i--) {
        for (let j = 0; j < arr7.length; j++){
            revArr[j] = i--;
        }
        console.log(revArr);
    }



//Задача 8.Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let arr8 = [
    [1, 4, 3],
    [4, 5],
    [6]
];

let sum = 0;

for (let i = 0; i < arr8.length; i++) {
    for (let j = 0; j < arr8[i].length; j++) {
        sum += arr8[i][j];
    }
}
console.log(sum);


//Задача 9.Дан трехмерный массив с числами, например 
//[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.


let arr9 = [
    [
        [1, 2],
        [1, 3]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]

let sum2 = 0;

for(let i = 0; i < arr9.length; i++){
    for(let j = 0; j < arr9[i].length; j++){
        for(let k = 0; k < arr9[i][j].length; k++){
            sum2 += arr9[i][j][k];
        }
    }
}
console.log(sum2);


// Задача 10.Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

let array = [1, 2, 3];
let array1 = [1, 2, 3];

// array === array1

function f1(arr1, arr2) {
    for (let i = 0; i < arr1.length && i < arr2.length; i++)
     {
        if (arr1[i] === arr2[i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(f1(array, array1));

//Задача 11.Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел(используйте map).

let mas = [1, 2, 3, 4];

let newMas = mas.map(item => item ** 2);
console.log(newMas);


// Задача 12.Дан массив с числами. Оставьте в нем только отрицательные числа.(filter).

let mas2 = [ 1, -2, 3, -5, 6, 8, -8];
let newMas2 = mas2.filter(item => item < 0);
console.log(newMas2);

// Задача 13.Дан массив с числами. Найдите сумму этих чисел.(reduce).


let mas3 = [8, 7, 20, 3, 2];
let sumMas3 = mas3.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sumMas3);

//currentValue -- текущий обрабатываемый элемент массива
// accumulator -- значение, возвращаемое, после посещения элемента
// initialValue ( ==0 ) или етот




//Задача 14.Создайте объект city1 (var city1 = {}), укажите у него свойства name со значением «Город2» и population со значением 10 млн.
let city1 = {
    name: 'Город2',
    population: 10000000,
    getName: function() {
        return this.name
    },
    exportStr: function() {
        return `name = ${this.name} population = ${this.population}`
    }
}

// Создайте объект city2 через нотацию {name: "Город1", population: 1e6}.

let city2 = {
    name: "Город1",
    population: 1e6,
}

// Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов


console.log(city1.getName(), '--- Get name for city1');
console.log(city1.getName.bind(city2)(), '---- Get name for city2');

// Создайте методы exportStr() у каждого из объектов. 
// Этот метод должен возвращать информацию о городе в формате 
//«name=Город population=10000000». Для второго города будет строка со своими значениями.

console.log(city1.exportStr(), '---- Export str for city1');
console.log(city1.exportStr.bind(city2)(), '---- Export str for city2');




// Примечание: можно обращаться к каждому свойству через цикл for/in.



// 3адача 15.Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

let now = moment();
    console.log(now.format('YYYY-MMMM-Do'));

//Задача 16.Выведите на экран текущий день
    console.log(now.format('Do'));


//Выведите на экран текущий месяц
    console.log(now.format('MMMM'));

//Выведите на экран текущий год
    console.log(now.format('YYYY'));
    
//Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени

let nowDate = new Date();
console.log(nowDate.getTime());