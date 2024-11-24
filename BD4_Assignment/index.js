const express = require('express');
const { resolve } = require('path');
let cors = require('cors');
let sqlite3 = require('sqlite3').verbose;
let { open } = require('sqlite3');

const app = express();
const port = 3010;
app.use(cors());
app.use(express.json());

let db;
(async () => {
  db = await open({
    filename: './BD4_Assignment/database.sqlite',
    driver: sqlite3.database,
  });
})();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
