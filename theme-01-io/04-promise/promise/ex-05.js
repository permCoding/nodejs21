// npm i node-fetch

const fetch = require('node-fetch');

let url = 'https://pcoding.ru/fon/proCoding.png';

fetch(url)
    .then(response => response.blob())
    .then(blob => console.log('size: ', blob.size))
    .catch(err => console.log(err));
