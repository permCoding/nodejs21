// npm i node-fetch

const fetch = require('node-fetch');
const fs = require ('fs');

function save_img(url) {
    fetch(url)
        .then(resp => resp.buffer())
        .then(buf => fs.writeFile('img.png', buf,
            (e)=> {if (e) console.error(e)}))
        .then(console.log('сохранено'))
        .catch(e => console.error(e))
}

let url = 'https://pcoding.ru/fon/proCoding.png';
save_img(url);
