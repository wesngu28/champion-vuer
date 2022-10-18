<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            name: "Illumination",
            desc: "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target."
        }
    },

    methods: {
        changeActiveAbility(event: Event) {
            const lastSlash = (event.target as HTMLImageElement).src.lastIndexOf('/') + 1
            const fileExtensionPeriod = (event.target as HTMLImageElement).src.lastIndexOf('.')
            const parseName = (event.target as HTMLImageElement).src.substring(lastSlash, fileExtensionPeriod).replace('_', ' ')
            const upperName = parseName.split(" ")
            for(let i = 0; i < upperName.length; i++) {
                upperName[i] = upperName[i][0].toUpperCase() + upperName[i].substring(1)
            }
            this.name = upperName.join(" ")
            if(this.name === 'Light Binding') this.desc="Lux releases a sphere of light that binds and deals damage to up to two enemy units."
            if(this.name === 'Prismatic Barrier') this.desc="Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage."
            if(this.name === 'Lucent Singularity') this.desc="Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect."
            if(this.name === 'Final Spark') this.desc="After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration."
            // eslint-disable-next-line no-undef
            const icons: NodeListOf<HTMLImageElement> = document.querySelectorAll('img')
            icons.forEach(icon => {
                icon.classList.add("inactive")
            });
            const removeInactive = (event.target as HTMLImageElement).classList.remove("inactive")
            const setActive = (event.target as HTMLImageElement).classList.add("active")
        }
    },

    mounted() {
        this.name
    }

})
</script>

<script setup lang="ts">
import AbilityInfo from "./AbilityInfo.vue";
</script>

<template>
    <div>
        <img class="active" v-on:click="changeActiveAbility" src="/illumination.png" />
        <img class="inactive" v-on:click="changeActiveAbility" src="/light_binding.png" />
        <img class="inactive" v-on:click="changeActiveAbility" src="/prismatic_barrier.png" />
        <img class="inactive" v-on:click="changeActiveAbility" src="/lucent_singularity.png" />
        <img class="inactive" v-on:click="changeActiveAbility" src="/final_spark.png" />
    </div>

    <AbilityInfo :desc="desc" :abilityname="name"/>
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