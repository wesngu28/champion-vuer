<template>
    <footer>
        <NuxtLink to="/">
            🏠 Home
        </NuxtLink>
        <p>2022 wesngu28 - Made with Nuxt</p>
        <NuxtLink to="/about">
            🤔 Thoughts
        </NuxtLink>
    </footer>
</template>

<style scoped>
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
        background-color: #43464b;
    }
    
    a {
        text-decoration: none;
        color: var(--color-text);
        margin: 1rem;
        padding: 1rem;
        font-size: 1.25rem;
    }

    a:hover {
        color: cornflowerblue;
        text-decoration: underline;
    }

</style>