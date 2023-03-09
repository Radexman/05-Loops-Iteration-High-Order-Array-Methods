const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumber = numbers.map((number) => 'Number ' + number);
console.log(doubledNumber);

// Same with for Each

const doubleNumbers2 = [];
numbers.forEach((num) => {
	doubleNumbers2.push(num * 2);
});

console.log(doubleNumbers2);

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

// Create an array of comapny name

const companyNames = companies.map((comapny) => comapny.name);
console.log(companyNames);

// Create an object with just company and category

const object = companies.map((company) => {
	return {
		name: company.name,
		category: company.category,
	};
});

console.log(object);

const companyAge = companies.map((company) => {
	return {
		name: company.name,
		age: `${company.end - company.start} years`,
	};
});
console.log(companyAge);

// Chain map methods
const squareAndDouble = numbers
	.map((number) => Math.sqrt(number))
	.map((number) => number * 2)
	.map((number) => number * 3);
const evenNums = squareAndDouble.filter((num) => num % 2 === 0);
console.log(squareAndDouble);
console.log(evenNums);
