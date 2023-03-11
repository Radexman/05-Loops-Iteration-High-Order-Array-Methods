"use strict";
// =============== 01 For Loop =============== //
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number.');
    }
    else {
        console.log('Number ' + i);
    }
}
// Nested loop
for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];
for (let i = 0; i < names.length; i++) {
    if (names[i] === 'John') {
        console.log(`${names[i]} is the best!`);
    }
    else {
        console.log(names[i]);
    }
}
// ============ 02 Break & Continue ============ //
// Break
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Break');
        break;
    }
    console.log(i);
}
// Continue
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);
}
// ============= 03 While do while ============= //
let i = 0;
while (i <= 20) {
    console.log('Number ' + i);
    i++;
}
// Loop over array
const arr = [10, 20, 30, 40, 50];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
// Nedting while loops
while (i <= 5) {
    console.log('Number ' + i);
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}
// Do while loop
do {
    console.log('Number ' + i);
    i++;
} while (i <= 30);
// ============ 04 FizzBuzz Challange ========== //
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}
// =============== 05 For of Loop ============= //
// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    { name: 'Brad' },
    { name: 'Kate' },
    { name: 'Sara' },
];
for (const item of items) {
    console.log(item);
}
for (const person of users) {
    console.log(person.name);
}
// Loop over strings
const str = 'Hello World';
for (const char of str) {
    console.log(char);
}
// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
for (const value of map) {
    console.log(value);
}
