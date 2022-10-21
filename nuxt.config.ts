export default defineNuxtConfig({
    modules: [
        [ '@nuxt/image-edge',
            {
                image: {
                    domains: ['leagueoflegends.com']
                }
            }
        ],
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    // automatically imports `defineStore` as `definePiniaStore`
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
    ],
})
