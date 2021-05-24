const productoService = require('../services/productos.service')

module.exports = (app) => {
    app.route('/productos')
        .get(productoService.getAll)
        .post(productoService.addOne)
    app.route('/productos/vista')
        .get(productoService.showAll)
    app.route('/productos/:id')
        .get(productoService.getOne)
        .put(productoService.updateOne)
        .delete(productoService.deleteOne)
    app.route('/info')
        .get(productoService.getInfo)
    // app.route('/randoms')
    //     .get(productoService.generateRandoms)
}
