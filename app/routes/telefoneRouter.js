module.exports = function(app) {

    app.get('/cadastroTelefone', function(req, res) {
        app.app.controllers.telefoneController.cadastro(app, req, res);
    });

    app.post('/cadastroTelefone', function(req, res) {
        app.app.controllers.telefoneController.post(app, req, res);
    });

    app.get('/listaTelefones', function(req, res) {
        app.app.controllers.telefoneController.listar(app, req, res);
    });

    app.get('/removerTelefone', function(req, res) {
        app.app.controllers.telefoneController.remover(app, req, res);
    });

}