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






// Задача 33 модуль 3  Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, 
//а остальные аргументы будут просто числами.
//Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые 
//есть в массиве первого аргумента.
//Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.
// Пиши код ниже этой строки

/*function findMatches(firstElement, ...args) {
  const matches = []; // Не изменяй эту строку
for (const arg of args) {
  if (firstElement.includes(arg)) {
    matches.push(arg);
    console.log(matches);
  }
}
  // Пиши код выше этой строки
  return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
findMatches([63, 11, 8, 29], 4, 7, 16);*/




// Образец  Методы объекта  Модели
// ✅ Логиески и синтаксически сгруппированные сущности
/*const bookShelf = {
books: ['Последнее королевство', 'Страж снов'],
  // Это метод объекта
  getBooks() {
    console.log('Этот метод будет возвращать все книги - свойство books');
  },
  // Это метод объекта
  addBook(bookName) {
    console.log('Этот метод будет добавлять новую книгу в свойство books');
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook('Новая книга');*/






// Задача 34 модуль 3   Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks()
 //и addBook(bookName).
//Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.
//Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое 
//имя> и <новое имя>это значения параметров oldName и newName соотвественно.


/*const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  }

  // Пиши код выше этой строки
};
bookShelf.getBooks();
bookShelf.removeBook();
bookShelf.updateBook('Пески Дюны', 'Дюна');*/






//ОБразец
/*const bookShelf = {
  books: ['Последнее королевство'],
  getBooks() {
    console.log(this);
  },
};
// Перед точкой стоит объект bookShelf,
// поэтому при вызове метода, this будет хранить ссылку на него.
bookShelf.getBooks(); // {books: ['Последнее королевство'], getBooks: f}*/



/*const bookShelf = {
  books: ['Последнее королевство'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};
console.log(bookShelf.getBooks()); // []
bookShelf.addBook('Мгла');
bookShelf.addBook('Страж снов');
console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
bookShelf.removeBook('Мгла');
console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов'];*/





// Задача 35 модуль 3 Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. 
//Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

/*const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
      const bookIndex = this.books.indexOf(oldName);
     this.books.splice(bookIndex, 1, newName);
      console.log(bookShelf.books);
      
    // Пиши код выше этой строки
  },
};*/




// Задача 36 модуль 3 Создай свойство с пустым значением
/*const atTheOldToad = {
  // Пиши код ниже этой строки
   potions :[],
  // Пиши код выше этой строки
};*/





// Задача 37 модуль 3  Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
/*const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    return this.potions;
  }
  // Пиши код выше этой строки
};*/




// Задача 38 модуль 3  Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
/*const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName);
    console.log(this.potions);
    // Пиши код выше этой строки
  },
  
};
atTheOldToad.addPotion('Невидимка');
atTheOldToad.addPotion('Зелье силы');*/




// Задача 39 модуль 3   Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

/*const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const bookIndex = this.potions.indexOf(potionName);
    this.potions.splice(bookIndex, 1);
    console.log(this.potions);
    // Пиши код выше этой строки
  },
};
atTheOldToad.removePotion('Дыхание дракона');
atTheOldToad.removePotion('Зелье скорости');*/








// Задача 40 модуль 3  Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName,
// в массиве зелий в свойстве potions.

/*const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potIndex = this.potions.indexOf(oldName);
    this.potions.splice(potIndex, 1, newName);
    console.log(this.potions);
    // Пиши код выше этой строки
  },
};
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка');*/







// Задача 41 модуль 3   Задача. Расширяем инвентарь
//Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.


/*const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
      const potionIndex = this.potions.indexOf(this.potions[i]);
      this.potions.splice(potionIndex, 1);
     }
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
       if (potion.name === oldName) {
         return potion.name = newName;
       }
    }
  },
  // Пиши код выше этой строки
};
atTheOldToad.getPotions();
atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
atTheOldToad.removePotion('Дыхание дракона');
atTheOldToad.removePotion('Зелье скорости');
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');*/






// Задача 1 модуль 4 Дополни код так, чтобы в переменной result был результат
// выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
/*function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza();
const pointer = makePizza();*/




// Задача 2 модуль 4 
//Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. 
//Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
/*function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}*/





// Задача 3 модуль 4 
//Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName),
// которая логирует строку 'Едим пиццу <имя пиццы>'.

/*function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {console.log(`Доставляем пиццу ${pizzaName}.`);});
// Пиши код ниже этой строки


makePizza('Ультрасыр', function eatPizza(pizzaName){console.log(`Едим пиццу ${pizzaName}.`);});*/


// Задача 4 модуль 4 
/*const pizzaPalace = {
pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, makePizza, onOrderError) {
  if (!this.pizzas.includes(pizzaName)) {
    return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
}
    return makePizza(pizzaName); 
  },
}
// Пиши код выше этой строки
// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}
// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}*/







//Образец практики
/*const print = (info) => {
  console.log(info)
}*/



// Задача 7 модуль 4 метод map
//Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.
//Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.'
// Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).
//Не объявляй дополнительные параметры функции composeMessage(position).
//Используй call для вызова функции в контексте одного объекта-заказа.
//Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
//Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.


/*const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки ВАРИАНТ 1
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.` ;
}
const messages = orders.map((order, i) => composeMessage.call(order, i + 1));

console.log(messages);*/



// Пиши код ниже этой строки ВАРИАНТ 2
/*function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((order, index) => composeMessage.call(order, index + 1));
console.log(messages);*/








// Задача 8 модуль 4 метод map плюс метод call меняем на apply
// Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.

/*const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = orders.map((order, index) =>
  composeMessage.apply(order, [index + 1])
);*/







// Образец работы с BIND

/*function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = { service: 'Steam' };
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

const gmail = { service: 'Gmail' };
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."*/



// Задача 9 модуль 4 метод BIND
// Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов. Дополни код так, чтобы в переменных pizzaPalaceComposer
// и burgerShackComposer были её копии с привязанным контекстом к соответствующим объектам.
//Объявлена переменная pizzaPalace.
//Значение переменной pizzaPalace это исходный объект.
//Объявлена переменная burgerShack.
//Значение переменной burgerShack это исходный объект.
//Объявлена функция composeMessage(customerName).
//Объявлена переменная pizzaPalaceComposer.
//Значение переменной pizzaPalaceComposer это копия функции composeMessage с контекстом привязанным к объекту pizzaPalace.
//Объявлена переменная pizzaPalaceMessage.
//Значение переменной pizzaPalaceMessage это строка 'Манго, всегда рады вас видеть в «Pizza Palace».'.
//Объявлена переменная burgerShackComposer.
// Значение переменной burgerShackComposer это копия функции composeMessage с контекстом привязанным к объекту burgerShack.
// Объявлена переменная burgerShackMessage.
// Значение переменной burgerShackMessage это строка 'Поли, всегда рады вас видеть в «Burger Shack».'.


/*const pizzaPalace = {
  company: 'Pizza Palace',
};
const burgerShack = {
  company: 'Burger Shack',
};
function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки
const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
console.log(pizzaPalaceMessage); - короткий вариант
//console.log(composeMessage.bind(pizzaPalace)('Манго')); - длинный вариант
const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');
console.log(burgerShackMessage);*/






// Метод bind и методы объекта
// В строгом режиме, значение this , при вызове как колбэк-функции callback(), будет undefined. не работает
// Образец
/*const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() это вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback()}.`);
}

makeMessage(customer.getFullName); // Будет ошибка при вызове функции
makeMessage(customer.getFullName.bind(customer)); //- этот метод работает*/

// Задача 10 модуль 4
//Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. Функция logAndInvokeAction(email, action) 
//ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор статистики симулируется логированием строки. 
//Разберись и дополни код так, чтобы он работал верно.

//Объявлена переменная service.
//Значение переменной service это оригинальный объект.
//Объявлена функция logAndInvokeAction(email, action).
//Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
//Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
//Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
//Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.

/*const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};
function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}
const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service)); // - добавил здесь.bind(service)
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.
console.log(service.mailingList);*/
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
/*const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));// - добавил здесь.bind(service)
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.
console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']*/





// Метод MAP служит для уменьшения синтаксиса в коде при работе с массивами
/*let a = [2, 5 , 11];
let b = [];
a[7] = 9;
delete a[8];
// надо умножить все на 2
for (let i = 0; i < a.length; i ++) {
  b[i] = a[i]*2
}
console.log(a);
console.log(b);
// let b = a.map(function(currentValue, index, array) { return tralala;});
//
let c = a.map(function(x,y,z){
  return x*8;
});
console.log(c);*/





// Вариант 1
/*const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const  getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
  
};

getWage(baseSalary, overtime, rate);

// Вариант 2   // Этод вариант лучше. При таком подходе у метода нету параметров, используются свойства объекта, которые настраиваются
  // при создании объекта и, возможно, так же изменяются другими методами. На выходе имеем сущность с простым интерфейсом, что понижает сложность 
   //программы и повышает повторное использование кода в других частях программы.
const employee = {  
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();*/


// Конструктор называется с большой буквы
/*const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
};

const hotel = new Hotel('Resort Hotel', 5, 100);
console.log(hotel);
// Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

const motel = new Hotel('Sunlight Motel', 4, 300);
console.log(motel);
// Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}*/




//3. Добавление методов 
/*const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
  this.guestCount = 0;

  this.greet = function (guestName) {
    console.log(`Hello ${guestName}, wellcome to ${this.name}`);
  };

  this.addGuests = function (amount) {
    console.log(amount);
    this.guestCount += amount;
    console.log(this.guestCount);
  };

  this.removeGuests = function (amount) {
    console.log(amount);
    this.guestCount -= amount;
    console.log(this.guestCount);
  };
};

const hotel = new Hotel('Sunrise Hotel', 5, 100);

console.log(hotel);
// Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
hotel.addGuests(50);
hotel.removeGuests(50);*/




/*const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};

const mango = new Guest('Mango', 28);

console.log(mango);*/


/*const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};*/

/*
 * Теперь у нас есть конструктор базового класса героя,
 * добавим в prototype какой-то метод.
 */
/*Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points
console.log(mango); // Hero { name: 'Mango', xp: 1500 }*/

/*const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

const Warrior = function (name, xp, weapon) {*/
  /*
   * Во время выполнения функции Warrior вызываем функцию Hero
   * в контексте объекта создающегося в Warrior, а так же передаем
   * аргументы для инициализации полей this.name и this.xp
   *
   * this это будущий экземпляр Warrior
   */
  /*Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};

// Сразу добавим метод для атаки в prototype воина
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');

console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
poly.attack(); // Poly attacks with sword*/


// Полный код примера.
/*const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);

  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');*/



// Образец  Прототип объекта и метод Object.create()

/*const animal = {
  legs: 4
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4*/







// Задача 1 модуль 5

//Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

/*const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);// это все что надо сделать

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;*/




// Задача 2 модуль 5
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

/*const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor); // это все что надо сделать
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent); // это все что надо сделать
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки*/



// Функция-конструктор
// Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, 
//но разными значениями, и методами для взаимодействия со свойствами. Всё это нужно сделать динамически, во время выполнения программы. 
//Для этого используют функции-конструкторы, вызывая их при помощи специального оператора new.

// Образец
/*function User() {
  // Тело функции
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}*/

// Образец
/*function User(name, email, age) {
  this.name = name;
  this.email = email;
}

const mango = new User('Манго', 'mango@mail.com');
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User('Поли', 'poly@mail.com');
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }*/




// Задача 3 модуль 5
// Объяви функцию-конструктор Car которая принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы 
// во время её вызова с оператором new.

/*function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car('Audi', 'Q3', 36000);
console.log(audi);

const bmw = new Car('BMW', 'X5', 58900);
console.log(bmw);

const nissan = new Car('Nissan', 'Murano', 31700);
console.log(nissan);*/



// Объект настроек
// Функции-конструкторы всегда принимают большое количество входных данных для свойств будущего объекта. Поэтому, к ним также можно применить
// паттерн «Объект настроек», передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.
// Образец
/*function User({ name, email }) {
  this.name = name;
  this.email = email;
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
const poly = new User({ name: 'Поли', email: 'poly@mail.com' });*/




// Задача 4 модуль 5

// Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. 
// Деструктуризируй объект в сигнатуре (подписи) функции.


/*function Car({brand, model, price}) { // Добавил фигурные скобки и все
  this.brand = brand;
  this.model = model;
  this.price = price;
}*/




// Свойство prototype
// Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит поиск отсутствующих свойств объекта по цепочке прототипов.
// Во время вызова функции-конструктора через new и создания нового объекта со свойствами, ему также устанавливается прототип.
// У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor, указывающим 
// на саму функцию-конструктор.

/*function User() {}
console.log(User.prototype); // { constructor: User }
//При вызове функции-конструктора и создании объекта через new, объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.
const mango = new User();
console.log(User.prototype.isPrototypeOf(mango)); // true
// В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором. 
// Методы в prototype будут вызываться объектами созданными функцией-конструктором, поэтому для доступа к свойствам вызываемого объекта в методах
// используется ключевое слово this.*/


// Образец
/*function User({ name, email }) {
  this.name = name;
  this.email = email;
}

User.prototype.getEmail = function () {
  return this.email;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

console.log(mango.getEmail()); // mango@mail.com
mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com*/

// Задача 5 модуль 5
// Добавь в свойство prototype функции-конструктора Car два метода:
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
// У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и 
// последующем вызове getPrice() вернет число 35000.
//Car.prototype.hasOwnProperty('getPrice'); //возвращает true.
//Car.prototype.hasOwnProperty('changePrice'); //возвращает true.


/*function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function() {
return this.price;
};

Car.prototype.changePrice = function(newPrice) {
this.price = newPrice;
};

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

console.log(audi.getPrice());
audi.changePrice(35000);
console.log(audi.getPrice());*/






// Задача 6 модуль 5
// С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. 
// Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// Добавь методы на прототип:

//getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
//addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
//removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
//Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.


/*function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function() {
  return this.items;
};

Storage.prototype.addItem = function(newItem) {
this.items.push(newItem);
};

Storage.prototype.removeItem = function(item) {
  for (let i = 0; i < this.items.length; i += 1) {
    if (item === this.items[i]) {
     const itemIndex = this.items.indexOf(this.items[i]);
      this.items.splice(itemIndex, 1);
    }
  }
};
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]*/






// Задача 7 модуль 5
// С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, 
// которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. 
// Пожалуйста ничего там не меняй.

/*function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function() {
  return this.value;
};

StringBuilder.prototype.padStart = function(str) {
this.value = str + this.value;
};

StringBuilder.prototype.padEnd = function(str) {
  this.value  += str;
};


StringBuilder.prototype.padBoth = function(str) {
  this.value = str + this.value + str;
};

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='*/



// Задача 9 модуль 5
// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

/*class Car {
  constructor ({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
new Car({ brand: 'BMW', model: 'X5', price: 58900 });
new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });*/




// Задача 10 модуль 5
// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

/*class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice(){
  return this.price;
  }
  changePrice(newPrice){
  this.price = newPrice;
  }
}
new Car({ brand: 'Audi', model: 'Q3', price: 36000 });*/





// Приватные свойства
// Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса. Пользователь класса должен получать доступ только к публичному 
// интерфейсу - набору публичных свойств и методов класса.
// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса. Это одно из отличий классов 
// и функций-конструкторов - в классах легко объявить приватные свойства.
// Допустим почта пользователя должна быть недоступна из вне, то есть приватна. Добавляя к имени свойства символ # мы делаем его приватным.
// Объявление приватного свойства до инциализации в конструкторе - обязательно.

// Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед их именем необходимо поставить символ #.

/*class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Будет ошибка, это приватное свойство*/



// Задача 11 модуль 5
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения 
// и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

/*class Car {

  #brand; // добавил

  constructor({ brand, model, price }) {
    this.#brand = brand; // добавил 
    this.model = model;
    this.price = price;
  }

  getBrand() { // добавил
    return this.#brand;
  }

  changeBrand(newBrand) { // добавил
    this.#brand = newBrand;
  }
}*/



// Задача 12 модуль 5

// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

/*function Storage(items) { // это убрать и вставить код снизу
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (addItem) {
  this.items.push(newItem);
};

Storage.prototype.removeItem = function (item) {
  const itemIndex = this.items.indexOf(item);
  this.items.splice(itemIndex, 1);
};



class Storage {  //Это код по схеме класса

 #items;

 constructor(items) {
   this.#items = items;
 }
 getItems() {
return this.#items;
 }
 addItem(newItem) {
  this.#items.push(newItem);
 }
 removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
 }

}

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]*/





// Задача 13 модуль 5
//Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.
/*function StringBuilder(baseValue) { //Это вариант с функцией конструктором
  this.value = baseValue;
}
StringBuilder.prototype.getValue = function () {
  return this.value;
};
StringBuilder.prototype.padEnd = function (str) {
  this.value += str;
};
StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value;
};
StringBuilder.prototype.padBoth = function (str) {
  this.padStart(str);
  this.padEnd(str);
};*/

/*class StringBuilder { // Это вариант с классом
#value;
constructor(baseValue) {
  this.#value = baseValue;
}
getValue(){
  return this.#value;
}
padEnd(str){
  this.#value += str;
}
padStart(str){
  this.#value = str + this.#value;
}
padBoth(str){
  this.padStart(str);
  this.padEnd(str);
}
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='*/





// Геттеры и сеттеры
// Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. Геттер и сеттер имитируют обычное публичное 
// свойство класса, но позволяют изменять другие свойства более удобным способом. Геттер выполняется при попытке получить значение свойства, 
//а сеттер - при попытке его изменить.

// Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, как их публичный интерфейс.
// Для работы со свойством которое хранит массив или объект они не подойдут.

// Образец
/*class User {
  name;
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email - для получения значения свойства,
  get email() {
    return this.#email;
  }

  // Сеттер email - для его изменения. // вариант 1
  //set email(newEmail) {
    //this.#email = newEmail;
  //}
  set email(newEmail) { // вариант 2
    if(newEmail === '') {
      console.log('Ошибка! Почта не может быть пустой строкой!');
      return;
    }
  
    this.#email = newEmail;
  }


}
// Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set. Внутри этих методов мы или возвращаем значение 
// приватного свойства #email или изменяем его значение. Геттер и сеттер идут в паре и должны называться одинаково.

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
console.log(mango.email); // mango@mail.com
mango.email = 'mango@supermail.com';
console.log(mango.email); // mango@supermail.com*/

// При обращении к mango.email вызывается геттер get email() {...} и выполняется его код. При попытке записи mango.email = 'mango@supermail.com' 
// вызывается сеттер set email(newEmail) {...} и строка 'mango@supermail.com' будет значением параметра newEmail.
// Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, например с какими-то проверками, 
// в отличии от выполнениях этой же операции напрямую со свойством.





// Задача 14 модуль 5

// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив 
// уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.


/*class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {  // пишем с маленькой буквы
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set Model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}*/





// Статические свойства
// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, 
// но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.
// Добавим классу пользователя приватное свойство type - его тип, определяющий набор прав, например администратор, редактор, просто пользователь 
// и т п. Возможные типы пользователей будем хранить как статическое свойство TYPES - объект со свойствами.
// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.


// Образец
/*class User {
  // Объявление и инициализация статического свойства
  static TYPES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
  #email;
  #type;

  constructor({ email, type }) {
    this.#email = email;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  set type(newType) {
    if (User.TYPES[newType] === undefined) {
      console.log('Ошибка! Такого типа пользователя не существет');
      return;
    }

    this.#type = newType;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  type: User.TYPES.ADMIN,
});

console.log(mango.TYPES); // undefined
console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

console.log(mango.type); // admin
mango.type = User.TYPES.EDITOR;
console.log(mango.type); // editor*/








// Задача 15 модуль 5

// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше
//  или равно, то перезаписывает цену автомобиля.


/*class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000; // Поменял цену
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice < Car.MAX_PRICE) { // Добавил это и все 
      this.#price = newPrice;
    }
    return;
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000*/


// Статический метод может быть приватным. В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу
//  - статические методы, которые могут быть как публичные, так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением
// того, что значением будет метод.
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит, что статический метод может 
// получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его 
// экземпляры.

/* class User {
  static #takenEmails = []; // приватный статичесикий метод

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(User.isEmailTaken('poly@mail.com')); // false

console.log(User.isEmailTaken('mango@mail.com')); // true*/







// Задача 16 модуль 5
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price 
// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

/*class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
static checkPrice(price) {  // Добавил это
  if (price < Car.#MAX_PRICE) {
   return 'Всё хорошо, цена в порядке.';
  }
  return 'Внимание! Цена превышает допустимую.';
}
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.*/





// Наследование классов
// Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства и методы другого
//  класса (родителя). В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent.


/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentWriter extends User {
  // Тело класса ContentWriter
}

const writer = new ContentWriter('mango@mail.com');
console.log(writer); // { email: 'mango@mail.com' }
console.log(writer.email); // 'mango@mail.com'*/




// Задача 17 модуль 5

// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.
// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект 
// { BASIC: 'basic', SUPERUSER: 'superuser' }.

/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

class Admin extends User { // Добавил это
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  }
}
console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);*/





// Конструктор дочернего класса
// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора 
// родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса, будет ошибка. 
// При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.posts = posts;
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'*/









// Задача 18 модуль 5

//Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. 
//Добавь классу Admin публичное свойсво accessLevel, значение которого будет передаваться при вызове конструктора.
// Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.

/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;  // добавил это

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  constructor({email, accessLevel}) { // добавил Это
    super(email);  
    this.accessLevel = accessLevel;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({email: 'mango@mail.com',accessLevel: Admin.AccessLevel.SUPERUSER});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser*/



// Методы дочернего класса

// В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

// Представим что выше есть объявление класса User

/*class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'
writer.addPost('post-1');
console.log(writer.posts); // ['post-1']*/



// Задача 19 модуль 5

// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в 
// свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве 
// хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. 
// Пожалуйста ничего там не меняй.




/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  blacklistedEmails = []; // это добавил

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {  // это я добавил
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {  // это я добавил
    for (const element of this.blacklistedEmails) {
      if (email === element) {
        return true;
      }
      return false;
    }
  }
  // Пиши код выше этой строки
}

const mango = new Admin({email: 'mango@mail.com',accessLevel: Admin.AccessLevel.SUPERUSER});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true */






// Метод forEach(callback)
// Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией

//массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
// });

// Поэлементно перебирает массив.
// Вызывает коллбек-функцию для каждого элемента массива.
// Ничего не возвращает.
// Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те 
// параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

/*const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

console.log("РАЗДЕЛИТЕЛЬНАЯ ЧЕРТА");

// Перебирающий forEach

numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});*/




// // Задача 1 модуль 6
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, 
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  //for (let i = 0; i < orderedItems.length; i += 1) {
   // totalPrice += orderedItems[i];
  // }

  orderedItems.forEach(function(orderedItems){ // то что надо было сделать
    totalPrice += orderedItems;
  });
  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));*/





// // Задача 2 модуль 6

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы 
// оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

/*function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  //for (let i = 0; i < numbers.length; i += 1) {
   // if (numbers[i] > value) {
   //   filteredNumbers.push(numbers[i]);
  //  }
  //}

 numbers.forEach(function(number) {    // это надо было сделать
  if(number > value){
    filteredNumbers.push(number);
  }
  });
  console.log(filteredNumbers);
  

  // Пиши код выше этой строки
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);*/





// // Задача 3 модуль 6

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и 
// возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

/*function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  //for (let i = 0; i < firstArray.length; i += 1) {
  //  if (secondArray.includes(firstArray[i])) {
  //    commonElements.push(firstArray[i]);
  //  }
  //}
  firstArray.forEach(function(firstArray) { // сделать это
   if(secondArray.includes(firstArray)) {
    commonElements.push(firstArray);
   }
  });
  console.log(commonElements);


  return commonElements;
  // Пиши код выше этой строки
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);*/





// Стрелочные функции.
// Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она 
// используется как коллбек.
// Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.
// Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.
// Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

// Обычное объявление функции
/*function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// Если параметр один, его объявление может быть без круглых скобок.
const add = (a) => {
  return a + 5;
};
// Если параметров нет, то обязательно должны быть пустые круглые скобки.
const greet = () => {
  console.log('Привет!');
};*/




// // Задача 4 модуль 6
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Пиши код ниже этой строки

/*function calculateTotalPrice(quantity, pricePerItem) {  // Простая функция
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}*/

// Пиши код ниже этой строки
/*const calculateTotalPrice = (quantity, pricePerItem) => {  // Это стрелочная функция
  // Пиши код выше этой строки
  console.log(quantity * pricePerItem);
  return quantity * pricePerItem;
}
calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);*/



// Неявный возврат
// В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.
/*const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. Это называется явный возврат 
// (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.
const add = (a, b, c) => a + b + c;
// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return).
//  В примере вернётся результат выражения сложения параметров a, b и c.
// Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае когда в
// теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;*/






// // Задача 5 модуль 6

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// Пиши код ниже этой строки
//const calculateTotalPrice = (quantity, pricePerItem) => { // Явный возврат
//  return quantity * pricePerItem;
// };
// Пиши код выше этой строки
/*const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;  // Неявный возврат

console.log(calculateTotalPrice(5, 100));
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);*/



// Стрелочные функции как коллбеки