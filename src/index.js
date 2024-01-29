const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'db'
}
const create = "CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))";
const insert = "INSERT INTO people(name) VALUES ('Oseias da Silva Martins')";
const select = "SELECT * FROM people;";

var connection = mysql.createConnection(config);
connection.query(create, (error, _) => {
    if (error) {
        connection.end();
        throw error;
    }
    connection.query(insert);
    connection.end();
})

app.get('/', (_, res) => {
    var connection = mysql.createConnection(config);
    connection.query(select, (error, result) => {
        if (error) { throw error; }
        let html = '<h1>Full Cycle Rocks!</h1><h2>Pessoas cadastradas no banco de dados:</h2>';
        for (const person of result) {
            html += '<p>' + person.id + ' - ' + person.name + '</p>';
        }
        res.send(html);
    });
    connection.end();
})

app.listen(port);

console.log(`listen on port ${port}`);