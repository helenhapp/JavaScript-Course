// const game = [
//   ["X", "O", "X"],
//   ["X", "X", "O"],
//   ["O", "O", ""],
// ];

console.log();

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

console.log(matrix);

console.log("1-й рядок матриці:", matrix[0]);
console.log("2-й рядок матриці:", matrix[1]);

console.log("1-й елемент 1-го рядка:", matrix[0][0]);
console.log("2-й елемент 1-го рядка:", matrix[0][1]);
console.log("3-й елемент 1-го рядка:", matrix[0][2]);
console.log("4-й елемент 1-го рядка:", matrix[0][3], "\n");

console.log("1-й елемент 2-го рядка:", matrix[1][0]);
console.log("2-й елемент 2-го рядка:", matrix[1][1]);
console.log("3-й елемент 2-го рядка:", matrix[1][2]);
console.log("4-й елемент 2-го рядка:", matrix[1][3], "\n");

console.log(matrix.length); // кількість рядків
console.log(matrix[0].length); // к-ть елементів у 1-му рядку
