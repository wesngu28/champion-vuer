<script lang="ts">
import { computed } from 'vue'
import { reactive } from 'vue'
import { useChampStore } from '../stores/Champ'
import type { SearchState } from '../models/SearchState'
export default {
    setup() {
        const state = reactive({
            text: '',
        } as SearchState)

        const store = useChampStore()

        const getChamp = computed(() => {
            return store.getChamp
        })

        const getStatus = computed(() => {
            return store.getStatus
        })

        const disableButton = (text: string) => {
            return text.length === 0
        }

        const printMeText = async () => {
            state.text = state.text.replace(' ', '')
            state.text = state.text.replace('\'', '')
            state.text = state.text[0].toUpperCase() + state.text.substring(1, state.text.length)
            console.log(state.text)
            store.fetchChamp(state.text)
            if(getStatus.value === 403) state.text = 'Error occurred'
        }
        return {
            state,
            printMeText,
            disableButton,
            getChamp,
            getStatus
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
            @keyup.enter="printMeText"
        />
        <button v-on:click="printMeText" :disabled="disableButton(state.text)">
            Find Champion
        </button>
    </div>
</template>

<style scoped>
div {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

input {
    background-color: silver;
    width: 315px;
    height: 35px;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

button {
    background-color: #2d7d46;
    border: none;
    color: white;
    padding: 8px 8px;
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
