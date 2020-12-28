function getMoney(money, a) {
    const result = money * a * 2.55
    
    console.log(`cash ${result}`);
}

setTimeout(getMoney, 5000, 1000, 20);

let clean = setInterval(getMoney, 500, 200, 2);
setTimeout( () => clearInterval(clean), 2000)




