module.exports = function(app) {

    app.get('/cadastroPessoa', function(req, res) {
        app.app.controllers.pessoaController.cadastro(app, req, res);
    });

    app.post('/cadastroPessoa', function(req, res) {
        app.app.controllers.pessoaController.post(app, req, res);
    });

    app.get('/listaPessoas', function(req, res) {
        app.app.controllers.pessoaController.listar(app, req, res);
    });

    app.get('/removerPessoa', function(req, res) {
        app.app.controllers.pessoaController.remover(app, req, res);
    });

}