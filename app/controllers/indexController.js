module.exports.index = function(app, req, res) {
    var connection = app.config.db()
    var model = new app.app.models.indexModel(connection)

    model.loadData(function(err, result) {
        res.render('index', { data: result })

    })
}