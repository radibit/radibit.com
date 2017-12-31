const {getConfigForKeys} = require('./lib/config.js')

const ctfConfig = getConfigForKeys([
  'CTF_SPACE_ID',
  'CTF_CDA_TOKEN',
  'CTF_CPA_TOKEN',
  'CTF_CMA_TOKEN',
  'CTF_ME_ID',
  'CTF_POST_ID',
  'CTF_TALK_ID',
  'CTF_PROJECT_ID',
  'CTF_EVENT_ID',
  'CTF_TIL_ID',
  'CTF_SCREENCAST_ID',
  'CTF_LANDING_PAGE_ID'
])

const cdaContentful = require('contentful')

const cdaClient = cdaContentful.createClient({
  accessToken: process.env.NODE_ENV === 'production'
    ? ctfConfig.CTF_CDA_TOKEN
    : ctfConfig.CTF_CPA_TOKEN,
  host: process.env.NODE_ENV === 'production'
    ? 'cdn.contentful.com'
    : 'preview.contentful.com',
  space: ctfConfig.CTF_SPACE_ID
})

const cmaContentful = require('contentful-management')

const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_TOKEN
})

const config = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Radimir Bitsov - Web Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal website' },
      { name: 'theme-color', content: '#18314A' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://cdn.contentful.com' },
      { rel: 'dns-prefetch', href: 'https://videos.contentful.com' },
      { rel: 'dns-prefetch', href: 'https://images.contentful.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
    ]
  },

  /*
  ** TODO Custom loader
  */
  loading: {
    color: '#18314A'
  },

  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'is-almost-active',
    linkExactActiveClass: 'is-active'
  },

  transition: {
    afterEnter (el) {
      const h1 = el.querySelector('h1')

      if (!h1) {
        return console.error('No h1 on', el)
      }

      h1.focus()
    }
  },

  /*
  ** Plugin configuration
  */
  plugins: [
    '~plugins/contentful.js',
    '~plugins/filters.js',
    '~plugins/transition.js'
  ],

  /*
  ** Nuxt modules
  */
  modules: [
    ['@nuxtjs/pwa', {
      manifest: {
        name: 'RadiBit Web Development',
        lang: 'en',
        short_name: 'RB Web Dev',
        theme_color: '#18314A'
      }
    }],
    ['@nuxtjs/google-analytics', { ua: 'UA-33873385-1' }]
  ],

  /*
  ** Build configuration
  */
  build: {
    analyze: false,

    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.forEach(rule => {
        // overwrite nuxt defaults
        // they inline svg's base64
        if (rule.loader === 'url-loader') {
          rule.test = /\.(png|jpe?g|gif)$/
        }

        // get CSS out of the JS
        if (rule.loader === 'vue-loader') {
          rule.options.extractCSS = true
        }
      })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      })
    },

    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ],

    vendor: ['wicg-focus-ring']
  },

  env: {
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_TOKEN: ctfConfig.CTF_CDA_TOKEN,
    CTF_CPA_TOKEN: ctfConfig.CTF_CPA_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_ME_ID: ctfConfig.CTF_ME_ID,
    CTF_POST_ID: ctfConfig.CTF_POST_ID,
    CTF_TALK_ID: ctfConfig.CTF_TALK_ID,
    CTF_PROJECT_ID: ctfConfig.CTF_PROJECT_ID,
    CTF_EVENT_ID: ctfConfig.CTF_EVENT_ID,
    CTF_TIL_ID: ctfConfig.CTF_TIL_ID,
    CTF_SCREENCAST_ID: ctfConfig.CTF_SCREENCAST_ID,
    CTF_LANDING_PAGE_ID: ctfConfig.CTF_LANDING_PAGE_ID
  }
}

if (process.env.NODE_ENV !== 'production') {
  // config.css = [{ src: '~/node_modules/a11y.css/css/a11y-en.css' }]
}

module.exports = config
