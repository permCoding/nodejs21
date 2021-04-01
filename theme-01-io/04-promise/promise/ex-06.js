// npm i node-fetch

const fetch = require('node-fetch');
const fs = require ('fs');

async function save_img(url) {
    let resp = await fetch(url);
    let blob = await resp.blob();
    console.log('size: ', blob.size);
}

let url = 'https://pcoding.ru/fon/proCoding.png';
save_img(url);
