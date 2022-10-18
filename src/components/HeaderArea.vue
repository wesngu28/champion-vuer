<script setup lang="ts">
import TextBody from "./TextBody.vue";
import SkinRow from "./SkinRow.vue";
</script>

<template>
  <header>
    <SkinRow />
    <div class="wrapper">
      <TextBody msg="Let's light it up!" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
  }

  .lux {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .wrapper {
    width: 25%;
  }
}
</style>
