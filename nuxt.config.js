const pkg = require('./package');
const bodyParser = require('body-parser');

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/master.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/global.js",
    "~plugins/Vuelidate.js",
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    debug: true,
    // proxy: true,
  },

  // proxyTable: {
  //   '/api': {
  //     logLevel: 'info', // or 'debug'
  //     target: 'https://magnet-co.netlify.com',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   }
  // },

  /*
  ** Build configuration
  */
  build: {
   /*
   ** Run ESLINT on save
   */
    extend (config, ctx) {
    }
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // Api middleware
    '~/api'
  ],
}
