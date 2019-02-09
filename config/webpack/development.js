process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.config.merge({
    resolve: {
        alias:{
            "jet-views":'packs/views',
            "jet-locales":'packs/locales',
        }
    }
})


module.exports = environment.toWebpackConfig()
