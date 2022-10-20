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
            <p>
                {{ desc }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.ability-info {
    display: flex;
    width: 50vw;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

p {
    padding: 1rem;
}

.name {
    width: max-content;
}

.desc {
    width: 50%;
}
</style>
