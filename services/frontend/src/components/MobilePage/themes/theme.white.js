import './theme.white.css'

export const colors = {
    primary: '#2196F3',
    darkPrimary: '#0073cc',
    lightPrimary: '#4fb2ff',
    text: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#757575',
    accent: '#03A9F4',
    divider: '#BDBDBD',
}

export const variables = {}

export default {
    MobilePage: {
        wrapper: {
            backgroundColor: colors.text,
            color: colors.textPrimary,
        },
    },
    PageHeader: {
        wrapper: {
            backgroundColor: colors.primary,
            color: colors.text,
        },
    },
    PageFooter: {
        wrapper: {
            backgroundColor: colors.primary,
        },
    },
    Divider: {
        borderColor: colors.divider,
    },
    Button: {
        wrapper: {
            transition: 'all 0.2s ease',
        },
        'wrapper--primary': {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            color: colors.text,
        },
        'wrapper--primary--active': {
            backgroundColor: colors.lightPrimary,
            color: colors.text,
        },
        'wrapper--secondary': {
            borderColor: colors.primary,
            color: colors.primary,
        },
        'wrapper--secondary--active': {
            backgroundColor: colors.lightPrimary,
        },
        'wrapper--link': {
            color: colors.primary,
        },
        'wrapper--link--active': {
            backgroundColor: colors.lightPrimary,
        },
    },
    List: {
        wrapper: {
            borderColor: colors.divider,
        },
        item: {
            borderBottomColor: colors.divider,
        },
    },
    Loading: {
        spinner: {
            color: colors.divider,
        },
    },
}
