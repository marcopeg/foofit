// https://www.materialpalette.com/indigo/blue
import getStyles from 'lib/get-styles'

// basic components definitions
import wrapper from './component.wrapper'
import header from './component.header'
import title from './component.title'
import text from './component.text'
import space from './component.space'
import divider from './component.divider'
import button from './component.button'
import list from './component.list'
import listItem from './component.list-item'

// teme variations
import white from './theme.white'
import c1 from './theme.c1'

export const availableThemes = [
    'white',
    'c1',
]

const styles = {
    ___: {
        wrapper,
        header,
        title,
        text,
        space,
        divider,
        button,
        list,
        listItem,
    },
    white,
    c1,
}

export const getThemeStyle = getStyles(styles)
