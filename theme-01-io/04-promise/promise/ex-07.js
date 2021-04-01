// npm i node-fetch

const fetch = require('node-fetch');
const fs = require ('fs');

async function save_img(url) {
    let resp = await fetch(url);
    let buf = await resp.buffer();
    await fs.writeFile('img.png',buf,(e)=> {if (e) {console.error(e);}});
    console.log('сохранено');
}

let url = 'https://pcoding.ru/fon/proCoding.png';
save_img(url);
