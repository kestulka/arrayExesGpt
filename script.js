// FILTER

const items = [
  { name: "Bike", price: 800 },
  { name: "TV", price: 500 },
  { name: "Album", price: 20 },
  { name: "Book", price: 30 },
  { name: "Computer", price: 900 },
  { name: "Phone", price: 700 },
  { name: "Keyboard", price: 80 },
  { name: "Monitor", price: 200 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(items);
console.log(filteredItems);

// MAP

const itemPrices = items.map((item) => {
  return item.price;
});

console.log(itemPrices);

// FIND

const foundItems = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItems);

// forEach

items.forEach((item) => {
  console.log(item.name);
});

// SOME

const freeItems = items.some((item) => {
  return item.price <= 0;
});

console.log(freeItems);

// REDUCE

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

// INCLUDES

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
const includesTwo = nums.includes(10);

console.log(includesTwo);

//
