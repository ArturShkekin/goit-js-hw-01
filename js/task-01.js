/* Напиши скрипт выбора отеля по количеству звезд
* 1-20$, 2-30$, 3-50$, 4-70$, 5-120$
*
* Если в переменной stars что-то кроме 1-5 , то выведи строку:
* "Такого количества звезд нет"
*/
/*const stars = 1;
let price;*/


/*if(stars === 1) {
    price = 20;
} else if(stars === 2) {
    price = 30;
} else if(stars === 3) {
    price = 50;
} else if(stars === 4) {
    price = 70;
} else if(stars === 5) {
    price = 120;
} else {
    console.log("Такого количества звезд нет");
}*/

/*switch(stars) {
    case 1:
    price = 20;
    console.log("Здесь можно вставлять любое количество строк");
    break;

    case 2:
    price = 30;
    break;

    case 3:
    price = 50;
    break;

    case 4:
    price = 70;
    break;

    case 5:
    price = 120;
    break;

    default:
        console.log("Такого количества звезд нет");
}

console.log(price);*/



/*SWITCH используется только при работе с равенством. при больше - меньше - нельзя*/



/* Напиши скрипт выбора отеля по количеству звезд
* 1,2-20$, 3,4-30$, 5-120$
*/

/*const stars = 1;
let price;*/

/*if(stars === 1 || stars === 2) {
    price = 20;
} else if(stars === 3 || stars === 4) {
    price = 30;
} else if(stars === 5) {
    price = 120;
}  else {
    console.log("Такого количества звезд нет");
}*/

/*switch(stars) {
    case 1:
        case 2:
    price = 20;
    console.log("Здесь можно вставлять любое количество строк");
    break;

    case 3:
        case 4:
    price = 50;
    break;

    case 5:
    price = 120;
    break;

    default:
        console.log("Такого количества звезд нет");
}

console.log(price);*/



/* Напиши скрипт выбора опции доставки товара 
* 




/* Напиши скрипт , который посчитывает сумму всех четных чисел,
* которые входят в диапазон чисел в переменных от min до max,
* Например , если min=0 и max=5, то диапазон 0-5, т внем два четных числа 2 и 4, их сумма 6.
*/
 // 1 Назначаем переменные

 /*const min = 0;
 const max = 5;
 let total = 0;*/


 // фор от min до max  с шагом 1


 /*for(let i = min; i <= max; i += 1) {
     // проверяем остаток от деления
     if(i % 2 !== 0) {
         // console.log("Не четное: ", i);
         continue;
     }
     // Пишем в сумму
     console.log("Четное: ", i);
     total += i;   
     // аналог total = total + i;
 }

 console.log("total: ", total);*/







 /* Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balanse
 * - Суииа покупки хранится в переменной payment
 *  
 * - Перед проверкой вывести сообщение:
 * "Общая стоимость заказа [число] кредитов. Проверяем количество доступных средств на счету"
 * 
 * - Если сумма не превышает баланс:
 *    - Вычесть сумму покупки из баланса
 *    - Вывести сообщение "На счету осталось [число] кредитов"
 *  - Усли сумма покупки превышает баланс:
 *    - Вывести сообщение "На счету не достаточно средств для проведения операции!"
 *  - В конце вывести сообщение "Операция завершена"
 * */
 // 1 переменные
 /*let balanse = 500;
 const payment = 2000;

 console.log(
     `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`
     );

     if(balanse >= payment) {
         console.log("ok");
         balanse -= payment;
         console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
         console.log(`На счету осталось ${balanse} кредитов`);
     } else {
        console.log("На счету не достаточно средств для проведения операции!");
     }

     console.log("Операция завершена");

 // 2 условие  сумма <= баланс

 // "Все хорошо, снимаем деньги... Спасибо за покупку!"*/







 /* Напиши скрипт подсчета суммы покупки со скидкой в зависимости
 * от потраченной суммы за все время(партнерская программа).
 * 
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 * 
 * Если потрачено от [100 до 1000) - бронзовый партнер , скидка 2%
 * Если потрачено от [1000 до 5000) - серебрянный партнер , скидка 5%
 * Если потрачено больше [5000 - золотой партнер , скидка 10%
 * Если потрачено меньше 100 - не партнер , скидка 0%
 * 
 * В результате вывести сообщение
 * "Оформляем заказ на сумму [сумма] со скидкой [скидка]"
 * */

 /*let totalSpent = 2000;
 let payment = 500;
 let discount = 0;

 // бронзовый партнер , скидка 2%
 // серебрянный партнер , скидка 5%
 // золотой партнер , скидка 10%
 // У Вас нет партнерской скидки

 if(totalSpent >= 100 && totalSpent < 1000) {
     console.log("Бронзовый партнер , скидка 2%");
     discount = 0.02;
 } else if(totalSpent >= 1000 && totalSpent < 5000) {
    console.log("Серебрянный партнер , скидка 5%");
    discount = 0.05;
 } else if(totalSpent >= 5000){
    console.log("Золотой партнер , скидка 10%");
    discount = 0.1;
 } else {
    console.log("Не партнер , скидка 0%");
 }

 payment = payment - payment * discount;

 console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

 totalSpent += payment;

 console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);*/

  



  
 /* Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}*/


/*const btnAdd = document.querySelector("button[data-add]");
const resetBtn = document.querySelector("button[data-reset]");
const valueInput = document.querySelector("input[data-value]");

const outputEl = document.querySelector(".js-output span");

console.log(outputEl);

let total = 0;

btnAdd.addEventListener("click", function () {
    console.log("click me");

    const value = Number(valueInput.value);

    console.log(value);

    total += value;

    outputEl.textContent = total;


    valueInput.value = "";
})

resetBtn.addEventListener("click", function () {
    total = 0;
    outputEl.textContent = total;
})*/

/*const countryName = "кИтАй";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;


if (countryName === null) {
    message = CANCELED_BY_USER;
  } else {
    country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
}
    switch (country) {
        case CHINA:
            price = 100;
            break;

            case AUSTRALIA:
                price = 170;
                break;

                case INDIA:
                    price = 80;
                    break;

                    case JAMAICA:
                        price = 120;
                        break;

                        default:
                            message = NO_DELIVERY;
    }
  
  if (price > 0) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
  }
  
console.log(message);*/







/* Конспект Модуль 2*/

/*const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
  console.log('Logging clients: ', clients[i]);
}

const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']*/



/*
  // Итерация по массиву
const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}

// Итерация по строке
const string = 'javascript';

for (const character of string) {
  console.log(character);
}
*/



/*const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (const client of clients) {*/
  /*
   * На каждой итерации мы будем проверять совпадает ли элемент массива с
   * именем клиента. Если совпадает то мы записываем в message сообщение
   * об успехе и делаем break чтобы не искать дальше
   */

  /*if (client === clientNameToFind) {
    message = 'Клиент с таким именем есть в базе данных!';
    break;
  }

  // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
  message = 'Клиента с таким именем нету в базе данных!';
}

console.log(message); // Клиент с таким именем есть в базе данных!


for (const client of clients) {
    if (client === clientNameToFind) {
        message = 'Клиент с таким именем есть в базе данных!';
        break;
      }
      message = 'Клиента с таким именем нету в базе данных!';
    }
    
    console.log(message);*/




    /*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
/*const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34 МАССИВ
}*/



/* МНОГОМЕРНЫЕ МАССИВЫ*/

/*const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrix[0][0]); // 1
  console.log(matrix[1][2]); // 6
  console.log(matrix[2][2]); // 9*/

  

  /*const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let total = 0;
  
  for (let i = 0; i < matrix.length; i += 1) {
    console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
  
    for (let j = 0; j < matrix[i].length; j += 1) {
      console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
      total += matrix[i][j];
    }
  }
  
  console.log(total); // 45*/





/*// Создаем пустой массив
const stack = [];

// Добавляем элементы в конец массива
stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1, 2]

stack.push(3);
console.log(stack); // [1, 2, 3]

// Удаляем элементы из конца массива
console.log(stack.pop()); //  3
console.log(stack); // [1, 2]

console.log(stack.pop()); //  2
console.log(stack); // [1]

console.log(stack.pop()); //  1
console.log(stack); // []

console.log(stack.pop()); //  undefined*/


// ФУНКЦИЯ

/*// a, b, c это параметры
const add = function(a, b, c) {
  return a + b + c;
};

// 1, 2, 3 это аргументы
const result = add(1, 2, 3);
console.log(result); // 6

// 5, 10, 15 это аргументы
console.log(add(5, 10, 15)); // 30*/


/*
const count = function(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
};

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
count(); // countFrom = 0, countTo = 10, step = 1*/






/*const sum = function() {
  let total = 0;

  for (const argument of arguments) {
    total += argument;
  }

  return total;
};

console.log(sum(1, 2, 3)); //  6
console.log(sum(1, 2, 3, 4)); //  10
console.log(sum(1, 2, 3, 4, 5)); //  15*/




/*const fn = function(...args) {
  // В переменной args будет полноценный массив
};

  ВАРИАНТ 1
const withdraw = function(amount, balance) {
  if (amount === 0) {
    console.log('Для проведения операции введите сумму больше нуля.');
  } else if (amount > balance) {
    console.log('Недостаточно средств на счету.');
  } else {
    console.log('Операция снятия средств проведена.');
  }
};

withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
withdraw(500, 300); // Недостаточно средств на счету.
withdraw(100, 300); // Операция снятия средств проведена.*/

/*ВАРИАНТ 2
const withdraw = function(amount, balance) {
  if (amount === 0) {
    console.log('Для проведения операции введите сумму больше нуля.');
    return;
  }

  if (amount > balance) {
    console.log('Недостаточно средств на счету.');
    return;
  }

  console.log('Операция снятия средств проведена.');
};

withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
withdraw(500, 300); // Недостаточно средств на счету.
withdraw(100, 300); // Операция снятия средств проведена.*/




/*
add(1, 2, 3); // 6
print('text'); // text

function add(a, b, c) {
  return a + b + c;
  
}
console.log(add(1,2,3));
function print(str) {
  console.log(str);
}*/

/* ОБЛАСТЬ ВИДИМОСТИ*/
/*const value = 50;

const add = function(num) {
  const value = 10;
  const innerValue = 5;
  
  return num + value + innerValue;
  
};

// value объявлен глобально и поэтому доступен
console.log(value); // 50

console.log(add(20)); // 35

// Ошибка, переменная innerValue не объявлена в этой области
// видимости, она доступна только внутри фукции add

console.log(innerValue);*/







// Вот поэтому мы используем let или const

// В каждой области видимости будет создана своя, независимая переменная value

// В каждой области видимости будет создана своя, независимая переменная value

// СТРЕЛОЧНАЯ ФУНКЦИЯ

// Обычное функциональное выражение
/*const add = function(a, b, c) {
  return a + b + c;
};

// Тоже самое записно как стрелочная функция
const add = (a, b, c) => a + b + c;*/


// Если параметров несколько, то они перечисляются через запятую в круглых скобках.

/*const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]*/


/*const friends = ["Mango", "Poly", "Ajax", "Gora"];
console.table(friends);
//let lastIndex = friends.length - 1;

//for(let i = 0; i < friends.length; i += 1) {
 // friends[i] += "-1";
//}

for(const friend of friends) {
  console.log(friend);
}
console.table(friends);*/




// Посчитать общую сумму в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120, 101, 156];
// 2 Сделать переменную total до цикла
// let total = 0;
// 1 Перебрать массив 
/*for(let i = 0; i < cart.length; i += 1) {
// console.log(cart[i]);
// 3 Rаждый элемент приплюсовать к total
total += cart[i];
}*/

/*for(const element of cart) {    ВАРИАНТ, если не надо изменять элементы в МАССИВЕ
   total += element;
}*/
// console.log("Total :", total);

// Добавить 20% налога (что-то)

/*for(let i = 0; i < cart.length; i += 1){
  // cart[i] *= 1.2;
  cart[i] = Math.round(cart[i] * 1.2);
}

console.log(cart);*/





// Напиши скрипт, который подсчитывает сумму всех четных чисел массива

/*const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;*/


// 1 Создать переменную total

// 2 перебрать массив ,  есть 3 варианта.
/*for(let i = 0; i < numbers.length; i += 1) {
  const number = numbers[i];
  console.log(number);
  // 3 на каждой итерации проверить элемент на четность
  if(number % 2 === 0) {
    console.log("Четное!!!!");
    // 4 если четное, то плюсуем к total
    total += number;
  }
}*/

/*for(const number of numbers){
  console.log(number);
  if(number % 2 === 0) {
    console.log("Четное!!!!");
    // 4 если четное, то плюсуем к total
    total += number;
  }
}*/
// Логика от обраного (вариант выполнения)
/*for(const number of numbers){
  if(number % 2 !== 0) {
    console.log("Эту итерацию нужно пропустить!!!!", number);
    continue;
    // 4 если четное, то плюсуем к total
  }
  console.log(`${number} - четное!!!!`);
  total += number;
}

console.log("Total :", total);*/


// Напиши скрипт поиска логина
// Если логина нет, напиши сообщение "Пользователь [логин] не найден"
// Если нашли логин, напиши сообщение "Пользователь [логин]  найден"
// 
// Сначала через FOR
// Потом через FOR ...OF
// Логика break
// Метод includes() с тернарным оператором

// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind}  не найден`;

/*for(let i = 0; i < logins.length; i += 1 ) {
  const login = logins[i];
  console.log("Login :", login);
  console.log(`${login} === ${loginToFind} :`, login === loginToFind);
  if(login === loginToFind) {
    message = `Пользователь ${loginToFind}  найден`;
    break;
  }
}
console.log(message);
*/

/*for(const login of logins) {
  console.log("Login :", login);
  console.log(`${login} === ${loginToFind} :`, login === loginToFind);
  if(login === loginToFind) {
    message = `Пользователь ${loginToFind}  найден`;
    break;
  }
}

console.log(message);*/

// const a = 15 > 10 ? "ага" : "нет";

/*const message = logins.includes(loginToFind) ?
  `Пользователь ${loginToFind} найден` :
   `Пользователь ${loginToFind}  не найден`;

console.log(message);*/






//  Напиши скрипт поиска самого маленького числа

/*let smallestNumber = numbers[0];


for(const number of numbers) {
  console.log(number);
  if(number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log("smallestNumber :",smallestNumber);*/


//  Напиши скрипт поиска самого большого числа


/*let biggestNumber = numbers[0];


for(const number of numbers) {
  console.log(number);
  if(number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log("biggestNumber :",biggestNumber);*/





// Напиши скрипт, который объединяет все элементы массивы в одно строковое значение
/* Элементов может быть произвольное число
* Пусть элементы в строке будут разделены запятой
*  - Сначала через FOR
*  - Потом через join()
*/

/*  const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
console.log(friends);

for(const friend of friends) {
  string += friend + ",";

}
string = string.slice(0, string.length-1);
console.log(string);*/


// const string = friends.join(",");

// console.log(string);




/*Напиши скрипт замены регистра в строке на противоположный

const string = "ЖоПа";
const letters = string.split("");
let invertedString = "";

console.log(letters);

for(const letter of letters) {
  console.log(letter);

  if(letter === letter.toLowerCase()) {
    invertedString += letter.toUpperCase();
  } else {
    invertedString += letter.toLowerCase();
  }
  const isEquel = letter === letter.toLowerCase();
  invertedString += isEquel ? letter.toUpperCase() : letter.toLowerCase();

}

console.log("invertedString :", invertedString);*/






/* Делаем slug в URL из названия статьи (например на dev.to)
* Заголовок статьи состоит толкьо из букв или пробелов
*
* - Нормализируем строку
* - Разбиваем по слогам
* - Сшиваем в строку  с разделителем 
*/

//  Должно получиться top-10-benefits-of-react-framework

/*const title = "Top 10 benefits of React framework";
//  Вариант обычный
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);
const words = normalizedTitle.split(" ");
console.log(words);
const slug = words.join("-");
// console.log(slug);
//  Вариант по короче , посовременнее
const slug1 = title.toLowerCase().split(" ").join("-");

console.log(slug1);*/


/*задача 2

const getItemsStrings = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
let result = " ";

for(const getItemsString of getItemsStrings){
  result += getItemsString + ",";
  console.log(result);
}


for(let i = 0; i < getItemsStrings.length; i += 1) {
  result = `${i + 1} - ${getItemsStrings[i]} \n`;
  console.log(result);
}*/



/* создание функции и return
const add = function (x, y ) {
  console.log(x);
  console.log(y);
  //const result = x + y;
  //console.log("x + y:", result);
  console.log("Выполняется функция add");
  return x / y;

};

const r1 = add(2, 3);
console.log("r1: ", r1);
const r2 = add(20, 30);
console.log("r2: ", r2);

add(42, 53);*/




/* Основы функции
const fn = function (value) {
  
  console.log(1);

  console.log(2);

  if(value < 50) {
    return "Меньше чем 50";
  } 
    return "Больше чем 50";
  

 
}

console.log("Результат функции: ", fn(10));

console.log("Результат функции: ", fn(1000));*/






/* Стек вызова
* Stack trace  и поиск ошибок
*

const fnA = function () {
  console.log("Выполняется функция А");
  fnB ( );
}

const fnB = function () {
  console.log("Выполняется функция В");
  fnC ( );
}

const fnC = function () {
  console.log("Выполняется функция С");
  console.log(value);
}
// console.log("Лог перед вызовом функция А");
fnA ( );
// console.log("Лог после вызова функция А");
// console.log("Лог перед вызовом функция В");
// fnB ( );
// console.log("Лог после вызова функция В");
// console.log("Лог перед вызовом функция С");
// fnC ( );
// console.log("Лог после вызова функция С");*/






/* Напиши функцию calculateTotalPrice(items)
* которая принимает массив цен (чисел) и возвращает их сумму
*/

/*const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for(const value of cart){
  total += value;
}

console.log("Total :", total);*/

/*Вторая часть

const calculateTotalPrice = function (items) {
  // console.log(items);

  let total = 0;

for (const item of items) {
  total += item;
}

return total;
}

const r1 = calculateTotalPrice([1,2,3]);

console.log(`Общая сумма покупок ${r1}`);
console.log(calculateTotalPrice([5,10,15,20]));
console.log(calculateTotalPrice([100,200,300]));*/






// Не все функции что-то возвращают
/* Напиши функцию LogItems(items)  для перебора и логирования массива
*/
/*const logItems = function (items) {
  for (const item of items) {
    console.log(item)
  }
};

 logItems (["Mango", "Kiwi", "Poly", "Ajax"]);
 logItems ([1, 2, 3, 4, 5]);
 logItems (["Клавиатура", "Наушники", "Часы"]);*/



 /* Напиши функцию findLogin(allLogins, login) для поиска логина
 * - если логина нет, вывести сообщение "Пользователь [login] не найден."
 * - если нашли логин, вывести сообщение "Пользователь [login] найден."
 */

 const logins = ["qwerty", "asdfgh", "zxcvbn", "poiuyt"];
  // const loginToFind = "poiuyt";

  // const message = logins.includes(loginToFind) 
//  ? `Пользователь ${loginToFind} найден.` 
//  : `Пользователь ${loginToFind} не найден.`;

  // console.log(message);

/*const findLogin = function (allLogins, loginToFind) {
    // console.log(allLogins);
    // console.log(loginToFind);

    let message = `Пользователь ${loginToFind} не найден.`;

    for (const login of allLogins) {
      if (login === loginToFind) {
        message = `Пользователь ${loginToFind}  найден.`;
      
      }
    }
    return message;
 };*/ 

//  Далее второй вариант

 /*const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Пользователь ${loginToFind}  найден.`;
    }
  }
  return `Пользователь ${loginToFind} не найден.`;
};*/

/* Третий вариант

const findLogin = function (allLogins, loginToFind) {
  return logins.includes(loginToFind) 
  ? `Пользователь ${loginToFind} найден.` 
  : `Пользователь ${loginToFind} не найден.`;
  }



  console.log(findLogin(logins, "qwerty44"));
  console.log(findLogin(logins, "asdfgh"));
  console.log(findLogin(logins, "zxcvbn55")); 
  console.log(findLogin(logins, "poiuyt"));
*/
