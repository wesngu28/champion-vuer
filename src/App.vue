<script setup lang="ts">
import HeaderArea from "./components/HeaderArea.vue";
import AbilityArea from "./components/AbilityArea.vue";
</script>

<template>
  <div class="page-wrapper">
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