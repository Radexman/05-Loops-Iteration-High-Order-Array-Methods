// ===== 06 For of loop ===== //

// Loop through arrays
const items = ['book', 'table', 'bed', 't-shirt'];
const users = [{ name: 'Radek' }, { name: 'Emilka' }, { name: 'Bartek' }];

// for (const item of items) {
// 	console.log(item);
// }

for (const user of users) {
	console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
	console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
	console.log(key, value);
}

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
	console.log(num);
}

const greeting = 'Hello Guys!';

for (char of greeting) {
	console.log(char);
}
