// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello ='hello world';
console.log(hello.length);
let lorem ='lorem ipsum';
console.log(lorem.length);
let java='javascript is cool';
console.log(java.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase= hello.toUpperCase();
console.log(toUpperCase);
let toUpperCase2=lorem.toUpperCase();
console.log(toUpperCase2);
let toUpperCase3 = java.toUpperCase();
console.log(toUpperCase3);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase1 = toUpperCase.toLowerCase();
console.log(toLowerCase1);
let toLowerCse2 = toUpperCase2.toLowerCase();
console.log(toLowerCse2);
let toLowerCse3 = toUpperCase3.toLowerCase();
console.log(toLowerCse3);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let string = 'Каждый охотник желает знать';
    let split = string.split(' ');
    console.log(split);
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (string, index) =>{
    return string.substring(0,index);
};
document.write(delete_characters(string,7));

//      - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str2 = "HTML JavaScript PHP";
let replace= (str2)=>{
    let replaceUpper = str2.replaceAll(' ','-') . toUpperCase();
    return replaceUpper;
}
console.log(replace(str2));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній

let letter =(str) =>{
    return str[0].toUpperCase()+str.slice(1);
}
console.log(letter('okten is a cool school'))


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let upper =(string) => {
    return string.split(' ').map(letter=>letter.charAt(0).toUpperCase()+letter.slice(1)).join(' ');
}
console.log(upper('okten is a cool school'));

