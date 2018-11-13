import React from 'react'
import PropTypes from 'prop-types'
import { getThemeStyle, getThemeVar } from './themes'
import { ThemeContext } from './MobilePage'

const getWrapperStyle = theme => ({
    ...getThemeStyle(theme.name, 'footer').wrapper,
    height: getThemeVar(theme.name, 'footerHeight'),
})

const MobilePageFooter = ({ children }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div style={getWrapperStyle(theme)}>
                <div style={getThemeStyle(theme.name, 'footer').inner}>
                    {children}
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
)

// necessary to detect the presence inside the MobilePage wrapper
MobilePageFooter.displayName = 'MobilePageFooter'

MobilePageFooter.propTypes = {
    children: PropTypes.any, // eslint-disable-line
}

export default MobilePageFooter
