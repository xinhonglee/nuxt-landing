const pkg = require('./package')

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
    proxy: true,
  },

  proxy: {
    '/api': 'https://magnet-co.netlify.com/api',
    '/api/contact/say-hello': 'https://magnet-co.netlify.com/api/contact/say-hello',
  },

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
  serverMiddleware: ['~/api/index.js'],
}
