// XmlHttpRequest 

// ajax --- fetch --- axios

// loadscript('1.js; function(error, script){
//     if(error){

//     }else{
//         loadscript('2.js' function(error, script){
//})
//     }
// })

const newPromis = new Promise((resolve, eject) => {
    setTimeout(() => {
        resolve ('test');
    }, 3000);
});

newPromis.then((value) => {
    console.log(value);
});



// 1 pending
// 2 если небыло проблем с бд то resolve
        // если были  nто eject 


// async function newFunc(){
//     return 1;
// }
// console.log(newFunc());


///////////////

async function newFunc2(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 2000)
    });
    let result = await promise;
    console.log(result);
}

newFunc2();


/////////////////////

// FETCH -- для сетевых запросов на бэк


// let response = fetch(url, [option]);

// RestFull // get post put deleted
// RestLimited // get post
async function f3() {
    let result2 = await fetch('https://test-todoist.herokuapp.com/api/categories')
        .then(response => response.json())
        .then(commits => commits)

    result2.forEach(element => {
        console.log(`${element.name}`);
    });
}
//f3()
console.log('f3(): ', f3());




// let xhr = new XMLHttpRequest; //-- объекс для сетевых запросов на бэк 

//на этом синтаксисе используют фетч, аксис



// xhr.open(method, url, [async, user, password]);
// xhr.send([body]);
// xhr.onload = func () ..
// xhr.onerror = func () ... 


  
// let xhr = new XMLHttpRequest();

// xhr.open('GET', myURL);
// xhr.responseType = 'json'; // для того чтобы тип был объектом, а не строкой
// // успешный ответ от сервера
// xhr.onload = () => {
//     console.log(xhr.response); 
// }
// // ошибка от сервера 
// xhr.onerror = () => {
//     console.log('error');
// }
// xhr.send();

    


