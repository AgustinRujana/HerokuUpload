import handlebars from 'express-handlebars'

module.exports = (app) => {
    app.engine('hbs', handlebars({
        extname:'.hbs',
        defaultLayout:'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    }))
    app.set('views', './src/views')
    app.set('view engine', 'hbs')
}