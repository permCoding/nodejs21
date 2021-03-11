class Student {
	constructor(id, nameSt, sex, age, idGroup) {
		this.id = +id;
		this.nameSt = nameSt;
		this.sex = !!sex;
		this.age = +age;
		this.idGroup = +idGroup;
	}
}

function getArray(lines, del = '\t') { // id, nameSt, sex, age, idGroup
	return lines
		.slice(1)
		.map(line => line.split(del))
		.map(arr => new Student(arr[0], arr[1], arr[2], arr[3], arr[4]));
}

function getLines(nameFile, coding = 'utf-8') {
	return require('fs')
		.readFileSync(nameFile, coding)
		.split(/\r?\n/);
}

module.exports.Student = Student;
module.exports.getArray = getArray;
module.exports.getLines = getLines;