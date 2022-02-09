// - створити функцію яка приймає три числа та виводить найменьше.
let numbersMin=(n1,n2,n3) =>{
    if(n1<n2 && n1<n3){
        console.log(n1);
    } else if(n2<n1 && n2<n3){
        console.log(n2);
    }else{
        console.log(n3);
    }
}
numbersMin(20,15,30);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let numbersMax=(n1,n2,n3) =>{
    if(n1>n2 && n1>n3){
        console.log(n1);
    } else if(n2>n1 && n2>n3){
        console.log(n2);
    }else{
        console.log(n3);
    }
}
numbersMax(20,15,30);
// - створити функцію яка повертає найбільше число з масиву
let number=[2,54,89,28,46,90];
let maxNumber=(array) =>{
    let max= array[0];
    for (let element of array) {
        if(element>max){
            max=element;
        }
    }
    return max;
}
console.log(`${maxNumber(number)}`);
// - створити функцію яка повертає найменьше число з масиву
let minNumber=(array)=> {
    let min= array[0];
    for (let element of array) {
        if(element<min){
            min=element;
        }
    }
    return min;
}
console.log(`${minNumber(number)}`);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summ=(array) =>{
    let sum =0;
    for (let arrayElement of array) {
        sum+=arrayElement;
    }
    return sum;
}
console.log(summ(number));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let midle=(array)=> {
    let sum =0;
    for (let arrayElement of array) {
        sum+=arrayElement;
    }
    return sum/array.length;
}
console.log(midle(number));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let show=(...arg)=>{
    let max= arg[0];
    let min=arg[0];
    for (let element of arg) {
        if(element>max){
            max=element;
        }
        if(element<min){
            min = element;
        }
    }
    console.log(max);
    return min;
}
document.write(show(7,15,32,3));
// - створити функцію яка заповнює масив рандомними числами
let random=(length)=>{
    let array=[];
    for (let i = 0; i < length; i++) {
        document.write(Math.floor(Math.random()*100));
    }
}
random(6);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomm =(length,limit)=>{
    let array=[];
    for (let i = 0; i < length; i++) {
        console.log(Math.floor(Math.random()*limit));
    }
}
randomm(4,60);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr=(array)=>{
    let newarr=[];
    let j = 0;
    for (let i = array.length-1; i >=0;  i--) {
        newarr[j]= array[i];
        j++;
    }
    return newarr;
}
console.log(arr([4,7,'hello']))