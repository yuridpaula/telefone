function index(connection) {
    this.connection = connection;
};

index.prototype.loadData = function(callback) {
    this.connection.query(`select 'telefone' as tipo, count(*) count from telefone union select 'pessoa' as tipo, count(*) count from pessoa `, callback);
};

module.exports = function() {
    return index;
}