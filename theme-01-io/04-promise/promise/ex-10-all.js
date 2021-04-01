// npm i node-fetch

const fetch = require('node-fetch');
const _ = require('lodash');

function get_obj(url, id) {
    return new Promise((resolve) =>
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                let user = _.find(json, u => u.id == id);
                arr_o.push({'id': user.id, 'name': user.name});
            })
            .then(()=>resolve())
    )
}

let url = 'https://jsonplaceholder.typicode.com/users';
let arr_f = [
    get_obj(url,1),
    get_obj(url,3),
    get_obj(url,5)
];
let arr_o = [];

Promise
    .all(arr_f)
    .then(()=>console.log('___get_all___'))
    .then(()=>console.log(arr_o))
    .then(()=>console.log('___stop___'));
