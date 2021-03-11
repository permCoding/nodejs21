# js-mysql-lection
## Способы работы с MySQL из node.js

0. Подключение библиотеки.
0. Создание соединения с БД.
0. Проверка соединения.
0. Выполнение запроса на выборку.
0. Отключение от БД.
0. Обработка данных: изменение, добавление и удаление.
0. Сохранение в форматах JSON и CSV.
---
* mysql = require("mysql2");
* connection = mysql.createConnection();
* connection.connect();
* connection.query();
* connection.end();
---
**CONNECT**
    start_01
**SELECT**
    start_02 - start_10
**INSERT**
    start_11
**UPDATE**
    start_12
**DELETE**
    start_13
**JSON**
    start_14 - start_16
**CSV**
    start_17

строка для установки: npm install --save mysql2