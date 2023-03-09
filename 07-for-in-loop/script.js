// ===== 06 For in Loop ===== //
const user = {
	firstName: 'Emilia',
	lastName: 'Kożuch',
	age: 20,
};

for (const data in user) {
	console.log(data, user[data]);
}

const dogs = ['Lusia', 'Gapcia', 'Benito'];

for (dog in dogs) {
	console.log(dog, dogs[dog]);
}
