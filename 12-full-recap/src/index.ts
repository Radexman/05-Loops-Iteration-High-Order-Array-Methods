// =============== 01 For Loop =============== //

for (let i: number = 1; i <= 10; i++) {
    if(i === 7) {
        console.log('7 is my lucky number.')
    } else {
        console.log('Number ' + i);
    }
}

// Nested loop

for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);

    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

// Loop through an array

const names: string[] = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'John') {
        console.log(`${names[i]} is the best!`)
    } else {
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
const arr: number[] = [10, 20, 30, 40, 50];
let j = 0;

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

// Nedting while loops
while (i <= 5) {
    console.log('Number ' + i);

    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`)
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
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5  === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// =============== 05 For of Loop ============= //

// Loop through arrays

const items: string[] = ['book', 'table', 'chair', 'kite'];
const users: {name: string}[] = [
    { name: 'Brad' },
    { name: 'Kate' },
    { name: 'Sara' },
]

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

// =============== 06 For in Loop ============= //

interface Color {
    color1: string,
    color2: string,
    color3: string,
    color4: string,
}

const colorObj: Color = {
    color1: 'red',
    color2: 'green',
    color3: 'blue',
    color4: 'black',
}

for (const key in colorObj) {
    console.log(key);
}

const colorArr: string[] = ['red', 'green', 'blue', 'yellow'];

for (const color in colorArr) {
    console.log(color, colorArr[color]);
}

// ================ 07 forEach() ============== //

const socials: string[] = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// console.log(socials.__proto__);

// Old school function keyword

// socials.forEach(function(social) {
//     console.log(social);
// });

// ES6+ Arrow function with implicit return

// socials.forEach((item, index, array) => console.log(item, index, array));

const logSocials = (social: string) => console.log(social);

// socials.forEach(logSocials);

const socialObjs: {name: string, url: string}[] = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
]

socialObjs.forEach((item) => console.log(`${item.name} ${item.url}`));