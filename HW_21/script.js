//Мінімум
/*
1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let a = 0.1;
let b = 0.2;
console.log((a + b).toFixed(1));
console.log(Math.round((a + b) * 10) / 10);
*/
/*
2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let str = "1";
let num = 2;
console.log(+str + num);
*/
/*
3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let fleshDriveSize = +prompt('Введіть обсяг флешки у Гб:', '');
alert(`На флешку поміститься: ${Math.floor(fleshDriveSize * 1024 / 820)} файл(и) розміром 820 Мб.`);
*/

// Норма
/*
1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let sumOfMoney = +prompt('Введіть суму грошей в гаманці:', '');
let priceOfOneChocolade = +prompt('Введіть ціну однієї шоколадки:', '');
alert(`Ви можете купити ${Math.floor(sumOfMoney / priceOfOneChocolade)} шоколадок. Ваша решта: ${sumOfMoney % priceOfOneChocolade}`);
*/

//2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let number = prompt('Введіть тризначне число:', '');
// Variant 1
let result = '';
let firstDigit = +number % 10; //1
result += firstDigit;
let secondDigit = Math.trunc(+number / 10) % 10;
result += secondDigit;
let lastDigit = Math.floor(+number / 100);
result += lastDigit;
console.log(result);

//Variant2 
alert(number.split("").reverse().join(""));

// Variant 3
function getReversedNum(number) {
  let result = 0; 
  while (number) {
    result = result * 10 + number % 10; 
    number = Math.floor(number / 10); 
  }
  return result;
}
console.log(getReversedNum(number));

//Variant 3
let finalResult = doingReverse(number);

function doingReverse(anynumber) {
  if (anynumber.length < 2) {
    return number;
  }
  let result = "";
  let tempNumb = +anynumber;
  for (i = 0; i < anynumber.length; i++) {
    if (tempNumb >= 10) {
      result += tempNumb % 10; // вертає останнє значення числа
      tempNumb = checkNumb(tempNumb);
    } else {
      result += tempNumb;
    }
  };
  return +result;
};

function checkNumb(num)  {
  let resultFunc;
  resultFunc = ((num - (num % 10)) / 10); // вертає число, менге на розряд
  return resultFunc;
}
console.log(finalResult);

//Максимум
/*
1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let moneyAmmount = prompt(`Введіть суму вкладу в банк:`, '');
alert(`${(moneyAmmount * 2 * (5 / 100 / 12)).toFixed(2)}`);
*/
/*
2.
2 && 0 && 3; // 0
2 || 0 || 3; // 2
2 && 0 || 3; // 3
*/
