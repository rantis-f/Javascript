const mysql = require('mysql2')

const connection = mysql.createPool({
    host : 'localhost',
    user: 'root',
    password: '',
    post : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    database: 'bazma-jwt'
})

module.exports = {connection}