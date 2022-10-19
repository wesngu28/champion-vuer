<script lang="ts">
import { changeActiveAbility } from '@/helpers/changeActiveAbility'
import type { AbilityState } from '../models/GeneralState'
import type { RootObject } from "../models/DataDragon";
import { useChampStore } from '@/stores/Champ'
import { computed, nextTick, reactive, ref, watch } from 'vue'
import AbilityInfo from './AbilityInfo.vue'

export default {
    components: {
        AbilityInfo: AbilityInfo,
    },

    setup() {
        const store = useChampStore()

        const getChamp = computed(() => {
            return store.getChamp
        })

        const getName = computed(() => {
            return store.getName
        })

        const champion = ref(getChamp)

        const state: AbilityState = reactive({
            name: '',
            desc: '',
            champion,
        })

        const changeActiveAbilityAndState = (event: Event, champ: RootObject, name: string) => {
            const stateChanges = changeActiveAbility(event, champ, name)
            state.name = stateChanges.name
            state.desc = stateChanges.desc
        }

        watch(champion, async () => {
            nextTick(() => {
                state.name = state.champion.data[getName.value].passive.name
                state.desc =
                    state.champion.data[getName.value].passive.description
                // eslint-disable-next-line no-undef
                const icons: NodeListOf<HTMLImageElement> =
                    document.querySelectorAll('.ability')
                icons.forEach((icon) => {
                    icon.classList.remove('active')
                    icon.classList.add('inactive')
                })
                icons[0].classList.remove('inactive')
                icons[0].classList.add('active')
            })
        })

        return {
            state,
            changeActiveAbilityAndState,
            getChamp,
            getName,
        }
    },

    mounted() {
        this.state.name =
            this.state.champion.data[this.getName].passive.name
        this.state.desc =
            this.state.champion.data[this.getName].passive.description
    },
}
</script>

<template>
    <div class="parent">
        <div>
            <img class="active ability" v-on:click="(event) => changeActiveAbilityAndState(event, getChamp, getName)"
                :src="`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/passive/${state.champion.data[getName].passive.image.full}`" />
            <img class="inactive ability" v-on:click="(event) => changeActiveAbilityAndState(event, getChamp, getName)"
                v-for="image in state.champion.data[getName].spells" :key="image.id"
                :src="`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/spell/${image.image.full}`" />
        </div>
        <AbilityInfo :desc="state.desc" :abilityname="state.name" />
    </div>
</template>

<style scoped>
.parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin: 1rem;
    padding: 1rem;
}

.active {
    opacity: 100%;
}

.inactive {
    opacity: 25%;
}

img {
    margin: 1rem;
    padding: 0.25rem;
}
</style>
