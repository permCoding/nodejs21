// npm i node-fetch

const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log('___start___');
        console.log(json[0]);
        console.log('___stop___');
    });
