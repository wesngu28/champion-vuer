<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            skin: '/Lux_Original.png',
            skinName: 'Lux',
        }
    },

    methods: {
        changeActiveSkin(event: Event) {
            this.skin = (event.target as HTMLImageElement).src.replace(
                'Icon',
                ''
            )
            const lastSlash =
                (event.target as HTMLImageElement).src.indexOf('_') + 1
            const fileExtensionPeriod = (
                event.target as HTMLImageElement
            ).src.lastIndexOf('.')
            const parseName = (event.target as HTMLImageElement).src
                .substring(lastSlash, fileExtensionPeriod)
                .replaceAll('_', ' ')
            this.skinName = parseName.replace('Icon', '') + ' Lux'
            // eslint-disable-next-line no-undef
            const icons: NodeListOf<HTMLImageElement> =
                this.$el.querySelectorAll('div > div > img')
            icons.forEach((icon) => {
                icon.classList.add('inactive')
            })
            const removeInactive = (
                event.target as HTMLImageElement
            ).classList.remove('inactive')
            const setActive = (event.target as HTMLImageElement).classList.add(
                'active'
            )
        },
    },
})
</script>

<template>
    <div class="lux-wrapper">
        <img alt="Luxanna" class="lux" :src="skin" />
        <p>{{ skinName }}</p>
        <div>
            <img class="active" src="/Lux_OriginalIcon.png" />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_SorceressIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_SpellthiefIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_CommandoIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_ImperialIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Steel_LegionIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Star_GuardianIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_ElementalistIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Lunar_EmpressIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Pajama_GuardianIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Battle_AcademiaIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Prestige_Battle_AcademiaIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Dark_CosmicIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_CosmicIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_PorcelainIcon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Prestige_Battle_Academia_(2022)Icon.png"
            />
            <img
                class="inactive"
                v-on:click="changeActiveSkin"
                src="/Lux_Prestige_PorcelainIcon.png"
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
}
.lux {
    display: block;
    margin: 0 auto 2rem;
    width: 100%;
    height: auto;
    border-radius: 10%;
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
