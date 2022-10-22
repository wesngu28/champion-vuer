import type { RootObject } from '@/models/DataDragon'
import lux from './Lux.json'

interface Stater {
    champ: RootObject
    name: string
    status: number
}

export const useChampStore = defineStore('Champ', {
    state: () =>
        ({
            champ: lux,
            name: 'Lux',
            status: 200
        } as Stater),
    getters: {
        getChamp: (state) => state.champ,
        getName: (state) => state.name,
        getStatus: (state) => state.status,
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
                this.status = 200
            } catch (error) {
                this.status = 403
            }
        },
    },
})
