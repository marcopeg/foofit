import { getThemeVar } from './variables'
import { flexCentered } from './mixins'

export default {
    input: {
        ...flexCentered,
        backgroundColor: 'transparent',
    },
    'input--block': {
        width: '100%',
    },
    'input--centered': {
        textAlign: 'center',
    },
    'input--small': {
        fontSize: getThemeVar('___', 'text__small'),
        paddingTop: getThemeVar('___', 'VSpace') / 2,
        paddingBottom: getThemeVar('___', 'VSpace') / 2,
        paddingLeft: getThemeVar('___', 'HSpace') / 2,
        paddingRight: getThemeVar('___', 'HSpace') / 2,
    },
    'input--normal': {
        fontSize: getThemeVar('___', 'text__normal'),
        paddingTop: getThemeVar('___', 'VSpace'),
        paddingBottom: getThemeVar('___', 'VSpace'),
        paddingLeft: getThemeVar('___', 'HSpace'),
        paddingRight: getThemeVar('___', 'HSpace'),
    },
    'input--big': {
        fontSize: getThemeVar('___', 'text__big'),
        paddingTop: getThemeVar('___', 'VSpace') * 2,
        paddingBottom: getThemeVar('___', 'VSpace') * 2,
        paddingLeft: getThemeVar('___', 'HSpace') * 2,
        paddingRight: getThemeVar('___', 'HSpace') * 2,
    },
}
