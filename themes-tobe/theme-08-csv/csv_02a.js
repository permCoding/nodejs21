const fs = require('fs');
const fastcsv = require('fast-csv');

function getArray(nameFile) {
	let arrStudents = [];
	fs.createReadStream(nameFile)
		.pipe(fastcsv.parse({ headers: true }))
		.on('data', row => arrStudents.push(row));
	return arrStudents;
}

function printArray(arr) {
	arr
		// .sort((a, b) => a.age - b.age)
		.map(st => console.log(st));
}

function sleep(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

async function init() {
	let arr = getArray('data.csv');
	await sleep(100);
	printArray(arr);
}

// ver.2
init();
