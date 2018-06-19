emptyObject = {
    tel_codigo: '',
    tel_tipo: '',
    tel_marca: '',
    tel_numero: '',
    tel_operadora: '',
    pes_codigo: ''
}

//promise para carregar as pessoas do outro controller
function getPessoas(app, connection) {
    return new Promise((resolve, reject) => {
        var pessoaModel = new app.app.models.pessoaModel(connection)
        pessoaModel.loadAll(function(err, result) {
            return resolve(result)
        })
    })
}

//promise para carregar a pessoa especifica
function getPessoa(id, app, connection) {
    return new Promise((resolve, reject) => {
        var pessoaModel = new app.app.models.pessoaModel(connection)
        pessoaModel.loadById(id, function(err, result) {
            return resolve(result)
        })
    })
}

module.exports.cadastro = function(app, req, res) {

    var connection = app.config.db()

    getPessoas(app, connection).then((pessoas) => {

        var model = new app.app.models.telefoneModel(connection)

        id = req.query.id

        if (id != null) {
            model.loadById(id, function(err, result) {
                res.render('cadastroTelefone', { data: result, pessoas: pessoas })
            })
        } else {
            emptyObject.pes_codigo = req.query.id_pessoa

            res.render('cadastroTelefone', { data: [emptyObject], pessoas: pessoas })
        }
    }).catch((err) => {
        console.log('erro');
        console.log(err);
    });
}

module.exports.post = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.telefoneModel(connection)
    var data = req.body
    id = data.tel_codigo
    pessoaId = data.pes_codigo

    delete data.tel_codigo

    if (id) {
        model.update(id, req.body, function(err, result) {
            res.redirect(`listaTelefones?id=${pessoaId}`)
        })
    } else {

        model.insert(req.body, function(err, result) {
            res.redirect(`listaTelefones?id=${pessoaId}`)
        })
    }
}

module.exports.listar = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.telefoneModel(connection)

    id = req.query.id

    getPessoa(id, app, connection).then((pessoa) => {
        if (id) {
            model.loadByFk(id, function(err, result) {
                res.render('listaTelefones', { data: result, pessoa: pessoa, listar: true })
            })
        } else {

            model.loadAll(function(err, result) {
                res.render('listaTelefones', {
                    data: result,
                    pessoa: [emptyObject],
                    listar: false
                })
            })
        }
    }).catch((err) => {
        console.log('erro');
        console.log(err);
    });
}

module.exports.remover = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.telefoneModel(connection)
    var id = req.query.id

    model.delete(id, function(err, result) {
        res.redirect('listaTelefones')
    })
}