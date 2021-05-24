"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoClass = void 0;
class productoClass {
    constructor(id, title, price, thumbnail) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}
exports.productoClass = productoClass;
//Variables
let productos = [];
//Services
const existanceCheck = (id, req, res) => {
    const producto = productos.find(producto => producto.id === id);
    if (!producto) {
        res.sendStatus(404);
    }
    return producto;
};
module.exports = {
    getAll: (req, res) => {
        res.sendFile('form&List.html', { root: './public' });
    },
    addOne: (req, res) => {
        const { title, price, thumbnail } = req.body;
        let productoNuevo = new productoClass(productos.length, title, price, thumbnail);
        productos.push(productoNuevo);
        res.sendFile('form&List.html', { root: './public' });
    },
    showAll: (req, res) => {
        productos.length > 0 ? res.render("productList", { productos, pageTitle: "Lista de productos", listExists: true }) : res.render("productList", { listExists: false });
    },
    getOne: (req, res) => {
        existanceCheck(req.params.id, req, res);
    },
    updateOne: (req, res) => {
        const producto = existanceCheck(req.params.id, req, res);
        const { title, price, thumbnail } = req.body;
        producto.title = title;
        producto.price = price;
        producto.thumbnail = thumbnail;
    },
    deleteOne: (req, res) => {
        const id = req.params.id;
        existanceCheck(id, req, res);
        productos = productos.filter(producto => producto.id !== id);
    },
    getInfo: (req, res) => {
        console.log({
            ArgDeEntrada: process.execArgv,
            SistOperativo: process.platform,
            Version: process.version,
            Memoria: process.memoryUsage(),
            PathEje:process.execPath,
            ProcessID: process.pid,
            CarpetaCorriente: process.cwd(),
            NumeroDeProcesadores: require('os').cpus().length
        })
        res.render("info", {
            ArgDeEntrada: process.execArgv,
            SistOperativo: process.platform,
            Version: process.version,
            Memoria: process.memoryUsage(),
            PathEje: process.execPath,
            ProcessID: process.pid,
            CarpetaCorriente: process.cwd(),
            NumeroDeProcesadores: require('os').cpus().length
        });
    },
};
