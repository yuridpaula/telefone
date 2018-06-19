module.exports = function(app) {

    app.get('/', function(req, res) {
        res.redirect('index');
    });

    app.get('/index', function(req, res) {
        app.app.controllers.indexController.index(app, req, res);
    });

}