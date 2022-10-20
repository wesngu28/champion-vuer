import type { RootObject } from './DataDragon'

export interface AbilityState {
    name: string
    desc: string
    champion: RootObject
}

export interface SkinState {
    skin: string
    skinName: string
    champion: RootObject
}
