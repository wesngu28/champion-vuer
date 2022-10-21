<script setup lang="ts">
import SkinsInfo from '../components/SkinsInfo.vue'
import AbilityArea from '../components/AbilityArea.vue'
import SearchArea from '../components/SearchArea.vue'
import '../assets/main.css'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="page-wrapper">
        <SearchArea />
        <SkinsInfo />
        <AbilityArea />
        <Footer />
    </div>
</template>

<style scoped>
.page-wrapper {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
}
</style>
