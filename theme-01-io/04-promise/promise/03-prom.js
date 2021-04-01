// чтение/запись через функцию promises - обещание
// у неё два аргумента - тоже функции: (resolve, reject)

fs = require('fs');

fileNameIn = "in.txt";
fileNameOut = "out.txt";

let promise = new Promise((resolve, reject) => {
    fs.readFile( // асинхронное чтение
        fileNameIn, 
        'utf8', 
        (error, txt) => { // внутри callback функции код линейный
            let arr = txt
                .split(/\r\n|\n/)[0]
                .trim()
                .split(/\s+/)
                .map(x => +x)
                .sort((a,b)=>a-b);
            resolve(arr); // вызов при успехе с передачей агрументов - выполняет обещание
        }   
    );
});

promise
    .then((arr) => { // приняли аргументы
        console.log(`Данные - ${arr.join(', ')}`);
        let promise2 = new Promise((resolve, reject) => {
            fs.writeFile( // асинхронная запись
                fileNameOut,
                arr.join(', '),
                'utf8', 
                (err) => { 
                    if (err) throw err;
                    resolve(arr.length);
                }
            );
        });
        
        promise2
            .then((amount) => console.log(
                `Записали данные в файл ${fileNameOut}\nВсего чисел - ${amount}`))
    });
