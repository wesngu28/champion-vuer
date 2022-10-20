<script setup lang="ts">
import TextBody from './TextBody.vue'
import SkinBox from './SkinBox.vue'
</script>

<template>
    <div class="container">
        <SkinBox />
        <div class="wrapper">
            <TextBody msg="Let's light it up!" />
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 1rem;
}

.wrapper {
    padding: 1rem;
}

@media (min-width: 1280px) {
    .container {
        display: flex;
        justify-content: center;
    }

    .container .wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .wrapper {
        width: 25%;
    }
}
</style>
