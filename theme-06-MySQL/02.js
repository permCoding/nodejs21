

const u = require('./modules/utils');

u.start();

u.conn.query("SELECT * FROM curators",
    (err, results) => {
        if (err) console.log(err.message);
        console.log(results);
});

u.stop();
