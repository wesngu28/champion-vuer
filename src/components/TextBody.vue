<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="greetings">
        <h1 class="yellow">{{ msg }}</h1>
        <h2>Luxanna, the Lady of Luminosity</h2>

        <p>
            Luxanna Crownguard hails from Demacia, an insular realm where
            magical abilities are viewed with fear and suspicion. Able to bend
            light to her will, she grew up dreading discovery and exile, and was
            forced to keep her power secret, in order to preserve her family's
            noble status. Nonetheless, Lux's optimism and resilience have led
            her to embrace her unique talents, and she now covertly wields them
            in service of her homeland.
        </p>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}
.greetings h1 {
    text-align: center;
}

.greetings h2 {
    text-align: center;
    font-weight: 500;
    color: rgb(177, 175, 76);
}

.yellow {
    text-decoration: none;
    color: rgb(218, 215, 88);
    transition: 0.4s;
}
</style>
