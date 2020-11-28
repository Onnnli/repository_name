//let arr = [4, 5, 5, 6, 'stroka'];

//ARRAY

//push - добавляет + последнее
arr.push('push');
    console.log(arr);

// pop - удаляет последний элемент массива
arr.pop();
    console.log(arr);


//shift -- удаляет первый элемент массива
arr.shift();
    console.log(arr);

//unshit -- добавляет в начало
arr.unshift('first', 'second');
    console.log(arr);

//splice --вырезат колво элементво из массива, 1 -- с какого индекса, 2-- сколько элемента
arr.splice(2, 2);
    console.log(arr); 

//slice -- копирует от какого индекса до какого иднекса
//slice() -- копия массива

let arr2 = arr.slice(2, 3);
    console.log(arr2);




//concat -- добавить много элементов массива    
let arr3 = [1, 2];
    console.log(arr3.concat([3, 4]));



// forEach -- метод запускает функцию для каждого элемента массива

let arr4 = ['artem', 'alex', 'liza', 'alina'];
    //arr4.forEach(alert); -- выведет каждый элемент массива

    // arr4.forEach((item, index, array) => {
    //     alert(`${item}, ${index}, ${array}`);
    // });

    // arr4.forEach((item, index) => {
    //     let a = item + index;
    //     alert(a);
    // });
    
    // let str = '';
    // arr4.forEach((item, index, array) => {
    //     str += item;
    // });
    //     console.log(str);



    // выводит индекс массива // слева направо // сначала
    console.log(arr4.indexOf('liza'));

    // справа -- налево // с конца
    console.log(arr4.lastIndexOf('alina'));

    // есть ли он в массиве 
    console.log(arr4.includes('alex'));


    let students =  [
        {
            id: 1, name: 'Liza'
        },
        {
            id: 2, name: 'Artem'
        },
        {
            id: 3, name: 'Alex'
        }];



    // find  поиск одного элемента массива 

    // let student = students.find(item => item.id == 2);
    //     console.log(student);
    

    // filter -- поиск множества элементов массива, те которые попадуться под условие 

    let someStudent = students.filter(item => item.id < 3);
        console.log(someStudent);


    //reverse -- переворачивает массив  

        console.log(arr4.reverse());

    //sort 
    let arr5 = [1, 12, 'gfgf', 7];
        console.log(arr5.sort());


    // join 
    const elem = ['liza', 'vladimir', 'artem', 'zhenya'];
        console.log(elem.join(' - '));


    // split -- разбивает строки на массивы
    let a = 'Ajijghpdk fdskhgfiudshfos, ufhsuhf hsbgfhdhf gsyfgys, gfugsuf' 
    let element = a.split(',');
    console.log(element);

    // map -- вызвать функцию для каждого элемента массива 
    // создает копию массива в переменную !!!
    let numbers = [6, "hgfj", 3, 1];
    let newNumb = numbers.map(item => item + 4);
        console.log(newNumb);
    
    //reduce -- для вычисления единственного значения с использованием массива

    let result = numbers.reduce((sum, current) => sum + current, 5);
        console.log(result);

    //findIndex 



    //  SPLICE SLICE CONCAT MAP FILTER FIND JOIN REDUCE SPLIT 



    //МНОГОМЕРНЫЕ МАССИВЫ 

    let arrayMult = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];

    for (let i = 0; i < arrayMult.length; i++) {
        //console.log(arrayMult[i]);
        for (let j = 0; j < arrayMult[i].length; j++){
            console.log(arrayMult[j])
        }
    }

    // console.log(arrayMult[1][0]);


    // let num = [];
    //     num[0] = [];
    //     num[0][0] = [];
    //     console.log(num);
    //     num[0][0][0] = 5;
    //     console.log(num);




    
    
    



    