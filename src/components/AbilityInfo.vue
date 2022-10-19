<script lang="ts">
export default {
    props: {
        abilityname: String,
        desc: String,
    },
}
</script>

<template>
    <div class="ability-info">
        <div class="name">
            <p>{{ abilityname }}</p>
        </div>
        <div class="desc">
            <p class="desc">
                {{ desc }}
            </p>
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
