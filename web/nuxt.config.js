export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  ssr: true,
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Richard Bell Art',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Richard Bell (b. 1953, Charleville, Queensland) is a Australian artist and a member of the Kamilaroi, Kooma, Jiman and Gurang Gurang communities. ',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Richard Bell Art',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Richard Bell Art',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://richardbellart.com',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Portfolio of Richard Bell Art',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', size: '16x16', href: '/favicon-32x32.png' },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/reset.css', '@/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/agile'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-gtag',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Generate dynamic routes from data from sanity.
   ** Used only for generating static served HTML files
   */
  generate: { },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['agile'],
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nesting': {},
      },
    },
  },
  'google-gtag': {
    id: 'G-NT138E1RLC',
  },
}
