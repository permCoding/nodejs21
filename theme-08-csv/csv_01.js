const fs = require('fs');
const fastcsv = require('fast-csv'); // npm install fast-csv

fs.createReadStream('data.csv')
	.pipe(fastcsv.parse({ headers: true }))
	.on('data', row => console.log(row));

fs.createReadStream('data.csv')
	.pipe(fastcsv.parse({ headers: true }))
	.on('data', row => console.log(row.id + '\t' + row.nameSt));

// можем получить непредсказуемый результат
// так как методы чтения потока работают асинхронно
