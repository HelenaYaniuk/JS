// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User( id, name, surname, email, phone ){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let user= [
    new User(1,'Ira','Popuk','ira@gmail.com',380983334455),
    new User(2,'Nina', 'Yaniuk', 'nina@gmail.com', 3809785552211),
    new User(3, 'Ivan', 'Yaniuk','ivan@gmail.com',380983337766),
    new User(4,'Vika','Yaniuk','vika@gmail.com',380983334455),
    new User(5,'Nadija','Yaniuk','nadija@gmail.com',380983334455),
    new User(6,'Oleksandr','Yaniuk','oleksandr@gmail.com',380983334455),
    new User(7,'Olena','Yaniuk','olena@gmail.com',380983334455),
    new User(8,'Sasha','Yaniuk','sasha@gmail.com',380983334455),
    new User(9,'Lilja','Yaniuk','lilja@gmail.com',380983334455),
    new User(10,'Marija','Yaniuk','Marija@gmail.com',380983334455),
    ];
console.log(user);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = user.filter(item=>item.id%2===0);
console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
user.sort((a,b)=>a.id-b.id);
console.log(user);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
   constructor(id,name,surname,email,phone,order){
       this.id =id;
       this.name =name;
       this.surname =surname;
       this.email =email;
       this.phone =phone;
       this.order =order;
   }
}
let client =[
    new Client(3, 'Ira', 'Pip', 'ira@gmail.com',380956661122,['bag','hat','jacket']),
    new Client(5, 'Katja', 'Pop', 'katja@gmail.com',380956661122,['bag','hat',]),
    new Client(1, 'Oleg', 'Petrenko', 'oleg@gmail.com',380956661122,['bag','hat','jacket', 'shoos']),
    new Client(9, 'Tanja', 'Kotyk', 'tanja@gmail.com',380956661122,['hat']),
    new Client(2, 'Ivan', 'Sun', 'ivan@gmail.com',380956661122,['hat','jacket']),
    new Client(4, 'Taras', 'Yaniyk', 'taras@gmail.com',380956661122,['bag','hat','jacket', 'book', 'pan']),
    new Client(8, 'Luka', 'Pip', 'ira@gmail.com',380956661122,['bag','jacket']),
    new Client(6, 'Anna', 'Holuk', 'ira@gmail.com',380956661122,['bag','hat','jacket','glasses', 'book', 'blaus']),
    new Client(10, 'Ira', 'Pip', 'ira@gmail.com',380956661122,['bag','hat','jacket','trousers']),
    new Client(7, 'Tonja', 'Pip', 'ira@gmail.com',380956661122,['bag','hat','jacket','gloves'])
];
console.log(client);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
client.sort((a,b)=>a.order.length-b.order.length);
console.log(client);

