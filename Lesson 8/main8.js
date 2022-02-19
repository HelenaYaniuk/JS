// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentText = document.getElementById('content');
console.log(contentText);
// -- отримує текст з блоку з id "rules"
let rulesText = document.getElementById('rules');
console.log(rulesText);
// -- замініть текст параграфа з id 'content' на будь-який інший
contentText.innerText= ' It`s a good day to change our lives!';
// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesText.innerHTML = '<b> But you need to work hard</b>';
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let color = document.body.children;
for (const element of color) {
    element.style.backgroundColor = 'red';
    element.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let elementList = document.getElementById('rules');
console.log(elementList.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let textColor = document.getElementsByClassName('fc_rules');
for (const element of textColor) {
    element.style.color = 'red';
}