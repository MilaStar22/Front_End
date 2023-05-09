// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// let age = prompt('Enter your age', '');
// if (age >= 0 && age <=11) {
//   alert('You are a child')
// } else if (age >= 12 && age <= 17) {
//   alert('You are a teenager')
// } else if (age >= 18 && age<= 59) {
//   alert('You are an adult')
// } else if (age >= 60) {
//   alert('You are pensioner')
// } else {
//   alert('You enter a wrong number. Try again')
// };

//2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// let number = prompt('Enter number between 0-9', '');

// switch (number) {
//   case '0':
//     alert(')');
//     break;
//   case '1':
//     alert('!');
//     break;  
//   case '2':
//     alert('@');
//     break;
//   case '3':
//     alert('#');
//     break;
//   case '4':
//     alert('$');
//     break;
//   case '5':
//     alert('%');
//     break;  
//   case '6':
//     alert('^');
//     break;
//   case '7':
//     alert('&');
//     break;
//   case '8':
//     alert('*');
//     break;
//   case '9':
//     alert('(');
//     break;
//   default:
//     alert('Enter number between 0-9 again');
//     break;
// }
//3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
/* let startOfrange = +prompt('Enter the start number of range:', '');
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

/*4. Запитай у користувача 2 числа і знайди найбільший спільний дільник. 
Щоб знайти НСД двох або кількох чисел, необхідно:
- розкласти дані числа на прості множники;
- скласти добуток усіх спільних простих множників;
- обчислити складений добуток.
*/
let number_1 = prompt('Enter two numbers:', '');
let number_2 = prompt('Enter two numbers:', '');

// function severalNumber(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// let severalNumber1 = severalNumber(number_1);
// let severalNumber2 = severalNumber(number_2);
// let together = severalNumber1.concat(severalNumber2);

// console.log(severalNumber1);
// console.log(severalNumber2);
// console.log(together);

// const nsd = (n, m) => {
//   if (m !== 0) {
//     const k = n % m;
//     return nsd(m, k);
//   }
//   return n;
// };
// alert('НCД чисел ' + number_1 + ' i ' + number_2 + ' буде: ' + nsd(number_1, number_2));


function NOD(A) {   
    let n = A.length;
    let x = Math.abs(A[0]);
    for (let i = 1; i < n; i++) {
      let y = Math.abs(A[i]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
    }
    return x;
  }
console.log(NOD([45,65]));

//5. Запитай у користувача число і виведи всі дільники цього числа.
/* let number_1 = prompt('Enter numbers:', '');

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
// let palindromeNumber = prompt('Enter a number with a length of 5 characters', 12345);
// palindromeNumber = palindromeNumber.split();
// let reverse = palindromeNumber.reverse();

// let result = (palindromeNumber === palindromeNumber.reverse()) ? palindromeNumber : 'Your number is not palindrom';
// console.log(typeof reverse);
// console.log(typeof palindromeNumber);

// function palindrome(str) {
//   var re = `/[^A-Za-z0-9]/g`;
//   str = str.toLowerCase().replace(re, '');
//   var len = str.length;
//   for (var i = 0; i < len/2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//         return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("Anna"));

/* 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.

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
// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// let user = {};
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//     return false;
// }
