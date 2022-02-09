// Всі функції повинні бути описані стрілочним типом!!!!
    // - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangle=(a,h) => a * h;
console.log(rectangle(4,5));
// - створити функцію яка обчислює та повертає площу кола
let circle=(r) => 3.14 * r**2;
console.log(circle(5));
// - створити функцію яка обчислює та повертає площу циліндру
let cylinder=(r,h) => 2 * 3.14 * r * h;
console.log(cylinder(3,5));
// - створити функцію яка приймає масив та виводить кожен його елемент
arraY=['one', 'two',3,7,true]
let array = (arraY) => {
  for(let i = 0; i < arraY.length; i++)  {
      document.write(arraY[i]);
  }
}
array(arraY);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let txt=(txt1)=>{
        document.write(`<p>${txt1}</p>`) ;
}
txt('some text');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ul=(argument)=>{
    document.write(`<ul>`);
    document.write(`<li>${argument}</li>`);
    document.write(`<li>${argument}</li>`);
    document.write(`<li>${argument}</li>`);
    document.write(`</ul>`);
}
ul('hello');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ull=(txt,number)=>{
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
       document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}
ull('li',3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements=(array)=>{
    document.write(`<ul>`);
    for (let i = 0; i < arraY.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
elements(arraY)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let object=[{id:1, name:'Ivan', age: 40},{id:2, name:'Taras', age:45}, {id:3, name:'Mykola', age:23}];
let objects=(array)=>{
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
    }
}
objects(object);