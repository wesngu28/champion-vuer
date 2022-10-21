export default defineAppConfig({
    title: 'Champion Viewer',
    theme: { dark: true, colors: { primary: '#ff0000' } },
    app: {
        head: {
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                    charset: 'utf-8',
                    keywords: 'league, champion, skins',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest ' }
            ],
            style: [],
            script: [],
            noscript: [],
            title: 'Champion Viewer',
        },
    },
})
