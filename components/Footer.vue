<template>
    <footer>
        <p>2022</p>
        <NuxtLink to="/">
            MA! TAKE ME HOME IM SCARED
        </NuxtLink>
        <NuxtLink to="/about">
            About (internal link that belongs to the Nuxt App)
        </NuxtLink>
        <p>Made with Nuxt3</p>
    </footer>
</template>

<style scoped>
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        background-color: #43464b;
    }

    p {
        margin: 1rem;
    }
</style>