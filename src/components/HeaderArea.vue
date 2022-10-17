<script setup lang="ts">
import TextBody from "./TextBody.vue";
</script>

<template>
  <header>
    <img alt="Luxanna" class="lux" src="/Lux_OriginalSkin.png" />

    <div class="wrapper">
      <TextBody msg="Let's light it up!" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.lux {
  display: block;
  margin: 0 auto 2rem;
  width: 50%;
  height: auto;
  border-radius: 10%;
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
