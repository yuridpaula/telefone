function pessoaModel(connection) {
    this.connection = connection;
    this.table = 'pessoa';
    this.pk = 'pes_codigo';
    this.selectStatement = ` select * from ${this.table} `;
    this.insertStatement = ` insert into ${this.table} set ? `;
    this.updateStatement = ` update ${this.table} set ? `;
    this.deleteStatement = ` delete from ${this.table} `;
};

pessoaModel.prototype.loadAll = function(callback) {
    this.connection.query(this.selectStatement, callback);
};

pessoaModel.prototype.loadById = function(id, callback) {
    this.connection.query(`${this.selectStatement} where ${this.pk} = ${id}`, callback);
};

pessoaModel.prototype.insert = function(data, callback) {
    this.connection.query(`${this.insertStatement}`, data, callback);
};

pessoaModel.prototype.update = function(id, data, callback) {
    this.connection.query(`${this.updateStatement} where ${this.pk} = ${id} `, data, callback);
};

pessoaModel.prototype.delete = function(id, callback) {
    this.connection.query(`${this.deleteStatement} where ${this.pk} = ${id}`, callback);
};

pessoaModel.prototype.loadSize = function(callback) {
    this.connection.query(`select count(*) as count from ${this.table}`, callback);
};

module.exports = function() {
    return pessoaModel;
}