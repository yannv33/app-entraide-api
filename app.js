const app = require('express')()
var http = require('http').createServer(app)

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    database: 'projet-code-B3',
    password: 'root',
});



app.get('/', function (req, res) {
    res.send('ça marche')
  })

app.get('/users', function (req, res) {
    connection.connect();
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        users = results.json();
        res.send(users)
    });
    connection.end();
  })



http.listen(8080, function (){
    console.log("Listen on port 8080")
})