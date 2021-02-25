const fs = require('fs');
const fastcsv = require('fast-csv');

function printArray(arr) {
	arr
		.map(st => console.log(st));
}

let arrStudents = []; // с нарушением принципов ФП
let pr = fs
	.createReadStream('data.csv')
	.pipe(fastcsv.parse({ headers: true }));
pr
	.on('data', row => arrStudents.push(row));
pr
	.on('finish', () => printArray(arrStudents));
