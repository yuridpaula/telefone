emptyObject = {
    pes_codigo: '',
    pes_nome: '',
    pes_dtnascimento: '',
    pes_apelido: ''
}

module.exports.cadastro = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.pessoaModel(connection)

    id = req.query.id
    if (id != null) {
        model.loadById(id, function(err, result) {
            res.render('cadastroPessoa', { data: result })
        })
    } else {
        res.render('cadastroPessoa', { data: [emptyObject] })
    }
}

module.exports.post = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.pessoaModel(connection)
    var data = req.body
    id = data.pes_codigo

    delete data.pes_codigo

    if (id) {
        model.update(id, req.body, function(err, result) {
            res.redirect('listaPessoas')
        })
    } else {

        model.insert(req.body, function(err, result) {
            res.redirect('listaPessoas')
        })
    }
}

module.exports.listar = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.pessoaModel(connection)

    model.loadAll(function(err, result) {
        res.render('listaPessoas', { data: result })
    })
}

module.exports.remover = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.pessoaModel(connection)
    var id = req.query.id

    model.delete(id, function(err, result) {
        res.redirect('listaPessoas')
    })
}