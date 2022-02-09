// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbersMin(n1,n2,n3) {
    if(n1<n2 && n1<n3){
        console.log(n1);
    } else if(n2<n1 && n2<n3){
        console.log(n2);
    }else{
        console.log(n3);
    }
}
numbersMin(20,15,30)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function numbersMax(n1,n2,n3) {
    if(n1>n2 && n1>n3){
        console.log(n1);
    } else if(n2>n1 && n2>n3){
        console.log(n2);
    }else{
        console.log(n3);
    }
}
numbersMax(20,15,30)
// - створити функцію яка повертає найбільше число з масиву
let Number=[2,54,89,28,46,90]
function maxNumber(array) {
    let max= array[0];
    for (let element of array) {
        if(element>max){
            max=element;
        }
    }
    return max;
}
console.log(`${maxNumber(Number)}`)
// - створити функцію яка повертає найменьше число з масиву
function minNumber(array) {
    let min= array[0];
    for (let element of array) {
        if(element<min){
            min=element;
        }
    }
    return min;
}
console.log(`${minNumber(Number)}`)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function summ(array) {
    let sum =0;
    for (let arrayElement of array) {
        sum+=arrayElement
    }
    return sum;
}
console.log(summ(Number))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function midle(array) {
    let sum =0;
    for (let arrayElement of array) {
        sum+=arrayElement
    }
    return sum/array.length;
}
console.log(midle(Number))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function show(...asd) {
let min=asd[0];
let max=asd[0];
    for (let element of asd) {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    }
    console.log(max);
    return min;
}
document.write(show(2,4,6,7,9));
// - створити функцію яка заповнює масив рандомними числами
function rundom(length) {
    let array=[];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random()*100));

    }
    return array;
}
console.log(rundom(5))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function rundomm(length,limit) {
    let array=[];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random()*limit));

    }
    return array;
}
console.log(rundomm(5,80))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse(array) {
    let arr=[];
    let index=0;
    for (let i = array.length - 1; i >= 0; i--) {
        arr[index]=array[i];
        index++
    }
    return arr
}
console.log(reverse([4,7,54,23]));

function rev(arr) {
    let newArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = arr[i];
    }

    return newArr;
}
console.log(reverse([5,6,8,21]))