// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // css: ["~/assets/css/tailwind.css"],
    target: 'static',
    ssr: false,
    router: {
        base: '/nuxt-app/'
    },
    modules: ['@nuxtjs/tailwindcss'],
    plugins: ['~/plugins/tresjs.js']
})
