import React from 'react'
import PropTypes from 'prop-types'
import { getThemeStyle } from '../themes'
import { ThemeContext } from '../MobilePage'

const getStyle = (theme, override = {}) => ({
    ...getThemeStyle(theme, 'divider'),
    ...override,
})

const Divider = ({ children, style, ...props }) => (
    <ThemeContext.Consumer>
        {theme => (
            <hr
                {...props}
                style={getStyle(theme.name, style)}
            />
        )}
    </ThemeContext.Consumer>
)

Divider.propTypes = {
    children: PropTypes.any, // eslint-disable-line
    width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
}

Divider.defaultProps = {
    width: '100%',
}

export default Divider
