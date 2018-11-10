import React from 'react'
import PropTypes from 'prop-types'
import { getThemeStyle } from './themes'
import { ThemeContext } from './MobilePage'

const MobilePageHeader = ({ children }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div style={getThemeStyle(theme.name, 'header').wrapper}>
                <div style={getThemeStyle(theme.name, 'header').inner}>
                    {children}
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
)

// necessary to detect the presence inside the MobilePage wrapper
MobilePageHeader.displayName = 'MobilePageHeader'

MobilePageHeader.propTypes = {
    children: PropTypes.any, // eslint-disable-line
}

export default MobilePageHeader
