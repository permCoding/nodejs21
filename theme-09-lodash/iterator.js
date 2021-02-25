// пример итератора
// это особым образом оформленная функция
// она запоминает состояние цикла - на какой итерации он остановился
// yield - аналог return`а - он возвращает значение и запоминает состояние
// при следующем обращении к функции-итератора - цикл продолжится от точки останова

function* iter(a, b) {
	for (let i = a; i <= b; i++) {
		yield i;
	}
}

let sequence = [...iter(0, 9)];
console.log(sequence);

for (let item of [...iter(0, 9)]) {
	console.log(item);
}

let iters = iter(0,9);
console.log(iters.next());
console.log(iters.next());
console.log(iters.next());