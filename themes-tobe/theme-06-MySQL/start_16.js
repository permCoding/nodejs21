const fs = require("fs");

let text = fs.readFileSync('save.json', 'utf-8');

let arr = JSON.parse(text);
arr
	.map(obj => console.log(obj.id + '\t' + JSON.stringify(obj)));