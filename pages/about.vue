<template>
    <div class="wrapper">
        <div class="info-wrapper">
            <div>
                <video autoplay loop class="lux">
                    <source src="/1.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
                <div class="links">
                    <img src="/github.svg"/>
                    <a href="https://github.com/wesngu28/simple-champion-viewer">Source Code</a>
                </div>
                <h1>Simple Champion Viewer</h1>
                <p>A simple project that makes use of Riot's Data Dragon API to display information about a league
                    champion.</p>
                <p>This project was made as a means for me to learn some Vue, which also led to a bit of Nuxt, but I
                    brought Nuxt in at the tailend so I still have much to learn about Nuxt.</p>
                <ul>Some thoughts I have about Vue:
                    <li>I like that Vue has so many officially supported libraries for various needs like routing and
                        state.</li>
                    <li>To be honest, having coded in Svelte, it feels like Svelte with a bit more boilerplate.</li>
                    <li>Getting used to how Vue renders and updates the DOM was difficult coming from React.</li>
                    <li>Resources for Vue2 vs Vue3, options vs composition API, and Nuxt2 vs Nuxt 3 online was very
                        confusing.</li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
video {
    width: 100%;
    height: auto;
}

.links {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 4%;
    height: auto;
    display: inline-block;
}

.wrapper {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.info-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-wrapper>div:first-child {
    padding: 1rem;
}

.info-wrapper>div:nth-child(2) {
    text-align: center;
    padding: 1rem;
}

h2,
p {
    text-align: left;
    padding: 0.5rem;
}

ul {
    margin: 1rem;
}

li {
    text-align: left;
}

@media (max-width: 1280px) {
    .wrapper {
        justify-content: flex-start;
    }
    .info-wrapper {
        flex-direction: column;
    }
}
</style>

