import { getThemeVar } from '../../themes/variables'
import { flexCentered } from '../../lib/mixins'

export default {
    wrapper: {
        ...flexCentered,
        display: 'inline-flex',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: getThemeVar('___', 'borderRadius'),
        backgroundColor: 'transparent',
        outline: 'none',
    },
    wrapper__block: {
        width: '100%',
    },
    wrapper__small: {
        fontSize: getThemeVar('___', 'text__small'),
        paddingTop: getThemeVar('___', 'VSpace') / 2,
        paddingBottom: getThemeVar('___', 'VSpace') / 2,
        paddingLeft: getThemeVar('___', 'HSpace') / 2,
        paddingRight: getThemeVar('___', 'HSpace') / 2,
    },
    wrapper__normal: {
        fontSize: getThemeVar('___', 'text__normal'),
        paddingTop: getThemeVar('___', 'VSpace'),
        paddingBottom: getThemeVar('___', 'VSpace'),
        paddingLeft: getThemeVar('___', 'HSpace'),
        paddingRight: getThemeVar('___', 'HSpace'),
    },
    wrapper__big: {
        fontSize: getThemeVar('___', 'text__big'),
        paddingTop: getThemeVar('___', 'VSpace') * 2,
        paddingBottom: getThemeVar('___', 'VSpace') * 2,
        paddingLeft: getThemeVar('___', 'HSpace') * 2,
        paddingRight: getThemeVar('___', 'HSpace') * 2,
    },
    wrapper__link: {
        borderColor: 'transparent',
    },
}
