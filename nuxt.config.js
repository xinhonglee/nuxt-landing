const pkg = require('./package');

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-48.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.png' }
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
    { src: '~/assets/scss/master.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/global.js",
    "~plugins/Vuelidate.js",
    "~plugins/VueSwal.js",
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/axios', {
      baseURL: process.env.NODE_ENV ==='development' ? 'http://localhost:3001' : 'https://api.magnet.co/'
    }]
  ],

  axios: {
    debug: true,
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
}
