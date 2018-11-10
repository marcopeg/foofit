// https://www.materialpalette.com/indigo/blue
import getStyles from '../lib/get-styles'

// basic components definitions
import wrapper from '../MobilePage.style'
import header from '../MobilePageHeader.style'
import footer from '../MobilePageFooter.style'
import title from '../components/Title.style'
import text from '../components/Text.style'
import space from '../components/Space.style'
import divider from '../components/Divider.style'
import button from '../components/Button.style'
import input from '../components/Input.style'
import list from '../components/List.style'
import listItem from '../components/ListItem.style'

// teme variations
import white from './theme.white'
import dark from './theme.dark'
import c1 from './theme.c1'

export const availableThemes = [
    'white',
    'dark',
    'c1',
]

const styles = {
    ___: {
        wrapper,
        header,
        footer,
        title,
        text,
        space,
        divider,
        button,
        input,
        list,
        listItem,
    },
    white,
    dark,
    c1,
}

export const getThemeStyle = getStyles(styles)
