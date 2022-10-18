<script lang="ts">
import { useChampStore } from '@/stores/Champ'
import { computed, reactive, ref } from 'vue'
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

        const reactiveData = ref(getChamp)

        const state = reactive({
            name: 'Illumination',
            desc: "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.",
            reactiveData,
        })

        const changeActiveAbility = (event: Event) => {
            // eslint-disable-next-line no-undef
            const icons: NodeListOf<HTMLImageElement> =
                document.querySelectorAll('.ability')
            const lastSlash =
                (event.target as HTMLImageElement).src.lastIndexOf('/') + 1
            const fileExtensionPeriod = (
                event.target as HTMLImageElement
            ).src.lastIndexOf('.')

            if (Object.keys(getChamp.value).length === 0) {
                const parseName = (event.target as HTMLImageElement).src
                    .substring(lastSlash, fileExtensionPeriod)
                    .replace('_', ' ')
                const upperName = parseName.split(' ')
                for (let i = 0; i < upperName.length; i++) {
                    upperName[i] =
                        upperName[i][0].toUpperCase() +
                        upperName[i].substring(1)
                }
                state.name = upperName.join(' ')
                if (state.name === 'Light Binding')
                    state.desc =
                        'Lux releases a sphere of light that binds and deals damage to up to two enemy units.'
                if (state.name === 'Prismatic Barrier')
                    state.desc =
                        'Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.'
                if (state.name === 'Lucent Singularity')
                    state.desc =
                        'Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.'
                if (state.name === 'Final Spark')
                    state.desc =
                        "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration."
            } else {
                const champion = getChamp.value
                const name = getName.value
                const abilities = champion.data[name].spells
                const passive = champion.data[name].passive
                for (let i = 0; i < abilities.length; i++) {
                    if (
                        (event.target as HTMLImageElement).src.includes(
                            abilities[i].image.full
                        )
                    ) {
                        state.name = abilities[i].name
                        state.desc = abilities[i].description
                        break
                    }
                    state.name = passive.name
                    state.desc = passive.description
                }
            }

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
            changeActiveAbility,
            getChamp,
            getName,
        }
    },
}
</script>

<template>
    <div v-if="Object.keys(state.reactiveData)[0]">
        <img
            class="active ability"
            v-on:click="changeActiveAbility"
            :src="`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/passive/${state.reactiveData.data[getName].passive.image.full}`"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            :src="`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/spell/${state.reactiveData.data[getName].spells[0].image.full}`"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            :src="`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/spell/${state.reactiveData.data[getName].spells[1].image.full}`"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            :src="`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/spell/${state.reactiveData.data[getName].spells[2].image.full}`"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            :src="`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/spell/${state.reactiveData.data[getName].spells[3].image.full}`"
        />
    </div>
    <div v-else>
        <img
            class="active ability"
            v-on:click="changeActiveAbility"
            src="/illumination.png"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            src="/light_binding.png"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            src="/prismatic_barrier.png"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            src="/lucent_singularity.png"
        />
        <img
            class="inactive ability"
            v-on:click="changeActiveAbility"
            src="/final_spark.png"
        />
    </div>
    <AbilityInfo
        v-if="
            state.desc.includes('ignites the energy') &&
            Object.keys(state.reactiveData)[0]
        "
        :desc="state.reactiveData.data[getName].passive.description"
        :abilityname="state.reactiveData.data[getName].passive.name"
    />
    <AbilityInfo
        v-else-if="Object.keys(state.reactiveData)[0]"
        :desc="state.desc"
        :abilityname="state.name"
    />
    <AbilityInfo v-else :desc="state.desc" :abilityname="state.name" />
</template>

<style scoped>
div {
    display: flex;
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
