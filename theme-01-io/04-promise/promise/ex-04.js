// npm i node-fetch

const fetch = require('node-fetch');
const _ = require('lodash');

function _filter_ex(users) {
    return _(users)
        .filter(u => u.email.split('.').pop() === 'biz')
        .map(obj => _.zipObject(['name','email'],[obj.name.split(' ')[0],obj.email]))
        .orderBy('name', 'desc')        
        .value();
}

async function exec() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    let response = await fetch(url);

    if (response.ok) { // HTTP-статус: 200-299
        console.log('___start___');
        let json = await response.json();
        console.table(_filter_ex(json));
        console.log('___stop___');
    } 
    else {
        console.log("Ошибка HTTP: " + response.status);
    };
}

exec();
