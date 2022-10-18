<script setup lang="ts">
import HeaderArea from './components/HeaderArea.vue'
import AbilityArea from './components/AbilityArea.vue'
import SearchArea from './components/SearchArea.vue'
</script>

<template>
    <div class="page-wrapper">
        <SearchArea />
        <HeaderArea />
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
