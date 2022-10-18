<script lang="ts">
import { useChampStore } from '@/stores/Champ'
import { computed, reactive, ref, watch } from 'vue'

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
            skin: '',
            skinName: '',
            reactiveData,
        })

        watch(reactiveData, () => {
            state.skin = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${getName.value}_0.jpg`
            state.skinName = getName.value
        })

        const changeActiveSkin = (event: Event) => {
            const champion = getChamp.value
            const skins = champion.data[getName.value].skins
            state.skin = (event.target as HTMLImageElement).src.replace('loading', 'splash')
            for (let i = 0; i < skins.length; i++) {
                if (
                    (event.target as HTMLImageElement).src.includes(
                        skins[i].num
                    )
                ) {
                    state.skinName = skins[skins[i].num].name
                    break
                }
                state.skinName = skins[0].name
            }
            if (state.skinName === 'default') state.skinName = getName.value
            // eslint-disable-next-line no-undef
            const icons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.skin')
            icons.forEach((icon) => {
                icon.classList.add('inactive')
            })
            const removeInactive = (
                event.target as HTMLImageElement
            ).classList.remove('inactive')
            const setActive = (event.target as HTMLImageElement).classList.add(
                'active'
            )
        }

        return {
            state,
            changeActiveSkin,
            getChamp,
            getName,
        }
    },

    mounted() {
        this.state.skin = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.getName}_0.jpg`
    }
}

</script>

<template>
    <div class="lux-wrapper">
        <div><img alt="Luxanna" class="lux" :src="state.skin" /></div>
        <p>{{ state.skinName }}</p>
        <div class="skinner">
            <img v-on:click="changeActiveSkin" v-for="image in state.reactiveData.data[getName].skins" :key="image.num"
                :class="[image.num === 0 ? 'active' : 'inactive', 'skin']"
                :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${getName}_${image.num}.jpg`">
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
