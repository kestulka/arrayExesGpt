// Use filter to create a new array that includes only numbers greater than 5 from the given array.
const nums = [2, 8, 5, 15, 3, 10];

const filteredNums = nums.filter((item) => {
  return item > 5;
});
console.log(filteredNums);

// Use map to double each number in the given array.

const doubleNums = nums.map((item) => {
  return item * 2;
});
console.log(doubleNums);

// Use find to find the first even number in the given array.

const firstEvenNum = nums.find((item) => {
  return item % 2 == 0;
});
console.log(firstEvenNum);

// Use forEach to log each element of the array with a message, like "Element: 5".

const fruits = ["apple", "banana", "orange", "pineapple"];
fruits.forEach((item, index) => {
  console.log(`#${index + 1} item name: ${item}`);
});

// Use some to check if the array contains any even numbers.

const isThereEvenNums = nums.some((item) => {
  return item % 2 == 0;
});
console.log(isThereEvenNums);

// Use reduce to find the sum of all numbers in the given array.

const sumOfNums = nums.reduce((currentValue, item) => {
  return currentValue + item;
}, 0);
console.log(sumOfNums);

// Use includes to check if the given array contains the element "apple".

const fruits2 = ["banana", "orange", "apple", "grape"];

const includesApple = fruits2.includes("apple");
console.log(includesApple);

// Use the sort method to sort the following array of strings alphabetically:

const fruits3 = ["banana", "apple", "orange", "kiwi", "grape"];
fruits3.sort();
console.log(fruits3);

// Use the slice method to create a new array that includes only the elements from index 2 to index 5 (inclusive) from the following array:

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums2.slice(2, 5));

// Use the splice method to remove the third element and add the numbers 10 and 11 at its position in the following array:

nums2.splice(2, 1, 10, 11);
console.log(nums2);

// Use the concat method to merge the two arrays and create a new array:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArrays = arr1.concat(arr2);
console.log(mergedArrays);

// Use the every method to check if all elements in the array are greater than 0:

const positiveNumbers = [2, 5, 8, 3, 1];
const isOverZero = (currentValue) => currentValue > 0;

console.log(positiveNumbers.every(isOverZero));
