const ut = require('./utils_query');

// читаем данные из csv-таблицы
let array = ut.csv_to_json('curators.csv');

let nameCurator; // для хранения имени куратора

// INSERT - добавить нового куратора в таблицу
nameCurator = 'ЕщёОдин';
array = ut.insert(array, nameCurator);

// DELETE - удалить запись о кураторе
nameCurator = 'Ухова';
for (let i = 0; i < array.length; i++) {
	if (array[i].nameCur == nameCurator) {
		array.splice(i, 1);
		break;
	}
}

// INSERT - добавить нового куратора
nameCurator = 'Второй';
array = ut.insert(array, nameCurator);

// записываем данные в csv-таблицу
ut.write_to_csv(array, 'curators.csv');



/* - это исходные данные для таблицы кураторы
id,nameCur
1,Мухин
2,Пухов
3,Ухова
4,Ляскин
5,Дуров
*/