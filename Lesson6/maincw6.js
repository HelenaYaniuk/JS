// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let val=(string,smb)=>{
    let vall =[];
    if(string.includes(smb)){
        let newVal = string.split(smb);
        newVal.forEach((item)=>{
            if (item) vall.push(item);
        })
    }
    return vall.join(' ');
}
console.log (val(n3, '__'));
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let mas=(lenght)=>{
    let random =[];
    for (let i = 0; i < lenght; i++) {
        random.push(Math.floor(Math.random()*100));
    }
    return random;
}
let array =mas(8)
console.log(array);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
array.sort((a,b) => a-b);
console.log(array);
array.sort((a,b) => b-a);
console.log(array);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filter=array.filter(value=>value%2===0);
console.log(filter);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let map=array.map(value=> value.toString());
console.log(map);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums=[3,24,68,13,36,90,113]
let sortNums=(array,direction) =>{
    if(direction==='asc') return array.sort((a,b)=> a-b);
    if(direction==='desc') return array.sort((a,b)=>b-a);
};
console.log(sortNums(nums,'asc'));
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let course = coursesAndDurationArray.filter(velue=>{
    return velue.monthDuration>5;
});
console.log(course);
let sortCourse = course.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(sortCourse)