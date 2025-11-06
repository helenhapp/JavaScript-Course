// // ЧАСТИНА 1 - МАСИВИ

// // теорія

// // 5 окремих змінних:
// const answer1 = 1;
// const answer2 = 5;
// const answer3 = 2;
// const answer4 = 3;
// const answer5 = 1;

// // Один масив:
// const answers = [1, 5, 2, 3, 1];

// // console.log();
// // console.log(answers);
// // console.log(answers.length);

// const text = "hello, world";
// // console.log(text.length);

// // приклад

// const prices = [10, 25, 5, 50, 15, 20]; // створюємо масив
// // console.log();
// // console.log(prices); // виводимо весь масив
// // console.log(prices.length); // виводимо довжину

// // завдання 1

// const flavors = [
//   "coffee",
//   "strawberry",
//   "vanilla",
//   "chocolate",
//   "mint",
//   "mango",
// ];

// // console.log();
// // console.log(flavors); // виводимо весь масив
// // console.log(flavors.length); // виводимо довжину

// // ЧАСТИНА 2 - ІНДЕКСИ

// // const colors = ["red", "green", "blue"];

// // console.log();
// // console.log(colors); // весь масив
// // console.log(colors[0]); // перший елемент
// // console.log(colors[1]); // другий елемент
// // console.log(colors[2]); // третій елемент

// // colors[1] = "yellow"; // змінюємо другий елемент
// // console.log(colors);

// // console.log(colors.indexOf("blue")); // 2
// // console.log(colors.indexOf("orange")); // -1 (немає в масиві)

// // console.log();
// // // prices = [10, 25, 5, 50, 15, 20];
// // console.log(prices[1]);
// // console.log(prices[prices.length - 1]);
// prices[3] = 35;
// // console.log(prices);

// // console.log();
// // // flavors = ["coffee", "strawberry", "vanilla", "chocolate", "mint", "mango"];
// // console.log(flavors[4]);
// // console.log(flavors[flavors.length - 1]);
// flavors[2] = "cookie";
// // console.log(flavors);

// // ЧАСТИНА 3 - push(), pop()

// // const fruits = ["apple", "banana", "kiwi"];

// // console.log();
// // fruits.push("orange");
// // fruits.push("mango");
// // console.log(fruits);

// // console.log();
// // fruits.pop();
// // console.log(fruits);
// // const removed = fruits.pop();
// // console.log(fruits);
// // console.log(removed);

// // console.log();
// // // масив: prices = [10, 25, 5, 35, 15, 20];
// // prices.pop();
// // console.log(prices);
// // prices.push(17);
// // console.log(prices);

// // console.log();
// // масив: flavors = [ 'coffee', 'strawberry', 'cookie', 'chocolate', 'mint', 'mango' ];
// flavors.pop();
// // console.log(flavors);
// flavors.push("pistachio");
// // console.log(flavors);

// // з методом forEach() [варіант 1]:

// const fruits = ["apple", "banana", "orange", "peach", "mango"];

// // console.log();

// // fruits.forEach(function (fruit) {
// //   console.log(fruit);
// // });

// // // добуток
// // let product = 1;
// // numbers.forEach((num) => {
// //   product *= num;
// // });
// // console.log("добуток: " + product);

// // // найменше число
// // let min = numbers[0];
// // numbers.forEach((num) => {
// //   if (num < min) {
// //     min = num;
// //   }
// // });
// // console.log("найменше число: " + min);

// // // індекс найменшого числа
// // console.log("індекс найменшого числа: " + numbers.indexOf(min));

// // console.log();

// // // вивести елементи:
// // prices.forEach(function (price) {
// //   console.log(price);
// // });

// // // сума:
// // let sum = 0;
// // prices.forEach(function (price) {
// //   sum += price;
// // });
// // console.log("сума: " + sum);

// // // найменше число
// // let min = prices[0];
// // prices.forEach((price) => {
// //   if (price < min) {
// //     min = price;
// //   }
// // });
// // console.log("найменше число: " + min);

// console.log();
// const colors = ["red", "green", "yellow", "blue", "white"];

// // знаходимо індекс 3, видаляємо 1 елемент:
// // colors.splice(3, 1);
// // console.log(colors);

// // знаходимо індекс 2, видаляємо 3 елементи:
// // colors.splice(2, 3);
// // console.log(colors);

// // знаходимо індекс 1, видаляємо 1 елемент
// // додаємо на його місці 1 новий елемент:
// // colors.splice(1, 1, "black");
// // console.log(colors);

// // знаходимо індекс 1, видаляємо 1 елемент
// // додаємо на його місці 2 нові елементи:
// // colors.splice(1, 1, "black", "orange");
// console.log(colors);

console.log();

// const colors = ["red", "green", "blue"];
// console.log(colors);

// console.log();
// console.log();

// console.log(colors[0]); // перший елемент
// console.log(colors[1]); // другий елемент
// console.log(colors[2]); // третій елемент

// const fruits = ["apple", "banana", "kiwi"];
// console.log(fruits);

// const gifts = ["шоколад", "шкарпетки", "ноутбук", "шампунь", "книга"];
// console.log(gifts);

// // видалити "шкарпетки":
// gifts.splice(1, 1);
// console.log(gifts);

// // замінити "шампунь":
// gifts.splice(2, 1, "телефон", "павербанк");
// console.log(gifts);

const games = ["Minecraft", "Fortnite", "GTA V", "Valorant", "Roblox"];
console.log(games);

games.splice(3, 1);
console.log(games);

games.splice(1, 2, "Among Us");
console.log(games);
