process.env.NODE_ENV = process.env.NODE_ENV || 'production'

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
