import React from 'react'
import PropTypes from 'prop-types'
import { getThemeStyle } from '../themes'
import { ThemeContext } from '../MobilePage'

const getStyle = (theme, size, block, override) => ({
    ...getThemeStyle(theme, 'input').input,
    ...getThemeStyle(theme, 'input')[`input--${size}`],
    ...(block ? getThemeStyle(theme, 'input')['input--block'] : {}),
    ...(block ? getThemeStyle(theme, 'input')['input--centered'] : {}),
    ...override,
})

const getClassName = (theme, centered, className) =>
    [
        `mbp-theme-${theme}__input`,
        centered ? `mbp-theme-${theme}__input--centered` : '',
        className,
    ].join(' ')

const Input = ({ size, block, centered, className, style, ...props }) => (
    <ThemeContext.Consumer>
        {theme => (
            <input
                {...props}
                className={getClassName(theme.name, centered, className)}
                style={getStyle(theme.name, size, block, centered, style)}
            />
        )}
    </ThemeContext.Consumer>
)

Input.propTypes = {
    size: PropTypes.oneOf([ 'small', 'normal', 'big' ]),
    block: PropTypes.bool,
    centered: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
}

Input.defaultProps = {
    size: 'normal',
    block: false,
    centered: false,
    style: {},
    className: '',
}

export default Input
