
export const colors = {
    primary: '#2196F3',
    darkPrimary: '#1976D2',
    lightPrimary: '#BBDEFB',
    text: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#757575',
    accent: '#03A9F4',
    divider: '#BDBDBD',
}

export const variables = {}

export default {
    wrapper: {
        backgroundColor: colors.text,
        color: colors.textPrimary,
    },
    header: {
        wrapper: {
            backgroundColor: colors.primary,
            color: colors.text,
        },
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
}
