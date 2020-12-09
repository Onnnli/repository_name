// sessionStorage  - данные храняться только во врем одной сессии
// localStorage -- храниит данные после закрытиЯ брау


localStorage.setItem('userId', 3653);

localStorage.getItem('userId');

localStorage.removeItem('userId');


//localStorage.clear() // чистит всё

localStorage.length // колво значений в локал


localStorage.setItem('liza', 3693);
localStorage.setItem('Artem', 3953);
localStorage.setItem('alex', 4568);

localStorage.getItem('liza');
localStorage.getItem('Artem');
localStorage.getItem('alex');
console.log(localStorage.getItem('alex'), localStorage.getItem('Artem'), localStorage.getItem('liza'));

console.log();




let set = [
    {key: 'my', value: 365},
    {key: 'my2', value: 366},
    {key: 'my3', value: 367}
]


for(let i = 0; i < set.length; i++) {
    localStorage.setItem(set[i].key, set[i].value);
}

for(let i = 0; i < set.length; i++) {
    localStorage.getItem(set[i].key);
    console.log(localStorage.getItem(set[i].key));
}


// access token: 'jkjkpj58768jij...'

// позоляет польз 


window.onstorage = event => {
    console.log('mummy');
};







