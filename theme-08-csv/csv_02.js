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
	// console.log(arr.length);
	arr
		// .sort((a, b) => a.age - b.age)
		.map(st => console.log(st));
}

// ver.1
// метод printArray сработает раньше, чем getArray вернёт массив
console.log('+++++');
let arr = getArray('data.csv');
printArray(arr);
console.log(arr.length);
console.log('-----');
