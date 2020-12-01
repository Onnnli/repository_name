// URL - АДРЕСНАЯ СТРОКА // ДОМЕННОЕ ИМЯ + ДОМЕН + КУДА ОН ОБРАЩАЕТСЯ 
const url = document.URL
console.log(url);

const domain = document.domain;
console.log(domain);

const id = document.getElementById('myId')

console.log(id);


let divs = document.querySelectorAll('.out');
console.log(divs);

let div = document.querySelector('.out');
div.classList.add('className2'); // добавляет класс
div.classList.remove('className2'); // удаляет класс
div.classList.contains('full'); // проверяет есть ли класс у этого элемента тру фолс


div.classList.toggle('click'); // переклюяает классы
console.log(div.classList.contains('full'));
div.style.backgroundColor = 'red';
console.log(div);



const block = document.getElementsByClassName('out');
console.log(block);

block[3].classList.add('newClass');
console.log(block);


let link = document.querySelector('.link');
link.style.color = 'red'; // колор стайл 
console.log(link);
link.id = 'newId'; // меняем айди
link.className = "news";
console.log(link);

let input = document.querySelector('.i-1');
    input.getAttribute('type'); // достаем атрибуьт
    input.setAttribute('myAtr', '20px'); // добавляем атрибут ключ, значение
    input.removeAttribute('myAtr');
    console.log(input);




let pass = document.querySelector('.i-2');
let pass2 = document.querySelector('.i-3');
function f1() {
    
if(pass.value === pass2.value) {
    pass.style.border = "3px solid green";
    pass2.style.border = "3px solid green";
} else {
    pass.style.border = "3px solid red";
    pass2.style.border = "3px solid red";
}

}

document.querySelector('.b-2').onclick = f1;


let forma = document.forms[0];


forma.addEventListener('submit', function () {
    let passw = forma[0];
    let passw2 = forma[1];
    if(passw.value === passw2.value) {
        passw.style.border = "3px solid green";
        passw2.style.border = "3px solid green";
    }  else {
        passw.style.border = "3px solid red";
        passw2.style.border = "3px solid red";
    }
});


// element.addEventListener ('click' , 
//  function() {})
// event --- стопит события 
// event.preventDefault()



