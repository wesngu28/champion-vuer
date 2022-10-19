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
    line-height: 1.5;
}

@media (min-width: 1280px) {
    .container {
        display: flex;
        justify-content: center;
    }

    .lux {
        margin: 0 2rem 0 0;
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
