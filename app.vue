<script setup lang="ts">
import SkinsInfo from './components/SkinsInfo.vue'
import AbilityArea from './components/AbilityArea.vue'
import SearchArea from './components/SearchArea.vue'
</script>

<template>
    <div class="page-wrapper">
        <SearchArea />
        <SkinsInfo />
        <AbilityArea />
    </div>
</template>

<style scoped>
.page-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
