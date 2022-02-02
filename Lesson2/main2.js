// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
let time= 45;
if(time<=15){
    document.write('<div>1</div>');
} else if (time>15 && time <=30){
    document.write('<div>2</div>');
}else if (time>30 && time <=45) {
    document.write('<div>3</div>');
}else if (time>45 && time <=59){
    document.write('<div>4</div>');}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day= 24;
if (day<=11){
    document.write('<div>1</div>');
} else if (day>11 && day <=21){
    document.write('<div>2</div>');
}else if (day>21 && day <=31) {
    document.write('<div>3</div>');}
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test1= !!' ' ? 'Вірно': 'Неправильно';
console.log(test1)
let test2= !!'' ? 'Вірно': 'Неправильно';
console.log(test2)
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a= +prompt('Введіть число 1,0,-3');
if( a!==0){
   document.write('<div> Вірно </div>');
}
else{
    document.write('<div> Невірно </div>');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let value= 1;
switch (value){
    case 1:
        console.log('14.00-dentist');
        break;
    case 2:
        console.log('11.00-Eanglish lesson');
        break;
    case 3:
        console.log('15.00-gym');
        break;
    case 4:
        console.log('12.00-interview');
        break;
    case 5:
        console.log('16.00-Salsa');
        break;
    case 6:
        console.log('14.00-meeting with friends');
        break;
    case 7:
        console.log('10.00- breakfast with sister`s family' +" "+
            '18.00-theatre');
        break;
    default:
        console.log('default');
}
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year= +prompt('Введіть рік');
if (year%4===0){
    console.log('Високосний');
} else{
    console.log('Рік не високосний');
}


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let js= prompt('Яка «офіційна» назва JavaScript?');
if(js==='ECMAScript'){
    alert('Правильно!');
}else{
    alert('Не знаєте? ECMAScript!');
}