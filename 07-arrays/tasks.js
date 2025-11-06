// ЗАВДАННЯ 1

const flavors = [
  "coffee",
  "strawberry",
  "vanilla",
  "chocolate",
  "mint",
  "mango",
];
console.log(flavors);
console.log(flavors.length);

// ЗАВДАННЯ 2

console.log(flavors[4]);
console.log(flavors[flavors.length - 1]);
flavors[2] = "cookie";
console.log(flavors);

// ЗАВДАННЯ 3

flavors.pop();
console.log(flavors);
flavors.push("pistachio");
console.log(flavors);

// ЗАВДАННЯ 4

flavors.forEach(function (flavor) {
  console.log(flavor + " -> " + flavor.length);
});

let sum = 0;
flavors.forEach(function (flavor) {
  sum += flavor.length;
});
console.log("сума: " + sum);

let max = flavors[0];
flavors.forEach(function (flavor) {
  if (flavor.length > max.length) {
    max = flavor;
  }
});
console.log("найдовше слово: " + max);

// ЗАВДАННЯ 5
