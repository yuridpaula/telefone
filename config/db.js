var mysql = require('mysql');

var connMySql = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'telefones'
    });
};

module.exports = function() {
    return connMySql;
    console.log('connectou');
}