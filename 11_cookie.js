document.cookie = 'name = Валя';
document.cookie = 'age = 25';

document.cookie = 'name = Дима';

const name2 =  document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const age2 =  document.cookie.match(/age=(.+?);/);



console.log(name2);
console.log(age2);
// 