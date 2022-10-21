<script lang="ts">
import { useChampStore } from '@/stores/Champ'
import { computed, reactive, ref } from 'vue'

export default {
    setup() {
        const store = useChampStore()

        const getChamp = computed(() => {
            return store.getChamp
        })

        const getName = computed(() => {
            return store.getName
        })

        const reactiveData = ref(getChamp)

        const state = reactive({
            reactiveData,
        })

        return {
            state,
            getChamp,
            getName,
        }
    },
}
</script>

<template>
    <div class="greetings">
        <h1
            v-if="state.reactiveData.data[getName].name === 'Lux'"
            class="yellow"
        >
            Let's light it up!
        </h1>
        <h1 v-else class="yellow">
            {{ state.reactiveData.data[getName].name }}
        </h1>
        <h2
            v-if="state.reactiveData.data[getName].name === 'Lux'"
            class="yellow"
        >
            Luxanna, the Lady of Luminosity
        </h2>
        <h2 v-else class="yellow">
            {{ state.reactiveData.data[getName].title }}
        </h2>
        <p>
            {{ state.reactiveData.data[getName].lore }}
        </p>
        <div class="tags">
            <p v-for="tag in state.reactiveData.data[getName].tags">
                {{ tag }}
            </p>
            <p>Difficulty: <span>{{state.reactiveData.data[getName].info.difficulty}}</span></p>
        </div>
        <ul>
            <li v-for="tag in state.reactiveData.data[getName].allytips">
                {{ tag }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.tags {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
}

.tags > p {
    margin: 0.5rem;
    font-weight: 600;
}

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}
.greetings h1 {
    text-align: center;
}

.greetings h2 {
    text-align: center;
    font-weight: 500;
    color: rgb(177, 175, 76);
}

.yellow {
    text-decoration: none;
    color: rgb(218, 215, 88);
    transition: 0.4s;
}

@media (max-width: 480px) {
    h1 {
        font-size: 2rem;
    }
}
</style>
