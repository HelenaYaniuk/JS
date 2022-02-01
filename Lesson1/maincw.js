// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
console.log([1,2,3,4,5,6,7,8,9,10]);
let result= 1+2+3+4+5+6+7+8+9+10;
console.log(result);
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name:'Swan',
    numberofpages: 250,
    genre: 'poem'
}
console.log(book)
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name:'Swan',
    numberofpages: 250,
    genre: 'poem',
    authers: 'Esop'
}
console.log(book2)
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = ['book1','book3','book4','book5'];
console.log(books)
let book1 = {
    name: 'Swan',
    numberofpages: 250,
    genre: 'poem',
    authers: 'Homer'
}
let book3 = {
    name:'Swan',
    numberofpages: 250,
    genre: 'poem',
    authers: 'Esop'
}
let book4 = {
    name:'Sparrow',
    numberofpages: 350,
    genre: 'poem',
    authers: 'Esop'
}
let book5 = {
    name:'Friends',
    numberofpages: 300,
    genre: 'cooking',
    authers: 'Amanda I'
}
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// // Значення площі зберігати в змінній s.
let s=23*10;
console.log(s);
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let v= 3.14*(4*10);
console.log(v);
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let k=((3**2)+(4**2))/2;
console.log(k)

