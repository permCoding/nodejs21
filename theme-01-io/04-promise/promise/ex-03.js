// npm i node-fetch

const fetch = require('node-fetch');

console.log('___start___');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json[0]))
    .catch(err => console.log(err));

console.log('___stop___'); // oops
