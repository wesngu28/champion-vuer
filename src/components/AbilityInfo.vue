<script setup lang="ts">
const props = defineProps<{
  abilityname: string;
  desc: string;
}>();
</script>

<template>
  <div class="ability-info">
    <div class="name">
      <p>{{ props.abilityname }}</p>
    </div>
    <div class="desc">
      <p class="desc">{{ props.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.ability-info {
  width: 50vw;
  justify-content: center;
  flex-wrap: nowrap;
}

p {
  padding: 1rem;
}

.name {
  width: 50%;
}

.desc {
  width: 100%;
}
</style>
