// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers=[3,6,9,12,15];
let str=['lesson', 'message', 'three', 'class', 'question'];
let all=[true, 3, 'class', 'finish',false];
console.log(numbers);
console.log(str);
console.log(all);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array=[];
array[0]='It`s';
array[1]='a';
array[2]='good';
array[3]='job';
console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i=0;i<=10;i++){
    document.write('<div>Hello</div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i=0;i<=10;i++){
    document.write(`<div>Hello-${i}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let j=0;
while(j<20){
    document.write(`<h1>World</h1>`);
    j++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let k=0;
while(k<20) {
    document.write(`<h1>World${k}</h1>`);
    k++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
    let num=[1,2,3,4,5,6,7,8,9,10];
for(i=0;i<num.length;i++){
    console.log(num[i])
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let string=['one','two','three','four','five','six','seven','eight','nine','ten'];
for(i=0;i<string.length;i++)  {
    console.log(string[i]);
}
    // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr=[false, 'true', 5, true, 'five',9,'smile', 'shine', 2, 'happy'];
for(i=0;i<arr.length;i++)  {
    console.log(arr[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrayBoolen=[false, 'true', 5, true, 'five',9,'smile', 'shine', 2, 'happy'];
for(i=0;i<arrayBoolen.length;i++){
 if(typeof arrayBoolen[i]==='boolean')  {
    console.log(arrayBoolen[i]);
}
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrayNumbers=[false, 'true', 5, true, 'five',9,'smile', 'shine', 2, 'happy'];
for(i=0;i<arrayNumbers.length;i++){
    if(typeof arrayNumbers[i]==='number')  {
        console.log(arrayNumbers[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrayString=[false, 'true', 5, true, 'five',9,'smile', 'shine', 2, 'happy'];
for(i=0;i<arrayString.length;i++){
    if(typeof arrayString[i]==='string')  {
        console.log(arrayString[i]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray=[];
emptyArray[0]= 4;
emptyArray[1]= 'star';
emptyArray[2]= true;
emptyArray[3]= 1;
emptyArray[4]= 'element';
emptyArray[5]= 'class';
emptyArray[6]= 34;
emptyArray[7]= false;
emptyArray[8]= 15;
emptyArray[9]= 'easy';
for(i=0;i<emptyArray.length;i++){
    console.log(emptyArray);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<10;i++){
    console.log('поточний номер кроку: 1');
    document.write('поточний номер кроку: 1');
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<100;i++){
    console.log('поточний номер кроку: 1');
    document.write('поточний номер кроку: 1');
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<100;i+=2) {
    console.log('поточний номер кроку: 2');
    document.write('поточний номер кроку: 2');
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i=0;i<100;i++) {
    if(i%2===0){
        console.log('поточний номер кроку: 2');
        document.write('поточний номер кроку: 2');
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i=0;i<100;i++) {
    if(i%2===1){
        console.log('поточний номер кроку: 1');
        document.write('поточний номер кроку: 1');
    }
}