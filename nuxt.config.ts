import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ['vuetify'],
  },  
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: [
    '@/assets/main.scss',
    '@mdi/font/css/materialdesignicons.css'
  ],  
  server: {
    host: '0.0.0.0',
    port: 3001,
  }
})
