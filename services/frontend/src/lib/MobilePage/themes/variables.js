import { variables as white } from './theme.white'
import { variables as c1 } from './theme.c1'

export const defaults = {
    headerHeight: 60,
    footerHeight: 60,
    VSpace: 10,
    HSpace: 10,
    text__small: 12,
    text__normal: 16,
    text__big: 20,
    borderRadius: 0,
    black: '#000',
    white: '#fff',
}

export const variables = {
    ___: defaults,
    white,
    c1,
}

export const getThemeVar = (theme, name) => {
    let v1
    // eslint-disable-next-line
    try { v1 = variables[theme][name] } catch (err) {}
    if (v1 !== undefined) return v1
    if (variables.___[name] !== undefined) return variables.___[name]
    console.error(`[MobilePage] themes.getThemeVar("${name}") is not defined`)
}
