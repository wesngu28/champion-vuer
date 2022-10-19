<script lang="ts">
import { computed } from 'vue'
import { reactive } from 'vue'
import { useChampStore } from '../stores/Champ'
import type { SearchState } from '../models/SearchState'
export default {
    setup() {
        const state = reactive({
            text: '',
            resStatus: 200,
        } as SearchState)

        const store = useChampStore()

        const getChamp = computed(() => {
            return store.getChamp
        })

        const disableButton = (text: string) => {
            return text.length === 0
        }

        const printMeText = async (event: Event) => {
            store.fetchChamp(state.text)
        }
        return {
            state,
            printMeText,
            disableButton,
            getChamp,
        }
    },
}
</script>

<template>
    <div>
        <input
            type="text"
            name="inp"
            className=""
            placeholder="Enter a champion name"
            v-model="state.text"
        />
        <button v-on:click="printMeText" :disabled="disableButton(state.text)">
            Find Champion
        </button>
        <p v-if="state.resStatus === 403">
            You did not request a proper resource
        </p>
    </div>
</template>

<style scoped>
input {
    background-color: silver;
    width: 315px;
    height: 35px;
}

button {
    background-color: #2d7d46;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
}

button:disabled {
    background-color: #b1e4c2;
}

button:enabled:hover {
    background-color: #1d4d2b;
}
</style>
