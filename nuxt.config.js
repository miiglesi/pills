module.exports = {
  head: {
    title: 'pills',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Proyecto Pills' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  router: {
    base: '/pills/',
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js',],
  build: {
    vendor: ['vue-i18n'],
    publicPath: '/statics/',
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: ['/', '/about', '/en', '/en/about']
  }
}
