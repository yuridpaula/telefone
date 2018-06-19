function telefoneModel(connection) {
    this.connection = connection;
    this.table = 'telefone';
    this.pk = 'tel_codigo';
    this.fk = 'pes_codigo';
    this.selectStatement = ` select * from ${this.table} `;
    this.insertStatement = ` insert into ${this.table} set ? `;
    this.updateStatement = ` update ${this.table} set ? `;
    this.deleteStatement = ` delete from ${this.table} `;
};

telefoneModel.prototype.loadAll = function(callback) {
    this.connection.query(this.selectStatement, callback);
};

telefoneModel.prototype.loadById = function(id, callback) {
    this.connection.query(`${this.selectStatement} where ${this.pk} = ${id}`, callback);
};

telefoneModel.prototype.insert = function(data, callback) {
    this.connection.query(`${this.insertStatement}`, data, callback);
};

telefoneModel.prototype.update = function(id, data, callback) {
    this.connection.query(`${this.updateStatement} where ${this.pk} = ${id} `, data, callback);
};

telefoneModel.prototype.delete = function(id, callback) {
    this.connection.query(`${this.deleteStatement} where ${this.pk} = ${id}`, callback);
};

telefoneModel.prototype.loadSize = function(callback) {
    this.connection.query(`select count(*) as count from ${this.table}`, callback);
};

telefoneModel.prototype.loadByFk = function(fkId, data, callback) {
    this.connection.query(`${this.selectStatement} where ${this.fk} = ${fkId} `, data, callback);
};

module.exports = function() {
    return telefoneModel;
}