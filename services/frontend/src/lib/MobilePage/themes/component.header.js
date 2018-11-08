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
        borderBottom: '1px solid #ddd',
        fontWeight: 'bold',
    },
}
