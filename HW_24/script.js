//Мінімум

/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/
/*
const Car = {
  maker: 'BMW',
  model: 'X5',
  year: 2010,
  average_speed: 89,
  fuel_tank: 60,
  average_fuel_consuption: 12,
  drivers: ['Ivan', ],
};

// Метод, який виводить на екран інформацію про автомобіль.
function info(obj) {
  for (let key in obj) {
    console.log(`${key}= ${obj[key]}`);
  }
};

console.log(info(Car));

// Додавання ім’я водія у список
function addDriver(name) {
  return Car.drivers.push(name);
};
console.log(addDriver('Petro'));

// Метод для перевірки наявності імені водія у списку
function checkName(name) {
  return Car.drivers.includes(name);
};

console.log(checkName('Petro'));

  // Метод для підрахунку необхідного часу та кількості палива для подолання переданої відстані
function destination (distance) {
  let time = Math.round(distance / Car.average_speed);
  let breaks = Math.floor(time / 4); // Кількість перерв
  time += breaks; // Додати час на перерви
  let fuel = (distance / 100) * Car.average_fuel_consuption;
  return { time, fuel };
};
console.log(destination(700));

console.log(info(Car));
*/

// Норма
// Створити об'єкт, що описує час (години, хвилини, секунди)
const Time = {
  hours: 3,
  minutes: 10,
  seconds: 32,
};

// виведення часу на екран
function showTime (obj) {
  let result;
  result = obj.hours + ":" + obj.minutes + ':' + obj.seconds;
  return result;
};

//Зміни часу на передану кількість секунд
function changeSeconds (obj, sec) {
  let result;
  if (sec >= 28 && sec < 60) {
    obj.seconds = (obj.seconds + sec) % 60;
    obj.minutes += 1;
  } else if (sec >= 60) {
    obj.seconds = (obj.seconds + sec) % 60;
    obj.minutes = obj.minutes + Math.trunc((obj.seconds + sec) / 60);
  } else {
    obj.seconds = obj.seconds + sec;
  };
  result = obj.hours + ":" + obj.minutes + ':' + obj.seconds;
  return result;
};

// Зміни часу на передану кількість хвилин.
function changeMinutes (obj, min) {
  let result;
  if (min >= 50 && min < 60) {
    obj.minutes = (obj.minutes + min) % 60;
    obj.hours += 1;
    result = obj.hours + ":" + obj.minutes + ':' + obj.seconds;
  } else if (min >= 60) {
    obj.minutes = (obj.minutes + min) % 60;
    obj.hours = obj.hours + Math.trunc((obj.minutes + min) / 60);
  } else {
    obj.minutes = obj.minutes + min;
  };
  result = obj.hours + ":" + obj.minutes + ':' + obj.seconds;
  return result;
};

// Зміни часу на передану кількість годин.
function changeHours(obj, hour) {
  let result;
    obj.hours += hour; 
  result = obj.hours + ":" + obj.minutes + ':' + obj.seconds;
  return result
};
