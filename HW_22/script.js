// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
/*
let age = prompt('Enter your age', '');
if (age >= 0 && age <=11) {
  alert('You are a child')
} else if (age >= 12 && age <= 17) {
  alert('You are a teenager')
} else if (age >= 18 && age<= 59) {
  alert('You are an adult')
} else if (age >= 60) {
  alert('You are pensioner')
} else {
  alert('You enter a wrong number. Try again')
};
*/

//2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// let number = prompt('Enter number between 0-9', '');
/*
switch (number) {
  case '0':
    alert(')');
    break;
  case '1':
    alert('!');
    break;  
  case '2':
    alert('@');
    break;
  case '3':
    alert('#');
    break;
  case '4':
    alert('$');
    break;
  case '5':
    alert('%');
    break;  
  case '6':
    alert('^');
    break;
  case '7':
    alert('&');
    break;
  case '8':
    alert('*');
    break;
  case '9':
    alert('(');
    break;
  default:
    alert('Enter number between 0-9 again');
    break;
}
*/

//3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
/* 
let startOfrange = +prompt('Enter the start number of range:', '');
let endOfrange = +prompt('Enter the end number of range:', '');
let resultOfAddingNumbers = result(startOfrange, endOfrange);

function result(number1, number2) {
  let result = 0;
  for (i = number1; i <= number2; i++) {
  result += i;
  }
  return result;
}
console.log(resultOfAddingNumbers);
*/

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник. 
/*
let number_1 = +prompt('Enter first number:', '');
let number_2 = +prompt('Enter second number:', '');

compare();

let result_1 = severalNumber(number_1);
let result_2 = severalNumber(number_2);

// шукає всі дільники числа
function severalNumber(num) {
  let result = new Array;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
};

// робимо так, щоб першим у порівнянні було менше число
function compare() {
  let temp;
  if (number_1 > number_2) {
    temp = number_1;
    number_1 = number_2;
    number_2 = temp;
  }
};

// функція для знаходження найбільшого спільного дільника
function findMax(arr1, arr2) {
  let set = new Set(arr2);
  if (arr1[arr1.length-1] <= arr2[arr2.length-1]) {
    for ( let i = arr1.length-1; i >= 0; i-- ) {
      if (set.has(arr1[i])) {
        return arr1[i];
      }
    }
  }
  return 1;
};

// ще один варіант функції для знаходження найбільшого спільного дільника
/*
function findMax(arr1, arr2) {
  if (arr1[arr1.length-1] <= arr2[arr2.length-1]) {
    for ( let i = arr1.length-1; i >= 0; i-- ) {
      for ( let j = 0; j <= arr2.length-1; j++) {
        if (arr1[i] == arr2[j]) {
          return arr1[i];
        }
      }
    }
  } else {
    for ( let i = arr2.length-1; i >= 0; i-- ) {
      for ( let j = 0; j <= arr1.length-1; j++) {
        if (arr2[i] == arr1[j]) {
          return arr2[i];
        }
      }
    }
  }
  return 1;
};
*/

// console.log(findMax(result_1, result_2));

//5. Запитай у користувача число і виведи всі дільники цього числа.
/*let number_1 = prompt('Enter number:', '');

function severalNumber(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      result += i + ' ';
    }
  }
  return result;
}
alert(`${severalNumber(number_1)}`);
*/

//Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
/*
let palindromeNumber = prompt('Enter a number with a length of 5 characters',);

// variant 1 (from string to array and vice verca)
let result = palindromeNumber.split('').reverse().join('');
alert (`${result === palindromeNumber ? 'Your number is a palindrom' : 'Your number is not palindrom'}`);

// variant 2 (use a loop)
let result_1 = '';
for ( let i = palindromeNumber.length - 1; i >= 0; i--) {
  result_1 += palindromeNumber[i];
};
alert (`${result_1 === palindromeNumber ? 'Your number is a palindrom' : 'Your number is not palindrom'}`);

// variant 3 (recursion function)
let result_2 = palindromString(palindromeNumber);

function palindromString(str) {
  return (str === '') ? '' : palindromString(str.substr(1)) + str.charAt(0);
}
alert (`${result_2 === palindromeNumber ? 'Your number is a palindrom' : 'Your number is not palindrom'}`);
*/

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

/*
let amountOfPurchase = +prompt('Enter amount of purchase:', '');
let result = 0;
if (amountOfPurchase >= 200 || amountOfPurchase < 300) {
  result = amountOfPurchase * 0.03 + amountOfPurchase;
} else if (amountOfPurchase >= 300 || amountOfPurchase < 500){
  result = amountOfPurchase * 0.05 + amountOfPurchase;
} else if (amountOfPurchase > 500) {
  result = amountOfPurchase * 0.07 + amountOfPurchase;
} else {
  alert('Your amount of purchase shoud be more then 200:');
}
console.log(result);
*/

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
/*
let resultPositive = 0;
let resultNegative = 0;
let resultZero = 0;

for (let i = 0; i < 10; i++) {
  let numbers = +prompt(`Enter the number, ''`);
  if (numbers > 0) {
    resultPositive += 1;
  } else if (numbers < 0) {
    resultNegative += 1;
  } else {
    resultZero += 1;
  }
}
console.log(resultPositive);
console.log(resultNegative);
console.log(resultZero);
*/

// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
/*
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < week.length; i++) {
  if ((confirm(`${week[i] + '. Хочеш побачити наступний день?'}`)) == false) {
    break;
  }
};
*/
