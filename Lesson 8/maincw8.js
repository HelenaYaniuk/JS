// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let classAdd = document.getElementById('main_header');
classAdd.classList.add('QA');
// b) робить шириниу елементу ul 400px
let widthUl = document.getElementsByTagName('ul');
console.log(widthUl);
widthUl[0].style.width = '400px';
widthUl[0].style.backgroundColor = 'gray';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
console.log(linkList)
for (let element of linkList) {
    element.style.backgroundColor= 'yellow';
    element.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let newText = document.getElementsByClassName('listElement2');
console.log(newText);
newText[0].innerHTML = '<a href="#">Some new text</a>';
// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
console.log(li);
for (const element of li) {
    element.style.background = 'silver';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
console.log(a);
for (const element of a) {
    element.classList.add('anchor');
    console.log(element);
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aA =document.getElementsByTagName('a');
console.log(aA);
for (const element of aA) {
    if(element.innerText = 'link3'){
        element.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aNew =document.getElementsByTagName('a');
console.log(aA);
for (const element of aNew){
    // let element_XXX = element.innerText;
    element.classList.add('element_${element_XXX}');
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
console.log(subHeader);
for (const element of subHeader) {
    element.style.color = prompt('Enter your color:(black, red,blue...)');
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subText = document.getElementsByClassName('sub-header');
console.log(subText);
for (const element of subText) {
    if(element.innerText === 'content 2 segments'){
        element.style.color = prompt('Enter your color:(black, red,blue...)')
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1= document.getElementsByClassName('content_1');
console.log(content1);
content1[0].innerHTML = prompt('Enter your text:') ;
// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
console.log(p)
for (const element of p) {
    element.style.padding = '20px';
    element.style.backgroundColor= 'yellow'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
console.log(text2);
text2[0].innerText = 'dec -2021';