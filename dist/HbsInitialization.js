"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_handlebars_1 = __importDefault(require("express-handlebars"));
module.exports = (app) => {
    app.engine('hbs', express_handlebars_1.default({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    }));
    app.set('views', './src/views');
    app.set('view engine', 'hbs');
};
