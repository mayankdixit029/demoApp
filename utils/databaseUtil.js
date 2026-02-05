const mysql = require('mysql2');
// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demoapp',
}); 

module.exports = pool.promise();