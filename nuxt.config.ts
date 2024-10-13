import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import svgLoader                       from 'vite-svg-loader'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public:{
      dbHost: process.env.DB_HOST         || 'db',
      dbUser: process.env.DB_USER         || 'nuxt_user',
      dbPassword: process.env.DB_PASSWORD || 'password',
      dbName: process.env.DB_NAME         || 'nuxt_db',
      dbPort: process.env.DB_PORT         || '3306',
      dbRootPassword: process.env.DB_ROOT_PASSWORD || 'password',
    }
  },

  css: [
    '~/assets/css/main.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['vuetify'],
  },


  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          multipass: true,
        },
      }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})