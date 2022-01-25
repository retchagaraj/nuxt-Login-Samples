module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    _AXIOS_BASE_URL_: process.env.BASE_URL
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sample_task',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
       { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  serverMiddleware: ["~/service/index"],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    
    // { src: "~/plugins/qrcode", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [].filter(Boolean),

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "nuxt-vuex-localstorage",
    "bootstrap-vue/nuxt",
  ],
  
 
  axios: {
    proxy: true
  },
  proxy: {
    // Simple proxy
   
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
