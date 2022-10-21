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

        const changeActiveSkinAndState = (
            event: Event,
            champ: RootObject,
            name: string
        ) => {
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
        <nuxt-img
            v-on:click="
                (event) => changeActiveSkinAndState(event, getChamp, getName)
            "
            v-for="image in state.champion.data[getName].skins"
            :key="image.num"
            :class="[
                `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${getName}_${image.num}.jpg` ===
                state.skin
                    ? 'slideshow'
                    : 'dead',
                'lux',
            ]"
            :alt="`${image.name} splash`"
            :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${getName}_${image.num}.jpg`"
        />
        <p>{{ state.skinName }}</p>
        <div class="skinner">
            <nuxt-img
                v-on:click="
                    (event) =>
                        changeActiveSkinAndState(event, getChamp, getName)
                "
                v-for="image in state.champion.data[getName].skins"
                :key="image.num"
                :alt="`${image.name} loading`"
                :class="[image.num === 0 ? 'active' : 'inactive', 'skin']"
                :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${getName}_${image.num}.jpg`"
            />
        </div>
    </div>
</template>

<style scoped>
.skinner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: fit-content;
}

.skin {
    width: 5%;
    height: auto;
}

.lux-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lux {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10%;
}

p {
    font-size: 0.75rem;
    padding: 0.5rem;
}
@media (max-width: 480px) {

    .lux-wrapper {
        width: 100vw;
        position: relative;
    }
    .skin {
        width: 10%;
    }
}

@media (min-width: 480px) and (max-width: 800px) {

    .skin {
        width: 7%;
    }
}

@media (min-width: 1280px) {
    .lux {
        margin: 0 2rem 0 0;
    }

    p {
        font-size: 1rem;
    }

    .lux-wrapper {
        padding: 1rem;
        position: relative;
        margin-bottom: 7rem;
    }

    .skinner {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: fit-content;
        position: absolute;
        bottom: -7rem;
    }
}

.slideshow {
    opacity: 1;
    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
}

.dead {
    opacity: 0;
    height: 0;
    width: 0;
}

.active {
    opacity: 100%;
}

.inactive {
    opacity: 25%;
}
</style>
