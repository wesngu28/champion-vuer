<script lang="ts">
import { changeActiveSkin } from '@/helpers/changeActiveSkin'
import type { RootObject } from '@/models/DataDragon'
import { useChampStore } from '@/stores/Champ'
import { computed, nextTick, reactive, ref, watch } from 'vue'
import type { SkinState } from '../models/GeneralState'
export default {
    setup() {
        const store = useChampStore()

        const getChamp = computed(() => {
            return store.getChamp
        })

        const getName = computed(() => {
            return store.getName
        })

        const champion = ref(getChamp)

        const state: SkinState = reactive({
            skin: '',
            skinName: 'Lux',
            champion,
        })

        watch(champion, async () => {
            state.skin = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${getName.value}_0.jpg`
            state.skinName = getName.value
            nextTick(() => {
                // eslint-disable-next-line no-undef
                const icons: NodeListOf<HTMLImageElement> =
                    document.querySelectorAll('.skin')
                icons.forEach((icon) => {
                    icon.classList.remove('active')
                    icon.classList.add('inactive')
                })
                icons[0].classList.remove('inactive')
                icons[0].classList.add('active')
            })
        })

        const changeActiveSkinAndState = (event: Event, champ: RootObject, name: string) => {
            const stateChanges = changeActiveSkin(event, champ, name)
            state.skin = stateChanges.skin
            state.skinName = stateChanges.skinName
        }

        return {
            state,
            changeActiveSkinAndState,
            getChamp,
            getName,
        }
    },

    mounted() {
        this.state.skin = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.getName}_0.jpg`
    },
}
</script>

<template>
    <div class="lux-wrapper">
        <div><img alt="Luxanna" class="lux" :src="state.skin" /></div>
        <p>{{ state.skinName }}</p>
        <div class="skinner">
            <img
                v-on:click="(event) => changeActiveSkinAndState(event, getChamp, getName)"
                v-for="image in state.champion.data[getName].skins"
                :key="image.num"
                :class="[image.num === 0 ? 'active' : 'inactive', 'skin']"
                :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${getName}_${image.num}.jpg`"
            />
        </div>
    </div>
</template>

<style scoped>
.lux-wrapper {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    position: relative;
    margin-bottom: 7rem;
}

.lux {
    display: block;
    margin: 0 auto 2rem;
    width: 100%;
    height: auto;
    border-radius: 10%;
}

.skinner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: fit-content;
    position: absolute;
    bottom: -7rem;
}

.skin {
    width: 5%;
    height: auto;
}

@media (min-width: 1024px) {
    .lux {
        margin: 0 2rem 0 0;
    }
}

.active {
    opacity: 100%;
}

.inactive {
    opacity: 25%;
}
</style>
