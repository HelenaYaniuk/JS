// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1= +prompt('Введіть перше число');
let number2= +prompt('Введіть друге число');
if (number1>number2){
    console.log(number1);
} else if(number1===number2){
    console.log('Введені числа рівні');
} else {
    console.log(number2);
}
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let flat= prompt('Введіть номер квартири');
if( flat >0 && flat <=20){
    console.log('Ваша квартира розташована у 1 підїзді');
} else if(flat >=21 && flat <=48){
    console.log('Ваша квартира розташована у 2 підїзді');
}  else if(flat >=49 && flat <=90) {
    console.log('Ваша квартира розташована у 3 підїзді');
}
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number= +prompt('Введіть число.')
if(number === 10){
    console.log('Вірно');
} else{
    console.log('Не вірно');
}
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
let x= [];
if(typeof x === 'number'){
    console.log('1');
} else if( typeof x === 'string'){
    console.log('2');
} else if(typeof x === 'boolean'){
    console.log('3');
} else if( typeof x === 'object'){
    console.log('4');
}else{
    console.log('Oops...')
}
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let game= prompt('Чи йдемо ми сьогодні в на навчання?');
if(game >=+10 && game <=+22 ){
    console.log('Йдемо ВЧИТИСЯ');
} else  {
    console.log('Сидимо дома і вчимось ОНЛАЙН');
}
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let luck= +prompt('Введіть число від 1 до 5');
switch(luck){
    case 1:
        console.log('Ви виграли ВЕЛОСИПЕД!');
        break;
    case 2:
        console.log('Ви виграли ЦУКЕРКУ!');
        break;
    case 3:
        console.log('Ви виграли ПОЛІТ НА МАРС!');
        break;
    case 4:
        console.log('Ви виграли СМАРТФОН!');
        break;
    case 5:
        console.log('Ви виграли ОБІЙМИ!');
        break;
    default:
        console.log('Ой... число не вірне!')
}