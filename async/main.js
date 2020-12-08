// задача 1.Создайте асинхронную функцию getTasks(), 
// которая возвращает массив объектов категорий.
//  Данные получать по ссылке: https://test-todoist.herokuapp.com/api/tasks
// Необходимо вывести имена описание этих задач 
// на странице в виде списка

let list = document.querySelector('.task1');

async function getTasks() {
    let mass = await fetch('https://test-todoist.herokuapp.com/api/tasks')
    .then(response => response.json())
    .then(commits => commits)
    console.log(mass);

    mass.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element.description;
        list.appendChild(li);
    })
}
console.log(getTasks());



//
// Задача 2.Создайте асинхронную функцию 
// getUsers(names),


//которая получает на вход массив логинов пользователей GitHub,



// запрашивает у GitHub информацию о них 
//и возвращает массив объектов-пользователей.




// Информация о пользователе GitHub с логином USERNAME 
// доступна по ссылке: https://api.github.com/users/USERNAME.

async function getUsers(names) {
    let jobs = [];
    
    for(let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
          if (successResponse.status != 200) {
              return null;
            } else {
            return successResponse.json();
        }
    },
    failResponse => {
        return null;
    }
    );
    jobs.push(job);
}

let results = await Promise.all(jobs);

return results;
}

getUsers()
