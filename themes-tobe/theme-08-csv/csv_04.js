const ut = require('./utils');
const fs = require('fs');

let lines = ut.getLines('data.csv');
console.log(lines); // строки файла для контроля
let arrStudents = ut.getArray(lines, ',');

arrStudents
	.sort((a, b) => b.age - a.age)
	.slice(0, 3)
	.map(obj => console.log(obj.age + '\t' + obj.nameSt));