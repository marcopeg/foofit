import { getThemeVar } from './variables'
import { flexCentered } from './mixins'

export default {
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: getThemeVar('___', 'VSpace'),
        paddingBottom: getThemeVar('___', 'VSpace'),
        paddingLeft: getThemeVar('___', 'HSpace'),
        paddingRight: getThemeVar('___', 'HSpace'),
    },
    body: {
        flex: 1,
    },
    handler: {
        ...flexCentered,
    },
}
