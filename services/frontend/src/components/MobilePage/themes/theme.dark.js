// https://coolors.co/d8a720-52557f-37b291-e25434-bf1e36
import './theme.dark.css'

export const colors = {
    primary: '#E25434',
    darkPrimary: '#B9452B',
    lightPrimary: '#E77358',
    text: '#141414',
    textPrimary: '#EEE',
    textSecondary: '#FFF',
    accent: '#03A9F4',
    divider: '#666666',

    // additional colors
    lightText: '#333',
}

export const variables = {
    headerHeight: 90,
}

export default {
    wrapper: {
        backgroundColor: colors.text,
        color: colors.textPrimary,
    },
    header: {
        wrapper: {
            backgroundColor: colors.lightText,
            color: colors.textPrimary,
        },
    },
    footer: {
        wrapper: {
            backgroundColor: colors.lightText,
            color: colors.textPrimary,
        },
    },
    divider: {
        color: colors.divider,
        backgroundColor: colors.divider,
    },
    button: {
        wrapper: {
            transition: 'all 0.2s ease',
        },
        wrapper__primary: {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            color: colors.text,
        },
        wrapper__primary__active: {
            backgroundColor: colors.lightPrimary,
            color: colors.text,
        },
        wrapper__secondary: {
            borderColor: colors.primary,
            color: colors.primary,
        },
        wrapper__secondary__active: {
            backgroundColor: colors.lightPrimary,
        },
        wrapper__link: {
            color: colors.primary,
        },
        wrapper__link__active: {
            backgroundColor: colors.lightPrimary,
        },
    },
    list: {
        wrapper: {
            borderColor: colors.divider,
        },
        item: {
            borderBottomColor: colors.divider,
        },
    },
    loading: {
        spinner: {
            color: colors.divider,
        },
    },
}
