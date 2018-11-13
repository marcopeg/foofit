import React from 'react'
import PropTypes from 'prop-types'
import MobilePageHeader from './MobilePageHeader'
import MobilePageFooter from './MobilePageFooter'
import MobilePageBody from './MobilePageBody'
import { getThemeStyle, availableThemes } from './themes'

export const ThemeContext = React.createContext('default')

const getWrapperStyle = (theme, width, height) => ({
    ...getThemeStyle(theme, 'wrapper'),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
})

const hasComponent = (children, cmp) =>
    React.Children.toArray(children)
        .find(i => i.type.displayName === cmp.name) !== undefined

const MobilePage = ({ children, theme, width, height, withHeader, withFooter, footerOnTop }) => (
    <ThemeContext.Provider
        value={{
            name: theme,
            width,
            height,
            hasHeader: withHeader || hasComponent(children, MobilePageHeader),
            hasFooter: withFooter || hasComponent(children, MobilePageFooter),
            hasBody: hasComponent(children, MobilePageBody),
            footerOnTop,
        }}
    >
        <div
            className={`mbp-theme-${theme}`}
            style={getWrapperStyle(theme, width, height)}
        >
            {children}
        </div>
    </ThemeContext.Provider>
)

MobilePage.propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line
    theme: PropTypes.oneOf(availableThemes),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    withHeader: PropTypes.bool,
    withFooter: PropTypes.bool,
    footerOnTop: PropTypes.bool,
}

MobilePage.defaultProps = {
    theme: 'white',
    width: null,
    height: null,
    withHeader: false,
    withFooter: false,
    footerOnTop: false,
}

MobilePage.Header = MobilePageHeader
MobilePage.Footer = MobilePageFooter
MobilePage.Body = MobilePageBody

export default MobilePage
