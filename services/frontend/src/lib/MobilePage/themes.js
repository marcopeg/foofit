import getStyles from 'lib/get-styles'

export const availableThemes = [
    'default',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
]

export const variables = {
    ___: {
        headerHeight: 60,
        footerHeight: 60,
        bodyPaddingH: 10,
        bodyPaddingV: 10,
    },
    color: {
        default: '#fff',
        c1: '#7700ff',
        c2: '#0099ff',
        c3: '#57ad40',
        c4: '#eac017',
        c5: '#ed5353',
    },
    colorContrast: {
        default: '#666',
        c1: '#fff',
        c2: '#fff',
        c3: '#fff',
        c4: '#fff',
        c5: '#fff',
    },
}

export const getThemeVar = (theme, name) => {
    let v1
    // eslint-disable-next-line
    try { v1 = variables[name][theme] } catch (err) {}
    if (v1 !== undefined) return v1
    if (variables.___[name] !== undefined) return variables.___[name]
    console.error(`[MobilePage] themes.getThemeVar("${name}") is not defined`)
}

const styles = {
    ___: {
        wrapper: {
            width: '100%',
            height: '100%',
        },
        header: {
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
        },
    },
    default: {
        wrapper: {
            backgroundColor: variables.color.default,
            color: variables.colorContrast.default,
        },
    },
    c1: {
        wrapper: {
            backgroundColor: variables.color.c1,
            color: variables.colorContrast.c1,
        },
    },
    c2: {
        wrapper: {
            backgroundColor: variables.color.c2,
            color: variables.colorContrast.c2,
        },
    },
    c3: {
        wrapper: {
            backgroundColor: variables.color.c3,
            color: variables.colorContrast.c3,
        },
    },
    c4: {
        wrapper: {
            backgroundColor: variables.color.c4,
            color: variables.colorContrast.c4,
        },
    },
    c5: {
        wrapper: {
            backgroundColor: variables.color.c5,
            color: variables.colorContrast.c5,
        },
    },
}

export const getThemeStyle = getStyles(styles)
