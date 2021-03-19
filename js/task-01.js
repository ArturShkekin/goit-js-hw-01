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

 //const logins = ["qwerty", "asdfgh", "zxcvbn", "poiuyt"];
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

//const name = prompt("Какое официальное название Javascript?");
//const resault = name === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!";
//alert(name === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!");

/*const name = prompt("Какое официальное название Javascript?");
let resault;
if(name === "ECMAScript") {
  resault = "Верно!";
}else  if (name === null) {
  resault = "Не ленись";
}
else {
  resault = "Не знаете? ECMAScript!";
}
console.log(resault);*/


/*
const year = prompt("Введите год своего рождения");
const age = 2021 - parseInt(year);

let word;
const lastNumber = age % 10;
const twoLastNumber = age % 100;
if (twoLastNumber < 20 || twoLastNumber > 10) {
  word = word = "лет";
} else
if (lastNumber === 0 || lastNumber >= 5) {
  word = "лет";
} else if (lastNumber === 1) {
  word = "год";
} else  {
  word = "года";
}
console.log(`Вам ${age} ${word}`);*/


/*let i = 1;
while(i <=10) {
  console.log(i);
  i++
}*/

/*function makeMessage (name, price) {
  
   const message = `Вы выбрали ${name}, цена заштуку ${price} кредитов.`;
   console.log(message);
  
  return message;
};

makeMessage ("Радар", 6150);
  
makeMessage ("Сканер", 3500);
 
makeMessage ("Реактор", 8000);
 
makeMessage ("Двигатель", 4070);*/
 
/*function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity*pricePerItem;
  
  // Пиши код выше этой строки
  return totalPrice;
};
calculateTotalPrice (5, 100);
calculateTotalPrice (8, 60);
calculateTotalPrice (3, 400);
calculateTotalPrice (1, 3500);
calculateTotalPrice (12, 70);*/


/*function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код ниже этой строки
  let totalPrice = orderedQuantity*pricePerDroid+deliveryFee;
  const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

  // Пиши код выше этой строки
  return message;
}
makeOrderMessage(2,100,50);
makeOrderMessage(4,300,100);
makeOrderMessage(10,70,20);*/



/*function isAdult(age) {
  // Пиши код ниже этой строки
  const passed = age >= 18;
 console.log(passed);
  // Пиши код выше этой строки
  return passed;
}
isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);*/

/*function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = password === 'jqueryismyjam';
  console.log(isMatch);
  // Пиши код выше этой строки
  return isMatch;
}
isValidPassword('mangodab3st'); 
isValidPassword('kiwirul3z');
isValidPassword('jqueryismyjam');*/

/*function checkAge(age) {
  let message;

  if (age >= 18) { // Дополни эту строку
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }
  console.log(message);
  return message;
}

checkAge(20);
checkAge(10);*/

/*function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  const order = ordered < available ? message = 'Заказ оформлен, с вами свяжется менеджер' : message = 'На складе недостаточно товаров!';
  console.log(order);
  // Пиши код выше этой строки
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);*/

/*function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
const totalPrice = pricePerDroid*orderedQuantity;
if (totalPrice < customerCredits) {
  message = `Вы купили ${orderedQuantity} дроидов, 
на счету осталось ${customerCredits-totalPrice} кредитов`;
} else if (totalPrice === customerCredits) {
  message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits-totalPrice} кредитов`;
} else {
  message = 'Недостаточно средств на счету!';
}
console.log(message);
  // Пиши код выше этой строки
  return message;
}
makeTransaction(3000,5,23000);
makeTransaction(1000,3,15000);
makeTransaction(5000,10,8000);
makeTransaction(2000,8,10000);
makeTransaction(500,10,5000);*/

/*function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password === 'jqueryismyjam') { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
  console.log(message);
  return message;
}
checkPassword('mangohackzor');
checkPassword(null);
checkPassword('polyhax');
checkPassword('jqueryismyjam');*/


/*function isNumberInRange(start, end, number) {
  const isInRange = start <= number && number <= end; // дополни эту строку
console.log(isInRange);
  return isInRange;
}
isNumberInRange(10,30,17);
isNumberInRange(10,30,5);
isNumberInRange(20,50,24);
isNumberInRange(20,50,76);*/

/*function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку
console.log(canAccessContent);
  return canAccessContent;
}
checkIfCanAccessContent('pro');
checkIfCanAccessContent('starter');
checkIfCanAccessContent('vip');
checkIfCanAccessContent('free');*/

/*function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку
console.log(isNotInRange);
  return isNotInRange;
}
isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);*/


/*function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
if (totalSpent >= 50000) {
  discount = GOLD_DISCOUNT;
} else if (totalSpent < 50000 && totalSpent >= 20000) {
  discount = SILVER_DISCOUNT;
} else if (totalSpent < 20000 && totalSpent >= 5000) {
  discount = BRONZE_DISCOUNT;
} else {
  discount = BASE_DISCOUNT;
}
console.log(discount);
  // Пиши код выше этой строки
  return discount;
}
getDiscount(137000); 
getDiscount(46900); 
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);*/


/*function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  message =  available <= ordered? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
  console.log(message);
  // Пиши код выше этой строки
  
  return message;
}
checkStorage(100,50);
checkStorage(100,130);
checkStorage(200,20);
checkStorage(200,150);
checkStorage(150,180);*/



/*function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case 'starter': // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }
 
  // Пиши код выше этой строки
  return price;
}*/

/*function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Отменено пользователем!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещён, неверный пароль!';
  }

  return message;
}*/

/*function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  switch (password) {
      case null:
        message = 'Отменено пользователем!';
        break;
        case 'jqueryismyjam':
          message = 'Добро пожаловать!';
          break;
      default:
        message = 'Доступ запрещен, неверный пароль!';
  }
  return message;
}*/


/*function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
  switсh (country) {

    case 'Австралия':
    message = 'Доставка в Австралия будет стоить 170 кредитов';
    break;

    case 'Китай':
    message = 'Доставка в Австралия будет стоить 100 кредитов';
    break;

    case 'Чили':
    message = 'Доставка в Чили будет стоить 250 кредитов';
    break;
    case 'Ямайка':
    message = 'Доставка в Ямайка будет стоить 120 кредитов';
    break;
  }
  // Пиши код выше этой строки
  return message;
}*/


/*function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку
  console.log(message);
  return message;
}
getNameLength('Poly');
getNameLength('Harambe');
getNameLength('Billy');
getNameLength('Joe');*/

/*const productName = 'Ремонтный дроид';
console.log(productName[0]); // 'P'
console.log(productName[5]); // 'т'
console.log(productName[14]); // 'д'
console.log(productName[productName.length - 1]); // 'д'*/


/*const courseTopic = 'JavaSript для начинающих';
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length-1];*/


/*function getSubstring(string, length) {
  const substring = "Привет мир".slice(string, length); // Дополни эту строку
  
  console.log(substring);
  return substring;
}
getSubstring('Привет мир', 3);
getSubstring('Привет мир', 6);
getSubstring('Привет мир', 8);
getSubstring('Привет мир', 10);
getSubstring('Привет мир', 0);*/



/*function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (message.length <= maxLength) {
  result = message;
} else {
  result = message.slice(0, maxLength) + "...";
}
console.log(result);
// Пиши код выше этой строки
  return result;
}
formatMessage('Curabitur ligula sapien', 16);
formatMessage('Curabitur ligula sapien', 23);
formatMessage('Vestibulum facilisis purus nec', 20);
formatMessage('Vestibulum facilisis purus nec', 30);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);*/

/*function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  console.log(normalizedInput);
  return normalizedInput;
}
normalizeInput('Привет мир');
normalizeInput('Это НЕ СпаМ');
normalizeInput('Большие СКИДКИ');*/


/*function checkForName(fullName, name) {
  const result = fullName.includes(name) && name === name[0].toUpperCase() + name.slice(1).toLowerCase(); // Дополни эту строку
  console.log(result);
   return result;
 }
 checkForName('Егор Колбасов', 'Егор');
 checkForName('Егор Колбасов', 'егор');
 checkForName('Егор Колбасов', 'егОр');
 checkForName('Егор Колбасов', 'Женя');
 checkForName('Вадим Некрасов', 'Вадим');
 checkForName('Вадим Некрасов', 'вадим');
 checkForName('Вадим Некрасов', 'Дима');*/




 /*function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 result = message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam") ;
 console.log(result);
  // Пиши код выше этой строки
  return result;
}
checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');
checkForSpam('Trust me, this is not a spam message');
checkForSpam('Get rid of sPaM emails. Our book in on sale!');
checkForSpam('[SPAM] How to earn fast money?');*/




/*const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']*/





/*const matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9],];

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




/*let a = 5;
// Присвоение по значению, в памяти будет создана еще
// одна ячейка в которую будет скопировано значение 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Изменим значение a
a = 10;
console.log(a); // 10
// Значение b не изменилось так как это отдельная копия
console.log(b); // 5*/



/*const a = ['Mango'];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ['Mango']
console.log(b); // ['Mango']

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push('Poly');
console.log(a); // ['Mango', 'Poly']

// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одно и то же место в памяти
console.log(b); // ['Mango', 'Poly']

// Результат повторяется
b.push('Ajax');
console.log(a); // ['Mango', 'Poly', 'Ajax']
console.log(b); // ['Mango', 'Poly', 'Ajax']*/


/*1. Методы split() и join()
// split
const message = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split('')); // [много букв :)]

// join
const clients = ['Mango', 'Poly', 'Ajax'];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(clients.join(' ')); // "Mango Poly Ajax"
console.log(clients.join(',')); // "Mango,Poly,Ajax"
console.log(clients.join('-')); // "Mango-Poly-Ajax"*/


//2. Методы indexOf() и includes()
/*const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Monkong')); // -1*/

/*const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.includes('Poly')); // true
console.log(clients.includes('Monkong')); // false*/



//2.1. Проверка множественных условий с includes()
/*const fruit = 'apple';

if (fruit === 'apple' || fruit === 'strawberry') {
  console.log('It is a red fruit!');
}*/

//2.1. Проверка множественных условий с includes()
/*// Выносим варианты в массив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry';

if (redFruits.includes(fruit)) {
  console.log('It is a red fruit!');
}*/




//3. Методы push(), pop(), shift(), unshift()

// Создаем пустой массив
/*const stack = [];

// Добавляем элементы в конец массива
stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1, 2]

stack.push(3);
console.log(stack); // [1, 2, 3]

// Удаляем элементы из конца массива
console.log(stack.pop()); //  3
//console.log(stack); // [1, 2]

console.log(stack.pop()); //  2
//console.log(stack); // [1]

console.log(stack.pop()); //  1
//console.log(stack); // []

console.log(stack.pop()); //  undefined*/



/*const clients = ['Mango', 'Ajax', 'Poly'];

console.log(clients.shift()); // Mango
console.log(clients); // ["Ajax", "Poly"]

clients.unshift('Kiwi');
console.log(clients); // ["Kiwi", "Ajax", "Poly"]*/

//4. Метод slice()
/*const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// Вернет новый массив в котором будут элементы с индексами от 1 до 2
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Вернет новый массив в котором будут
// элементы с индексами от 1 до (clients.length - 1)
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// Вернет копию исходного массива
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Вернет новый массив состоящих из последних двух элементом исходного
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]*/

//5. Метод splice()
//splice(position, num)

// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
/*const scores = [1, 2, 3, 4, 5];

// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента.
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента.
console.log(deletedScores); // [1, 2, 3]*/



//5.2. Вставка элементов в массив
// Правило   ---    splice(position, 0, new_element_1, new_element_2, ...)

// Предположим, что у вас есть массив с названиями цветов в виде строк.
/*const colors = ['red', 'green', 'blue'];
console.log(colors);
// Следующая операция помещает один новый элемент перед вторым элементом.
colors.splice(2, 0, 'purple');

// Теперь массив цветов содержит четыре элемента
// с новым элементом, вставленным во вторую позицию.
console.log(colors); // ["red", "green", "purple", "blue"]

// Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);*/

//5.3. Замена элементов массива  Удаление
// Предположим, у вас есть массив языков программирования из четырех элементов.
/*const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, 'Python');

// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, 'C#', 'Swift', 'Go');

console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]*/



//6. Метод concat()
/*const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];
console.log(oldClients);
console.log(newClients);
const allClients = oldClients.concat(newClients);

console.log(allClients);
// ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

console.log(oldClients);
// ["Mango", "Ajax", "Poly", "Kiwi"]

console.log(newClients);
// ["Monkong", "Singu"]*/


/*function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);*/




// a, b, c это параметры
/*const add = function (a, b, c) {
  return a + b + c;
};

// 1, 2, 3 это аргументы
const result = add(1, 2, 3);
console.log(result); // 6

// 5, 10, 15 это аргументы
console.log(add(5, 10, 15)); // 30*/



/*const fnA = function () {
  console.log('Начала выполняться [fnA]');
  fnB();
  console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
};

const fnB = function () {
  console.log('Выполняется [fnB]');
};

console.log('Начал выполнение [main]');
fnA();
console.log('Продолжил выполняться [main] после выхода из [fnA]');*/

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */





//Собрать массив из строки и потом опять собрать строку

/*const str = "Menya zovyt Artur i ya programist";

function removeWords(str, num) {
  let res = "";

  const arr = str.split(" ");


  const resArr = [];

  for(let i = 0; i < arr.length; i++ ) {

    if(arr[i].length <= num) {
      resArr.push(arr[i]);

    }
  }

  res = resArr.join(" ");

 return res;

}

console.log(removeWords(str, 5));*/



/*function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  words = message.split(delimeter);
  console.log(words);
  // Пиши код выше этой строки
  return words;
}
splitMessage('Манго спешит на поезд', ' ');
splitMessage('Манго', '');
splitMessage('лучшее_за_неделю', '_');*/



/*function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
const  res = message.split(" ").length*pricePerWord;
console.log(res);


  // Пиши код выше этой строки
}
calculateEngravingPrice('JavaScript у меня в крови', 10);
calculateEngravingPrice('JavaScript у меня в крови', 20);
calculateEngravingPrice('Веб-разработка это творческая работа', 40);
calculateEngravingPrice('Веб-разработка это творческая работа', 20);*/




// Задача 18 модуль 2
/*function calculateTotal(number) {
  // Пиши код ниже этой строки
  let total = 0;
for (let i = 1; i <= number; i += 1 ) {
  total += i;
}
console.log(total);
return total;
  // Пиши код выше этой строки
}
calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);
calculateTotal();*/




// Задача 20 модуль 2
/*function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let i = 0; i < order.length; i += 1 ) {
    total += order[i];
    console.log(total);
  }
  // Пиши код выше этой строки
  return total;
}
calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);*/







// Задача 21 Модуль 2
/*function findLongestWord(string) {
  // Пиши код ниже этой строки
  const words = string.split(" ");
  let LongestWord = words[0];
  for (let i = 0; i < words.length; i += 1 ) {
    if (words[i].length > LongestWord.length) {
      LongestWord = words[i];
      
    }
  }
  console.log(LongestWord);
  return LongestWord;
  // Пиши код выше этой строки
}
findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');*/



// задача 22 модуль 2
/*function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  numbers[0] = min;
  for (let i = min + 1; i <= max; i += 1) {
    numbers.push(i);
    if (numbers.includes(min) && numbers.includes(max)) {
      console.log(numbers);
    }
  }
  // Пиши код выше этой строки
  return numbers ;
}
createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);*/





/*function filterArray(numbers, value) {
  // Пиши код ниже этой строки

   for (let i = 0; i > value; i =+ 1) {
     if (numbers[i] < value) {
      numbers.shift(i);
     }
      
     }
     console.log(numbers);
     return numbers;
   }
   
  // Пиши код выше этой строки

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);*/



// Задача 23 модуль 2
/*function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    let mass = [];
   for (const number of numbers) {
     if (number > value) {
      mass.push(number);
      console.log(mass);
     }
     }
     return mass;
   }
   
  // Пиши код выше этой строки

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);*/



// Задача 24 модуль 2
/*function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}
checkFruit('слива');
checkFruit('мандарин');
checkFruit('груша');
checkFruit('Груша'); 
checkFruit('яблоко');*/



// Задача 25 модуль 2
/*Function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
let mass = [];
for (const element of array1) {
  if (array2.includes(element)) {
    mass.push(element);
    console.log(mass);
  }
return mass;
  // Пиши код выше этой строки
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);*/


//Задача 26 модуль 2
/*function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (const element of order) {
    total += element;
  }
  // Пиши код выше этой строки
  return total;
}
calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);
calculateTotalPrice([]);*/



//Задача 27 модуль 2
/*function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
      start
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}
filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);*/



//Задача 29 модуль 2
/*function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let mass = [];
  for ( let i = start; i <= end; i += 1) {
   if ( i % 2 === 0) {
    mass.push(i)
    console.log(mass);
   }
  }
  return mass;
  // Пиши код выше этой строки
}
getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(6, 12);
getEvenNumbers(8, 8);
getEvenNumbers(7, 7);
getEvenNumbers(7, 7);*/



//Задача 30 модуль 2
//Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
/*const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}*/




//Задача 32 модуль 2
//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
//При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
 
/*function includes(array, value) {
  // Пиши код ниже этой строки
for (const element of array) {
  if (element === value) {
    return true;
}
return false;
  // Пиши код выше этой строки
}
includes([1, 2, 3, 4, 5], 3);  Это убирать надо из автопроверки
includes([1, 2, 3, 4, 5], 17);
includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер');
includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран');
includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива');
includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви');*/





//Задача 7 Модуль 3
/*const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.area = 60;
apartment.obsee = {country : "Украина", gorod : "Одесса"};
// Пиши код ниже этой строки*/



//Задача 10 Модуль 3
/*const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const key in apartment) {
  keys.push(key);
  console.log(keys);
  values.push(apartment[key]);
  console.log(values);
}*/




//Задача 11 Модуль 3
/*const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);

  // Пиши код выше этой строки
}
}*/




//Задача 12 Модуль 3
/*function countProps(object) {
  let propCount = 0;
  let mass = [];
  // Пиши код ниже этой строки
for(const key in object) {
  if (object.hasOwnProperty(key)) {
    mass.push(key);
    propCount = mass.length;
    console.log(propCount);
  }
}
  // Пиши код выше этой строки
  return propCount;
}
countProps({});
countProps({ name: 'Mango', age: 2 });
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });*/






/*const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']*/

/*const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}*/




// Задача 18 модуль 3
/*const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
   for (const product of products) {
  if (productName === product.name) {
    console.log(product.price);
    return product.price;
  }
}
return null;
  // Пиши код выше этой строки
}
getProductPrice('Радар');
getProductPrice('Захват');
getProductPrice('Сканер');
getProductPrice('Дроид');
getProductPrice('Двигатель');*/






// Задача 19 модуль 3 Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна 
 //вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, 
//функция должна вернуть пустой массив.
/*const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  // Пиши код ниже этой строки
let res = [];
for (const product of products) {
for (const key in product) {
  if (propName === key) {
    res.push(product[propName]);
    console.log(res);
  }
}
} 
return res;
  // Пиши код выше этой строки
}
getAllPropValues('name');
getAllPropValues('quantity'); 
getAllPropValues('price');
etAllPropValues('category'); */






// Задача 20 модуль 3    Напиши функцию calculateTotalPrice(productName) которая принимает один параметр 
//productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким
// именем из массива products.
/*const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let summ;
for (const product of products) {
  //console.log(product);
  for (const value in product) {
    //console.log(value);
    if (productName === product.name) {
      //console.log(product.name);
      summ = product.price*product.quantity;
      console.log(summ);
      return  summ;
    } 
  }
  }
return  0;
  // Пиши код выше этой строки
}
calculateTotalPrice('Бластер');
calculateTotalPrice('Радар');
calculateTotalPrice('Дроид');
calculateTotalPrice('Захват');
calculateTotalPrice('Сканер');*/







// Образец
/*const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}*/




// Образец 2
/*const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
];

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}*/




// Образец 3
/*const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
];
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}*/




// Задача 24 модуль 3  Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта
/*const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const { hex, rgb } of colors) {

  hexColors.push(hex);
  console.log(hexColors);
  rgbColors.push(rgb);
  console.log(rgbColors);
}*/






//Глубокая деструктуризация Образец
/*const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308*/





// Задача 25 модуль 3 Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками.
 //Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, 
// переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
/*const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, 
tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},} = forecast;

//const highToday = forecast.today.high;
//const lowToday = forecast.today.low;
//const todayIcon = forecast.today.icon;

//const highTomorrow = forecast.tomorrow.high;
//const lowTomorrow = forecast.tomorrow.low;
//const tomorrowIcon = forecast.tomorrow.icon;

console.log(highToday);
console.log(lowToday);
console.log(todayIcon);
console.log(highTomorrow);
console.log(lowTomorrow);
console.log(tomorrowIcon);*/





// Задача 30 модуль 3  Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
/*function makeTask(data) {

  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  
const secondData = { category, priority, ...data,  completed, };
console.log(secondData);
return secondData;
  // Пиши код выше этой строки
}
makeTask({});
makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' });
makeTask({ category: 'Финансы', text: 'Забрать проценты' });
makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' });
makeTask({ text: 'Купить хлеб' }); */





//Операция ...rest для сбора всех аргументов функции

/*function multiply(...args) {
  console.log(args); // массив всех аргументов
}
multiply(1, 2, 5);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);*/





// Задача 31 модуль 3   Используя операцию rest дополни код функции add() так, чтобы она принимала любое 
// количество аргументов, считала и возвращала их сумму.
/*function add(...args) {
  
  let total = 0;
  for (const arg of args) {
    total += arg;
    console.log(total);
  }
  return total;
  // Пиши код выше этой строки
}
add(15, 27);
add(12, 4, 11, 48);
add(32, 6, 13, 19, 8);
add(74, 11, 62, 46, 12, 36);*/





// Образец
/*function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}
multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);*/




// Задача 32 модуль 3   Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она 
//считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// Пиши код ниже этой строки
/*function addOverNum(firstNumber,...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > firstNumber) {
    total += arg;
    console.log(total);
  }
  }
  return total;
  // Пиши код выше этой строки
}
addOverNum(50, 15, 27);
addOverNum(10, 12, 4, 11, 48, 10, 8);
addOverNum(15, 32, 6, 13, 19, 8);
addOverNum(20, 74, 11, 62, 46, 12, 36);*/






// Задача 33 модуль 3 
// Пиши код ниже этой строки
function findMatches() {
  const matches = []; // Не изменяй эту строку

  // Пиши код выше этой строки
  return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
findMatches([63, 11, 8, 29], 4, 7, 16);