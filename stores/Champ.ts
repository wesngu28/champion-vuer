import type { RootObject } from '@/models/DataDragon'
import lux from './Lux.json'

interface Stater {
    champ: RootObject
    name: string
}

export const useChampStore = defineStore('Champ', {
    state: () =>
        ({
            champ: lux,
            name: 'Lux',
        } as Stater),
    getters: {
        getChamp: (state) => state.champ,
        getName: (state) => state.name,
    },
    actions: {
        async fetchChamp(text: string) {
            try {
                const response = await fetch(
                    `https://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion/${text}.json`
                )
                const champJson = await response.json()
                this.champ = champJson
                this.name = text
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },
    },
})
