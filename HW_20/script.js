//wrong names of variables 
/* 
let 123;
let Username;
const 1-name;
let 2Name!;
*/
// let прізвище;
let userFullName;
let userFirstName;
let userSecondName;
//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”
userFirstName = prompt('Введіть ваше ім’я: ');
alert(`Привіт, ${userFirstName}!`);
//Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу
let yearOfBirth = prompt('Ваш рік народження:', 2000);
const currentYear = 2023;
alert(currentYear-yearOfBirth);
//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let squareLengthSide = prompt('довжинa сторони квадратa:', '');
alert(`периметр квадрата = ${squareLengthSide*4}`);
//Запитай у користувача радіус кола і виведи площу такої окружності.
let circleRadius = prompt('радіус кола:', '');
const NUMBER_PI = 3.14;
alert(`площa кола = ${circleRadius**2*numberPi}`);
//Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let distanceBetweenCities = prompt('Введіть відстань в кілометрах між двома містами:', '');
let destinationTime = prompt('За скільки годин хочете дістатися до точки призначення?', '');
alert(`Швидкість, з якою необхідно рухатись складає: ${(distanceBetweenCities/destinationTime).toFixed(2)} км/год`);
//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі
let numberInDollars = prompt('Введіть число в доларах: ', '');
const DOLLAREURORATE = 0.9;
alert(`Ви отримаєте ${numberInDollars*dollarEuroRate} євро:`);