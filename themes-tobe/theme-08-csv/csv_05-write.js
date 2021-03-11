const fs = require('fs');
const csvjson = require('csvjson');
const fastcsv = require('fast-csv');

function csv_to_json(nameFile) {
	let textCSV = fs.readFileSync(nameFile, 'utf-8');
	return csvjson.toObject(textCSV, { delimiter: ',' });
}

function writeToCsv(array, nameFile) {
	let fw = fs.createWriteStream(nameFile);
	fastcsv
		.write(array, { headers: true })
		.pipe(fw);
}

let arrayStudents = csv_to_json('data.csv');
writeToCsv(arrayStudents, 'output.csv');
