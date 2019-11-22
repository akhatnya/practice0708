const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const { Pool } = require('pg');

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'kek',
    password: 'postgres',
    port: 5432
});

app.get(
    "/getSomeData",
    (req, res) => {
        connection.query(
            "select * from todos",
            (err, response) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json(response.rows);
                }
            }
        );
});

app.listen(8080, () => { console.log("Приложение запустилось"); });

