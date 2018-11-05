import React from 'react'
import PropTypes from 'prop-types'
import MobilePageHeader from './MobilePageHeader'
import MobilePageFooter from './MobilePageFooter'
import MobilePageBody from './MobilePageBody'
import { colors } from './variables'

const styles = {
    wrapper: {
        width: '100%',
        height: '100%',
        background: colors.white,
    },
}

export const ThemeContext = React.createContext('default')

const hasComponent = (children, cmp) =>
    React.Children.toArray(children)
        .find(i => i.type.displayName === cmp.name) !== undefined

const MobilePage = ({ children, theme, withHeader, withFooter, footerOnTop }) => (
    <ThemeContext.Provider
        value={{
            name: theme,
            hasHeader: withHeader || hasComponent(children, MobilePageHeader),
            hasFooter: withFooter || hasComponent(children, MobilePageFooter),
            hasBody: hasComponent(children, MobilePageBody),
            footerOnTop,
        }}
    >
        <div style={styles.wrapper}>
            {children}
        </div>
    </ThemeContext.Provider>
)

MobilePage.propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line
    theme: PropTypes.oneOf(['default']),
    withHeader: PropTypes.bool,
    withFooter: PropTypes.bool,
    footerOnTop: PropTypes.bool,
}

MobilePage.defaultProps = {
    theme: 'default',
    withHeader: false,
    withFooter: false,
    footerOnTop: false,
}

MobilePage.Header = MobilePageHeader
MobilePage.Footer = MobilePageFooter
MobilePage.Body = MobilePageBody

export default MobilePage
