<script setup lang="ts">
import AbilityInfo from "./AbilityInfo.vue";
</script>

<template>
    <div>
        <img src="/illumination.png" />
        <img src="/light_binding.png" />
        <img src="/illumination.png" />
        <img src="/illumination.png" />
        <img src="/illumination.png" />
    </div>

    <AbilityInfo />
</template>

<style scoped>

div {
    display: flex;
    margin: 1rem;
    padding: 1rem;
}

img {
    margin: 1rem;
    padding: 0.25rem;
}

</style>