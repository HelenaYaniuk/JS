// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model,vyrobnyk,year,maxspeed,volume){
    this.model=model;
    this.vyrobnyk=vyrobnyk;
    this.year=year;
    this.maxspeed=maxspeed;
    this.volume=volume;
    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    this.info =function(){
        for (const key in this) {
            if(typeof this[key] !== 'function') console.log(`${key}-${this[key]}`);
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxspeed=this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver=function (driver) {
        this.driver=driver
    };
}
let car = new Cars('Volvo cx90', 'Sweden',2014,220,2.0 );
console.log(car);
car.drive();
car.info();
car.newMaxSpeed(15);
car.changeYear(2016);
car.addDriver('Olena');
console.log(car);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carsc{
    constructor(model,vyrobnyk,year,maxspeed,volume){
        this.model = model;
        this.vyrobnyk = vyrobnyk;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume=volume;
    }
    drive(){
     console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    info(){
        for (const key in this) {
            console.log(`${key}-${this[key]}`);
        }
    };
    increaseMaxSpeed(newSpeed){
        this.maxspeed =this.maxspeed+newSpeed;
    };
    changeYear(newValue){
        this.year=newValue;
    };
    addDriver(driver){
        this.driver=driver;
    };
}
let carc = new Carsc('Toyota Hilux', 'Japan', 2017,175,2.4);
console.log(carc);
carc.drive();
carc.info();
carc.increaseMaxSpeed(23);
carc.changeYear(2019);
carc.addDriver('Olena');
console.log(carc);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor ( name, age, footsize){
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let cinderellas=[
    new Cinderella('Nina', 23,34),
    new Cinderella('Tanja', 25,35),
    new Cinderella('Ira', 22,37),
    new Cinderella('Olena', 26,38),
    new Cinderella('Katja', 21,39),
    new Cinderella('Olga', 20,33),
    new Cinderella('Liza', 27,40),
    new Cinderella('lilja', 19,32),
    new Cinderella('Nadja', 18,31),
    new Cinderella('Nina', 28,41)
];
console.log(cinderellas);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name,age,findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}
let prince = new Prince('Lukas', 27,35);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let couple =(cinderellas,prince)=>{
    for (const item of cinderellas) {
        if(item.footsize === prince.findShose){
            return `${item.name} you are my Cinderella`
        }
    }
};
console.log(couple(cinderellas,prince));
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let futurePrinces = cinderellas.find((item)=>item.footsize === prince.findShose);
console.log(futurePrinces);