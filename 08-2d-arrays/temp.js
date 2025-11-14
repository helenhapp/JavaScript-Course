// console.log();

// const map = [
//   ["🌳", ".", ".", "."],
//   [".", ".", "🌳", "."],
//   ["💎", ".", ".", "."],
//   [".", "🌳", ".", "💎"],
// ];

// console.log(map[0][0]);
// console.log(map[3][3]);
// console.log();

// let text = "";
// for (let i = 0; i < map.length; i++) {
//   for (let j = 0; j < map[i].length; j++) {
//     text += map[i][j];
//     text += " ";
//   }
//   text += "\n";
// }
// console.log(text);

// let trees = 0;
// let treasures = 0;
// for (let i = 0; i < map.length; i++) {
//   for (let j = 0; j < map[i].length; j++) {
//     if (map[i][j] === "🌳") {
//       trees++;
//     } else if (map[i][j] === "💎") {
//       treasures++;
//     }
//   }
// }
// console.log(`Дерев: ${trees}`);
// console.log(`Скарбів: ${treasures}`);
// console.log();

// for (let i = 0; i < map.length; i++) {
//   for (let j = 0; j < map[i].length; j++) {
//     if (map[i][j] === "💎") {
//       console.log(`Скарб знайдено: рядок ${i + 1}, стовпчик ${j + 1}.`);
//     }
//   }
// }

console.log();

const sea = [
  ["~", "~", "~"],
  ["🐟", "~", "~"],
  ["~", "~", "🐠"],
];

console.log(sea[1][0]);
console.log(sea[2][2]);

console.log();

let text = "🦀 "; // початковий рядок

for (let i = 0; i < sea.length; i++) {
  for (let j = 0; j < sea[i].length; j++) {
    text += sea[i][j]; // додаємо по черзі елементи масиву
    text += " "; // додаємо пробіл після кожного елемента
  }

  text += "~ 🌊 ~ "; // додаємо хвилю після кожного рядка
}

console.log(text); // виводимо результат

console.log();

let fish = 0;

for (let i = 0; i < sea.length; i++) {
  for (let j = 0; j < sea[i].length; j++) {
    if (sea[i][j] === "🐠" || sea[i][j] === "🐟") {
      fish++;
    }
  }
}

console.log(`Рибок: ${fish}`); // виводимо результат

console.log();

for (let i = 0; i < sea.length; i++) {
  for (let j = 0; j < sea[i].length; j++) {
    if (sea[i][j] === "🐠" || sea[i][j] === "🐟") {
      console.log(`Знайдено рибку: рядок ${i + 1}, стовпчик ${j + 1}.`);
    }
  }
}

// let trees = 0;
// let treasures = 0;
// for (let i = 0; i < map.length; i++) {
//   for (let j = 0; j < map[i].length; j++) {
//     if (map[i][j] === "🌳") {
//       trees++;
//     } else if (map[i][j] === "💎") {
//       treasures++;
//     }
//   }
// }
// console.log(`Дерев: ${trees}`);
// console.log(`Скарбів: ${treasures}`);
// console.log();

// for (let i = 0; i < map.length; i++) {
//   for (let j = 0; j < map[i].length; j++) {
//     if (map[i][j] === "💎") {
//       console.log(`Скарб знайдено: рядок ${i + 1}, стовпчик ${j + 1}.`);
//     }
//   }
// }
