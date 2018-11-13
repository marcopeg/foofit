import React from 'react'
import PropTypes from 'prop-types'
import { getThemeStyle, getThemeVar } from '../../themes'
import { ThemeContext } from '../../MobilePage'

const getWrapperStyle = theme => ({
    ...getThemeStyle(theme.name, 'PageFooter').wrapper,
    height: getThemeVar(theme.name, 'footerHeight'),
})

const PageFooter = ({ children }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div style={getWrapperStyle(theme)}>
                <div style={getThemeStyle(theme.name, 'PageFooter').inner}>
                    {children}
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
)

// necessary to detect the presence inside the MobilePage wrapper
PageFooter.displayName = 'PageFooter'

PageFooter.propTypes = {
    children: PropTypes.any, // eslint-disable-line
}

export default PageFooter
