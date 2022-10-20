import type { RootObject } from '@/models/DataDragon'

export const changeActiveAbility = (
    event: Event,
    champ: RootObject,
    name: string
) => {
    // eslint-disable-next-line no-undef
    const icons: NodeListOf<HTMLImageElement> =
        document.querySelectorAll('.ability')
    const target = event.target as HTMLImageElement
    const abilities = champ.data[name].spells
    const passive = champ.data[name].passive
    const state = { name: '', desc: '' }
    for (let i = 0; i < abilities.length; i++) {
        if (target.src.includes(abilities[i].image.full)) {
            state.name = abilities[i].name
            state.desc = abilities[i].description
            break
        }
        state.name = passive.name
        state.desc = passive.description
    }

    icons.forEach((icon) => {
        icon.classList.add('inactive')
    })
    target.classList.remove('inactive')
    target.classList.add('active')
    return state
}
