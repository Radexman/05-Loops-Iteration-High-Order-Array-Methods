const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

socials.forEach((item, index, arr) => {
	console.log(`${index} - ${item}, ${arr}`);
});

const logSocials = (social) => {
	console.log(social);
};

// socials.forEach(logSocials);

const socialOnjs = [
	{ name: 'Twitter', url: 'https://twitter.com' },
	{ name: 'LinkedIn', url: 'https://linkedin.com' },
	{ name: 'Facebook', url: 'https://facebook.com' },
	{ name: 'Instagram', url: 'https://instagram.com' },
];

socialOnjs.forEach((item) => console.log(item.url));
