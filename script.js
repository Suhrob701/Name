let name = prompt('Ismingzizni kiriting');
console.log(name)

let harf = prompt('Bironta harf kiriting')
console.log(harf)

if (name.includes(harf)) {
    alert(`${name} ismingizda "${harf}" harfi mavjud`);
}  else {
    alert(`${name} ismingizda "${harf}" harfi mavjud emas`);
}
