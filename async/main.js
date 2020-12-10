// задача 1.Создайте асинхронную функцию getTasks(), 
// которая возвращает массив объектов категорий.
//  Данные получать по ссылке: https://test-todoist.herokuapp.com/api/tasks
// Необходимо вывести имена описание этих задач 
// на странице в виде списка

let list = document.querySelector('.task1');

async function getTasks() {
    let mass = await fetch('https://test-todoist.herokuapp.com/api/tasks')
    .then(response => response.json())

    mass.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element.description;
        list.appendChild(li);
    })
    let result = await Promise.all(mass).then(value => {
        console.log(value);
    })
    return result;
}
getTasks();



//
// Задача 2.
// Создайте асинхронную функцию 
// getUsers(names),
// которая получает на вход массив логинов пользователей GitHub,
// запрашивает у GitHub информацию о них 
//и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME 
// доступна по ссылке: https://api.github.com/users/USERNAME.



let names = ['ivey', 'wycats', 'Onnnli'];

async function getUsers(names) {
    let mass = []

    for(let item of names) {
        let username = await fetch(`https://api.github.com/users/${item}`)
            .then(response => response.json());

        mass.push(username);
    }
    let  result = await Promise.all(mass).then(value => {
        console.log(value)
    })
    return result;
}

getUsers(names);


// Необходимо создать страницу 
// На странице должен выводиться:
// список категорий,
//полученных по этому GET запросу: https://test-todoist.herokuapp.com/api/categories


// кнопка добавить категорию 
//(POST запрос - https://test-todoist.herokuapp.com/api/categories) - 
//после успешной отправки этого запроса - добавленная категория появляется в списке категорий


let cat = {
    id: 333,
        name:"kkk"
    }
    
async function f2() {
    
    let response = await fetch('https://test-todoist.herokuapp.com/api/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(cat)
    })
    .then(result => result.json())

    console.log(response);

    out.innerHTML += ' ' + response.name;
}

document.querySelector('button').onclick = f2;

let out = document.querySelector('.out');

async function f1() {
    let get = await fetch('https://test-todoist.herokuapp.com/api/categories')
    .then(response => response.json())
    
    for (let item of get){
        out.innerHTML += ' ' + item.name
    }
}

f1();
