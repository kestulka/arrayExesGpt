// 1. filter:
// Given an array of objects representing people, use filter to create a new array that includes only people who are adults (age 18 and above)

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
  { name: "Eve", age: 22 },
];

const PeopleOver18 = people.filter((person) => {
  return person.age > 18;
});
console.log(PeopleOver18);

// 2. map:
// Given an array of strings, use map to create a new array where each string is reversed.

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const reversedArray = words.map((word) => {
  return word.split("").reverse().join(""); // split letter by letter, then reverse, then join back in
});
console.log(reversedArray);

// 3. find:
// Use find to get the first person from an array of objects who has a name longer than 5 characters.

const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
  { name: "Eve", age: 22 },
];

const nameOver5 = people2.find((person) => {
  if (person.name.length > 5) {
    return true;
  } else {
    return false;
  }
});
console.log(nameOver5);

// 4. forEach:
// Given an array of numbers, use forEach to find the sum of squares of each number.

const numbers = [2, 5, 8, 3, 1];
let sum = 0;
numbers.forEach((element) => {
  sum += element ** 2;
});
console.log(sum);

// 5. some:
// Check if any element in an array of strings is a palindrome (reads the same backward as forward) using some.

const words2 = ["level", "banana", "racecar", "apple", "madam"];

// const palindrome = (element) =>
//   element.split("").reverse().join("") === element;

// const hasPalindrome = words2.some(palindrome);
// console.log(hasPalindrome);

const isPalindrome = (word) => word.split("").reverse().join("") === word;

const palindromeArray = words2.map((word) => isPalindrome(word));

console.log(palindromeArray);
