// Мінімум
// 1. Напиши всі можливі варіанти створення функцій.
// let sayHi = function() {
//   alert( "Привіт" );
// };
// function showMessage() {
//   alert('Всім привіт!');
// }
// (a, b) => a + b + 100;

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function fexNumb(a, b) {
//   a = b - 3;
// };
// console.log(fexNumb.length);

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
/*
function numbers(num1, num2) {
  let result = 0;
  if (num1 < num2) {
    result = -1;
  } else if (num1 > num2) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
}
console.log(numbers(-17,17));
*/

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
/*
function fuctorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    if (num > 0) {
      result *= i;
    } 
  }
  return result;
}
console.log(fuctorial(4));
*/
// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
/*
function addNumbers(num1, num2, num3) {
  let result = 0;
  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    result = num1 * 100 + num2 * 10 + num3;
  } else {
    result = alert('Enter number from 0');
  }
  return result;
}
console.log(addNumbers(1,0,3));
*/

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
/*
function rectangleSquare(long, width) {
  let result = 0;
  if (long > 0 && width > 0) {
    result = long * width;
  } else if (long > 0 || width > 0) {
    result = long * long;
  }
  return result;
}
console.log(rectangleSquare(7,5));
*/
// Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників, крім самого числа.
/*
function perfectNumber(num) {
  let result = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result += i;
    }
  }
  if (num === result) {
    alert(num + ' is a perfect number!');
  } else {
    alert('This number is not a perfect number!');
  }
}
console.log(perfectNumber(67));
*/

// 2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
// і виводить тільки ті числа з діапазону, які є досконалими. 

function checkNumbers(num1, num2) {
  let finalCheck = ' ';
  for (let num = num1; num < num2; num++) {
    if (perfectNumber(num) == true) {
      finalCheck += num + ' ';
    }  
  }
  return finalCheck;
}

function perfectNumber(num) {
  let result = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result += i;
    }
  }
  if (num === result) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(5, 10000));
