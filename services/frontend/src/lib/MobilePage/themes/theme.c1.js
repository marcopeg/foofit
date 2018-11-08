
export const colors = {
    primary: '#9C27B0',
    darkPrimary: '#7B1FA2',
    lightPrimary: '#E1BEE7',
    text: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#757575',
    accent: '#009688',
    divider: '#E1BEE7',
}

export const variables = {}

export default {
    wrapper: {
        backgroundColor: colors.primary,
        color: colors.text,
    },
    divider: {
        borderColor: colors.divider,
    },
    button: {
        wrapper: {
            transition: 'all 0.2s ease',
        },
        wrapper__primary: {
            backgroundColor: colors.lightPrimary,
            borderColor: colors.lightPrimary,
            color: colors.primary,
        },
        wrapper__primary__active: {
            backgroundColor: colors.primary,
            color: colors.text,
        },
        wrapper__secondary: {
            borderColor: colors.text,
            color: colors.text,
        },
        wrapper__secondary__active: {
            backgroundColor: colors.lightPrimary,
        },
        wrapper__link: {
            color: colors.text,
        },
        wrapper__link__active: {
            backgroundColor: colors.lightPrimary,
        },
    },
    list: {
        wrapper: {
            borderColor: colors.lightPrimary,
        },
        item: {
            borderBottomColor: colors.lightPrimary,
        },
    },
}
