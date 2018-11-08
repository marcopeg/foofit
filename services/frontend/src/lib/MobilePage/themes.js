// https://www.materialpalette.com/indigo/blue
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
        VSpace: 10,
        HSpace: 10,
        text__small: 12,
        text__normal: 16,
        text__big: 20,
        borderRadius: 0,
        black: '#000',
        white: '#fff',
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
    colorLight: {
        default: '#1e8eff',
        c1: '#d1abfc',
        c2: '#44b2fc',
        c3: '#77c960',
        c4: '#fcd744',
        c5: '#fc7171',
    },
    colorPrimary: {
        default: '#1e8eff',
        c1: '#f700ff',
        c2: '#ff6600',
        c3: '#ad4057',
        c4: '#c017ea',
        c5: '#5353ed',
    },
    colorPrimaryContrast: {
        default: '#fff',
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

const flexCentered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
        space: {
            vertical: {
                marginTop: getThemeVar('___', 'VSpace') / 2,
                marginBottom: getThemeVar('___', 'VSpace') / 2,
            },
            horizontal: {
                marginLeft: getThemeVar('___', 'HSpace') / 2,
                marginRight: getThemeVar('___', 'HSpace') / 2,
            },
        },
        button: {
            wrapper: {
                ...flexCentered,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'transparent',
                borderRadius: getThemeVar('___', 'borderRadius'),
                backgroundColor: 'transparent',
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
                textDecoration: 'underline',
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
        button: {
            wrapper: {
                color: getThemeVar('c1', 'colorContrast'),
                borderColor: getThemeVar('c1', 'colorContrast'),
            },
            wrapper__primary: {
                color: getThemeVar('c1', 'colorPrimaryContrast'),
                backgroundColor: getThemeVar('c1', 'colorPrimary'),
                borderColor: getThemeVar('c1', 'colorPrimary'),
            },
            wrapper__primary__active: {
                backgroundColor: getThemeVar('c1', 'colorLight'),
                borderColor: getThemeVar('c1', 'colorLight'),
            },
            wrapper__secondary__active: {
                backgroundColor: getThemeVar('c1', 'colorLight'),
            },
            wrapper__link__active: {
                backgroundColor: getThemeVar('c1', 'colorLight'),
            },
        },
    },
    c2: {
        wrapper: {
            backgroundColor: variables.color.c2,
            color: variables.colorContrast.c2,
        },
        button: {
            wrapper: {
                color: getThemeVar('c2', 'colorContrast'),
                borderColor: getThemeVar('c2', 'colorContrast'),
            },
            wrapper__primary: {
                color: getThemeVar('c2', 'colorPrimaryContrast'),
                backgroundColor: getThemeVar('c2', 'colorPrimary'),
                borderColor: getThemeVar('c2', 'colorPrimary'),
            },
            wrapper__primary__active: {
                backgroundColor: getThemeVar('c2', 'colorLight'),
                borderColor: getThemeVar('c2', 'colorLight'),
            },
            wrapper__secondary__active: {
                backgroundColor: getThemeVar('c2', 'colorLight'),
            },
            wrapper__link__active: {
                backgroundColor: getThemeVar('c2', 'colorLight'),
            },
        },
    },
    c3: {
        wrapper: {
            backgroundColor: variables.color.c3,
            color: variables.colorContrast.c3,
        },
        button: {
            wrapper: {
                color: getThemeVar('c3', 'colorContrast'),
                borderColor: getThemeVar('c3', 'colorContrast'),
            },
            wrapper__primary: {
                color: getThemeVar('c3', 'colorPrimaryContrast'),
                backgroundColor: getThemeVar('c3', 'colorPrimary'),
                borderColor: getThemeVar('c3', 'colorPrimary'),
            },
            wrapper__primary__active: {
                backgroundColor: getThemeVar('c3', 'colorLight'),
                borderColor: getThemeVar('c3', 'colorLight'),
            },
            wrapper__secondary__active: {
                backgroundColor: getThemeVar('c3', 'colorLight'),
            },
            wrapper__link__active: {
                backgroundColor: getThemeVar('c3', 'colorLight'),
            },
        },
    },
    c4: {
        wrapper: {
            backgroundColor: variables.color.c4,
            color: variables.colorContrast.c4,
        },
        button: {
            wrapper: {
                color: getThemeVar('c4', 'colorContrast'),
                borderColor: getThemeVar('c4', 'colorContrast'),
            },
            wrapper__primary: {
                color: getThemeVar('c4', 'colorPrimaryContrast'),
                backgroundColor: getThemeVar('c4', 'colorPrimary'),
                borderColor: getThemeVar('c4', 'colorPrimary'),
            },
            wrapper__primary__active: {
                backgroundColor: getThemeVar('c4', 'colorLight'),
                borderColor: getThemeVar('c4', 'colorLight'),
            },
            wrapper__secondary__active: {
                backgroundColor: getThemeVar('c4', 'colorLight'),
            },
            wrapper__link__active: {
                backgroundColor: getThemeVar('c4', 'colorLight'),
            },
        },
    },
    c5: {
        wrapper: {
            backgroundColor: variables.color.c5,
            color: variables.colorContrast.c5,
        },
        button: {
            wrapper: {
                color: getThemeVar('c5', 'colorContrast'),
                borderColor: getThemeVar('c5', 'colorContrast'),
            },
            wrapper__primary: {
                color: getThemeVar('c5', 'colorPrimaryContrast'),
                backgroundColor: getThemeVar('c5', 'colorPrimary'),
                borderColor: getThemeVar('c5', 'colorPrimary'),
            },
            wrapper__primary__active: {
                backgroundColor: getThemeVar('c5', 'colorLight'),
                borderColor: getThemeVar('c5', 'colorLight'),
            },
            wrapper__secondary__active: {
                backgroundColor: getThemeVar('c5', 'colorLight'),
            },
            wrapper__link__active: {
                backgroundColor: getThemeVar('c5', 'colorLight'),
            },
        },
    },
}

export const getThemeStyle = getStyles(styles)
