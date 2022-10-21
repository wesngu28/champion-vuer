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
            <p class="abilityname">{{ abilityname }}</p>
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
    padding: 0.5rem;
}

.abilityname {
    font-weight: bold;
}
.name {
    width: max-content;
}

.desc {
    width: 50%;
}

@media (max-width: 1280px) {
    .desc {
        width: 100%;
    }
}
</style>
