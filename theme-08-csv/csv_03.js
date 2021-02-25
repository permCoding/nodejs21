const fs = require('fs');
const csvjson = require('csvjson'); // npm install csvjson

function csv_to_json(nameFile) {
	let textCSV = fs.readFileSync(nameFile, 'utf-8');
	return csvjson.toObject(textCSV, { delimiter: ',' });
}

let json = csv_to_json('data.csv');
json
	.sort((a, b) => b.age - a.age)
	.slice(0, 3)
	.map(obj => console.log(obj.age + '\t' + obj.nameSt));