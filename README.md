## Функциональное программирование на JS

Лекций - 9, ЛабРаб - 9, КП, Экз  

---  

Для каждой темы будет своя директория в репозитории, в каждой из них будет файл package.json, но не будет директории /node_modules (я их все исключил в файле .gitignore, чтобы не занимали место и подгружались самые новые версии). После того как вы скачаете к себе папку с программами, следует сначала установить все зависимости - для этого в консоли для текущей папки выполните команду:
```
npm install
```
Менеджер пакетов создаст папку node_modules и выполнит загрузку туда модулей, указанных в файле package.json.

---  

Полезные материалы:  
[Node.js API документация](https://nodejs.org/api/)  
[Введение в Node JS](https://metanit.com/web/nodejs/1.1.php)  
[Серверное программирование на Node.js](https://code.tutsplus.com/ru/tutorials/learning-server-side-javascript-with-nodejs--net-10044)  
[Node.js для серверной разработки](https://habr.com/ru/company/ruvds/blog/345164/)  
[Простое веб-приложение](https://umbrellait.com/ru/blog/how-to-build-a-simple-web-application-using-node-js/)  

---  

Темы:  
0. [Введение в Node.js](./theme-00-intro/)  
1. [Организация ввода/вывода](./theme-01-io/)  
2. [Обработка массивов]()  
3. [Файлы, объекты]()  
4. [Экспертная система]()  
5. [CSV]()  
6. [JSON]()  
7. [Парсер]()  
8. [SQLite]()  
9. [MySQL]()  

---  

Паттерн для решения задач на степике  
Читает все вводимые строки (событие 'line') в один массив lines  
По окончании ввода (событие 'close') ищет решение и выводит на экран  

Для окончания ввода строк с клавиатуры в терминале введите:  
* Ctrl-D в Linux  
* Ctrl-C в Windows  

```
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    // тут ваше решение
	result = lines[0];
    console.log(result);
});
```

Пример решения задачи  
В данном примере вводятся n строк с целыми числами и вычисляется сумма чётных  

```

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    let n = parseInt(lines[0], 10);
    let result = lines
        .slice(1, n+1)
        .map(x => +x)
        .filter(x => x%2 == 0)
        .reduce((acc, next) => acc + next, 0);
    console.log(result);
});
  
```

---  

ЛЕКЦИИ  

Лекция 01 - 19.02.21  
[Node.js и Функциональное программирование](https://show.zohopublic.com/publish/lgpre0a1454160d4141e8834b825916cafb31)  
[Папка с презентациями](https://drive.google.com/drive/folders/1oIwYQdkQ0gjt4PXG1wOf-2JBIxu3rOUT?usp=sharing)  

---  

ЛАБОРАТОРКИ

---  

```

```

---  


