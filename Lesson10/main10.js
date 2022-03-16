// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.getElementById('button').onclick = function () {
    document.getElementById('text').hidden = true;
};
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('buttonAge').onclick = function () {
  let age =   document.getElementById('age').value;
    if (!age) {
        alert('Are you enter your age');
    } else if (+age < 18) {
        alert('Sorry, you are to young');
    } else {
        alert('You are welcome');
    }
}
    // - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.querySelector('.menu');
let title = menu.querySelector('.title');

title.onclick = function () {
    menu.classList.toggle('hidden');
};
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'Monday', body: 'Learn to shoot'},
    {title: 'Tuesday', body: 'To do HW and CW'},
    {title: 'Wednesday', body: 'To bay some weapon'},
    {title: 'Thursday', body: 'To cook something special'},
    {title: 'Friday', body: 'Celebration the victory'},
];
let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    h3.innerText = item.title;
    p.innerHTML = item.body;
    btn.innerHTML = 'Close me'

    btn.onclick = () => {
        p.classList.add('pHidden');
    }
    div.append(h3, p, btn);
    divFather.append(div);
}
document.body.appendChild(divFather)