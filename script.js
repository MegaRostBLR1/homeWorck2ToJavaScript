// Задание 1
let name = prompt('Ваше имя?');
let age = prompt('Ваш возраст?');
let city = prompt('Город проживания?');
let phone = prompt('Ваш номер телефона?');
let email = prompt('Ваш E-mail?');
let company = prompt('Где вы работаете?');

alert(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные ${phone}, ${email}.`);


// Задание 2
let birthYear = new Date().getFullYear() - age;
alert(`${name} родился в ${birthYear}`);


// Задание 3
let str = '159158';

let firstFree = str[0] + str[1] + str[2];
let secondFree = str[3] + str[4] + str[5];

if (firstFree === secondFree) {
    console.log('Да, суммы равны');
} else {
    console.log('Нет, суммы не равны');
}


// Задание 4
let num = +prompt('Введите число');

if (num > 0) {
    alert('Значение больше нуля');
} else if (num < 0) {
    alert('Значение меньше нуля');
} else if (num === 0) {
    alert('Значение равно нулю');
} else {
    alert('Введены не корректные данные');
}


// Задание 5
let a = 10;
let b = 2;
let action = prompt('Введите математическую операцию (сложение, вычитание, деление, умножение').toLowerCase();

switch (action) {
    case 'сложение':
        alert(`Сумма чисел ${sum = a + b}`);
        break;
    case 'Вычитание':
        alert(`Разность чисел ${a - b}`);
        break;
    case 'умножение':
        alert(`Произведение чисел ${a * b}`);
        break;
    case 'деление':
        alert(`Разность чисел ${a / b}`);
        break;
    default:
        alert('Введите корректную операцию');
        break;
}

if (sum > 1) {
    alert(`Сумма больше 1, поэтому возводим ее в квадрат. Сумма в квадрате равна ${sum ** 2}`);
}


// Задание 6
if (a > 2 && a < 11 || b >= 6 && b <14) {
    alert ('Верно');
} else {
    alert ('He верно');
}


// Задание 7
let n = +prompt('Введите число от 0 до 59');

if (n >= 0 && n <= 14) {
    alert ('Первая четверть часа');
} else if (n > 14 && n <= 29) {
    alert ('Вторая четверть часа');
} else if (n > 29 && n <= 44) {
    alert ('Третья четверть часа');
} else if (n > 44 && n <= 59) {
    alert ('Четвертая четверть часа');
} else {
    alert ('Введены не корректные данные');
}


// Задание 8
let day = +prompt('Введите число от 0 до 365 и мы поговорим о нем с точки зрения времени');

if (day > 0 && day <= 10) {
    alert ('Первая декада месяца');
} else if (day > 10 && day <= 20) {
    alert ('Вторая декада месяца');
} else if (day > 20 && day <= 31) {
    alert ('Третья декада месяца');
} else {
    alert ('В месяце столько дней не бывает, но посмотрим что будет дальше.');
}


// Задание 9
let daysInYear = 365;
let daysInMonth = 31;
let daysInWeek = 7;
let hoursInDay = 24;
let minutesInHour = 60;
let secondsInMinute = 60;

let years = day / daysInYear;
let months = day / daysInMonth;
let weeks = day / daysInWeek;
let hours = day * hoursInDay;
let minutes = hours * minutesInHour;
let seconds = minutes * secondsInMinute;

if (years >= 1) {
    alert(`Годы: ${years.toFixed(2)}`);
} else {
    alert('Меньше года');
}

if (months >= 1) {
    alert(`Месяцы: ${months.toFixed(2)}`);
} else {
    alert('Меньше месяца');
}

if (weeks >= 1) {
    alert(`Недели: ${weeks.toFixed(2)}`);
} else {
    alert('Меньше недели');
}

alert(`Часы: ${hours}`);
alert(`Минуты: ${minutes}`);
alert(`Секунды: ${seconds}`);


// Задание 10
if (day > 0 && day <= 365) {
    alert('Добавим еще конкретики');
} else {
    console.log('Давайте все начнем сначала и все же введем число от 1 до 365');
}

if (day <= 31) {
    alert('Этот день находится в январе');
} else if (day <= 59) {
    alert('Этот день находится в феврале');
} else if (day <= 90) {
    alert('Этот день находится в марте');
} else if (day <= 120) {
    alert('Этот день находится в апреле');
} else if (day <= 151) {
    alert('Этот день находится в мае');
} else if (day <= 181) {
    alert('Этот день находится в июне');
} else if (day <= 212) {
    alert('Этот день находится в июле');
} else if (day <= 243) {
    alert('Этот день находится в августе');
} else if (day <= 273) {
    alert('Этот день находится в сентябре');
} else if (day <= 304) {
    alert('Этот день находится в октябре');
} else if (day <= 334) {
    alert('Этот день находится в ноябре');
} else {
    alert('Этот день находится в декабре');
}

switch (day) {
    case day >= 1 && day <= 59:
    case day >= 338 && day <= 365:
        alert('Это будет зима');
        break;
    case day >= 60 && day <= 152:
        alert('Это будет весна');
        break;
    case day >= 153 && day <= 245:
        alert('Это будет лето');
        break;
    default:
        alert('Это будет осень');
        break;
}