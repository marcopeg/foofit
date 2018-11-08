import { getThemeVar } from './variables'

export default {
    wrapper: {
        display: 'flex',
        height: getThemeVar('___', 'headerHeight'),
    },
    inner: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        fontWeight: 'bold',
    },
}
