// npm i node-fetch

const fetch = require('node-fetch');

fetch('https://pcoding.ru/darkNet.php')
    .then(response => response.text())
    .then(text => console.log(text));
