// задача 1.Создайте асинхронную функцию getTasks(), 
// которая возвращает массив объектов категорий.
//  Данные получать по ссылке: https://test-todoist.herokuapp.com/api/tasks
// Необходимо вывести имена описание этих задач 
// на странице в виде списка

let list = document.querySelector('.task1');
async function getTasks() {
    let mass = await fetch('https://test-todoist.herokuapp.com/api/tasks')
    .then(response => response.json())
    .then(commits => commits);

    mass.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element.description;
        list.appendChild(li);
    })
}
console.log('task 1', getTasks());



//
// Задача 2.

// Создайте асинхронную функцию 
// getUsers(names),


// которая получает на вход массив логинов пользователей GitHub,



// запрашивает у GitHub информацию о них 
//и возвращает массив объектов-пользователей.




// Информация о пользователе GitHub с логином USERNAME 
// доступна по ссылке: https://api.github.com/users/USERNAME.
let names = ['ivey', 'wycats'];

async function getUsers(names) {
    let mass = []


    for(let item of names) {
        let username = await fetch(`https://api.github.com/users/${item}`)
            .then(response => response.json());
        mass.push(username);
    }
    let  result = await Promise.all(mass)
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
let out = document.querySelector('.out');
let cat = {
        id: 333,
        name:"hello"
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
}

document.querySelector('button').onclick = f2;



async function f1() {
    let get = await fetch('https://test-todoist.herokuapp.com/api/categories')
        .then(response => response.json())
  
        for (let item of get){
            console.log(item);
            out.innerHTML += ' ' + item.name;
        }
    
}
f1()



