import React from 'react'
import PropTypes from 'prop-types'
import { getThemeStyle } from './themes'
import { ThemeContext } from './MobilePage'

const MobilePageFooter = ({ children }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div style={getThemeStyle(theme.name, 'footer').wrapper}>
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
