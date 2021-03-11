const fs = require('fs');
// const csvjson = require('csvjson');
// const fastcsv = require('fast-csv');

// чтение и запись потока
let readableStream = fs.createReadStream("data.csv", "utf8");
let writeableStream = fs.createWriteStream("output_stream.csv");

// ver.1
// readableStream.pipe(writeableStream); // целиком

// ver.2
readableStream.on("data", function(line) { // по одной строке
    writeableStream.write(line);
});
