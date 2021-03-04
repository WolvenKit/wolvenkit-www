export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE ? process.env.DEFAULT_LOCALE : 'en'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (chunk) => {
      return chunk ? `${chunk} | Red Modding` : 'Red Modding'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The home to all your tools for modding REDEngine games, such as WolvenKit, CyberCAT and many community projects.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Red Modding'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Red Modding'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'The home to all your tools for modding REDEngine games, such as WolvenKit, CyberCAT and many community projects.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL || 'http://localhost:3000/'}logo_temp.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/formatDate.js',
    { src: '~plugins/lazyload.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n'
  ],

  i18n: {
    lazy: true,
    langDir: 'locale/',
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'fr',
        file: 'fr-FR.js',
        name: 'Français'
      },
      {
        code: 'cn',
        file: 'zh-CN.js',
        name: '简体中文'
      },
      {
        code: 'jp',
        file: 'ja-JP.js',
        name: '日本語'
      }
    ],
    defaultLocale: process.env.DEFAULT_LOCALE ? process.env.DEFAULT_LOCALE : 'en',
    vueI18n: {
      fallbackLocale: process.env.DEFAULT_LOCALE ? process.env.DEFAULT_LOCALE : 'en'
    }
  },

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cache: true,
    parallel: true,

    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(md|yaml)$/i,
        loader: 'ignore-loader'
      })
    }
  },

  ignore: [
    '/pages/**/-components/**'
  ]
}
