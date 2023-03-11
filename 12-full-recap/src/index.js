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
const colorObj = {
    color1: 'red',
    color2: 'green',
    color3: 'blue',
    color4: 'black',
};
for (const key in colorObj) {
    console.log(key);
}
const colorArr = ['red', 'green', 'blue', 'yellow'];
for (const color in colorArr) {
    console.log(color, colorArr[color]);
}
// ================ 07 forEach() ============== //
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// console.log(socials.__proto__);
// Old school function keyword
// socials.forEach(function(social) {
//     console.log(social);
// });
// ES6+ Arrow function with implicit return
// socials.forEach((item, index, array) => console.log(item, index, array));
const logSocials = (social) => console.log(social);
// socials.forEach(logSocials);
const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];
socialObjs.forEach((item) => console.log(`${item.name} ${item.url}`));
// ================= 08 filter() =============== //
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
let evenNumbersTwo = [];
numbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbersTwo.push(number);
    }
});
console.log(evenNumbersTwo);
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
// Get only retail comapnies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
// Get companies that started in or after 1980 anded in or before 2005
const earlyCompanies = companies.filter(company => company.start >= 1980 && company.end <= 2005);
console.log(earlyCompanies);
// Get companies thta lasted 10 years or more
const longCompanies = companies.filter(company => company.end - company.start >= 10);
console.log(longCompanies);
// =================== 09 map() ================= //
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubles = numberss.map(number => number * 2);
console.log(doubles);
// Same with forEach()
const doublesTwo = [];
numberss.forEach((number) => doublesTwo.push(number * 2));
console.log(doublesTwo);
// Create an array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);
// Create an array with just company and category
const companyNameCategory = companies.map(company => `${company.name}: ${company.category}`);
console.log(companyNameCategory);
// Create an object with comapny and category
const companyObj = companies.map(company => {
    return {
        name: company.name,
        category: company.category,
    };
});
console.log(companyObj);
// Create an array of objects with the name and the length of each company in years
const companyAge = companies.map(company => {
    return {
        name: company.name,
        age: `${company.end - company.start} years`,
    };
});
console.log(companyAge);
// Chain map methods
const squareAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2)
    .map(sqrtDoubled => sqrtDoubled * 3);
// Chaining different methods
const evenDouble = numbers
    .filter(number => number % 2 === 0)
    .map(even => even * 2);
console.log(evenDouble);
// ================= 10 reduce() =============== //
const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbersTwo.reduce(function (accumulator, current) {
    return accumulator += current;
}, 0);
const sumTwo = numbersTwo.reduce((acc, curr) => acc += curr, 0);
console.log(sumTwo);
// Using a for loop
const sumThree = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
};
const cart = [
    { id: 1, name: 'Product 1', price: 150 },
    { id: 2, name: 'Product 2', price: 120 },
    { id: 3, name: 'Product 3', price: 100 },
    { id: 4, name: 'Product 4', price: 200 },
    { id: 5, name: 'Product 5', price: 175 },
    { id: 6, name: 'Product 6', price: 130 },
];
const totalCost = cart.reduce((acc, product) => acc + product.price, 0);
console.log(totalCost);
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    }
];
const youngPeople = people
    .filter(person => person.age <= 25)
    .map(youngPerson => {
    return {
        name: `${youngPerson.firstName} ${youngPerson.lastName}`,
        email: youngPerson.email,
    };
});
console.table(youngPeople);
// Challange 2
const numbersChallange = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbersChallange
    .filter(number => number >= 0)
    .reduce((acc, positiveNumber) => acc + positiveNumber, 0);
console.log(positiveSum);
// Challange 3
const words = ['coder', 'programmer', 'developer'];
const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalizedWords);
