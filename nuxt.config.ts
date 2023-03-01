// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    ssr: false,
    router: {
        base: '/nuxt-app/'
    },
    modules: ['@nuxtjs/tailwindcss'],
    plugins: ['~/plugins/tresjs.js']
})
