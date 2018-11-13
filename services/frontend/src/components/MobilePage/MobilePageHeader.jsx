import React from 'react'
import PropTypes from 'prop-types'
import { getThemeStyle, getThemeVar } from './themes'
import { ThemeContext } from './MobilePage'

const getWrapperStyle = theme => ({
    ...getThemeStyle(theme.name, 'header').wrapper,
    height: getThemeVar(theme.name, 'headerHeight'),
})

const MobilePageHeader = ({ children }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div style={getWrapperStyle(theme)}>
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
