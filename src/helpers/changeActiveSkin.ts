import type { RootObject } from "@/models/DataDragon"

export const changeActiveSkin = (event: Event, champ: RootObject, name: string) => {
    const state = { skin: '', skinName: '' }
    const target = event.target as HTMLImageElement
    state.skin = target.src.replace('loading', 'splash')
    let skinIndex = state.skin.replace('.jpg', '')
    skinIndex = skinIndex.substring(
        skinIndex.lastIndexOf('_') + 1,
        skinIndex.length
    )
    for (
        let i = 0;
        i < champ.data[name].skins.length;
        i++
    ) {
        if (
            String(
                champ.data[name].skins[i].num
            ) === skinIndex
        )
            state.skinName =
                champ.data[name].skins[i].name
    }
    2
    if (state.skinName === 'default') state.skinName = name
    // eslint-disable-next-line no-undef
    const icons: NodeListOf<HTMLImageElement> =
        document.querySelectorAll('.skin')
    icons.forEach((icon) => {
        icon.classList.remove('active')
        icon.classList.add('inactive')
    })
    target.classList.remove('inactive')
    target.classList.add('active')
    return state
}