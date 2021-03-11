const fs = require('fs');

let stream = new fs.ReadStream('data.csv');

let text = "";
stream.on('readable', function () {
	let block = stream.read();
	if (block != null) text += block;
});

stream.on('end', function () {
	console.log(text);
});

stream.on('error', function () {
	console.log('Ошибка чтения данных...');
});