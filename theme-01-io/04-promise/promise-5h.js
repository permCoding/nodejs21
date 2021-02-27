fs = require('fs');

async function getTxt(fileNameIn) {
    let res;
    await fs.readFile( // асинхронное чтение
        fileNameIn, 
        'utf8', 
        (error, txt) => { res = txt; }
    );
    return res;
};


fileNameIn = "in.txt";
fileNameOut = "out.txt";

let data = '- - -';
data = getTxt(fileNameIn);
console.log(data);
