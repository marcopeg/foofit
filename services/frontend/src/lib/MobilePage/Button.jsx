/* eslint react/prefer-stateless-function: off */

import React from 'react'
import PropTypes from 'prop-types'
import { borderRadius } from './variables'

const styles = {
    primary: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#1e8eff',
        color: '#fff',
        borderTop: '1px solid #1e8eff',
        borderBottom: '1px solid #1e8eff',
        borderLeft: '1px solid #1e8eff',
        borderRight: '1px solid #1e8eff',
        borderRadius,
    },
    primaryClicked: {
        background: '#fff',
        color: '#1e8eff',
    },
    small: {},
    normal: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 10,
        paddingRigt: 10,
        fontSize: 16,
    },
    big: {},
}

const getStyle = (type, size, block, isClicked) => {
    const style = {
        ...styles[type],
        ...(isClicked ? styles[`${type}Clicked`] : {}),
        ...styles[size],
    }

    if (block) {
        style.width = '100%'
    }

    return style
}

class Button extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            isClicked: false,
        }
    }

    componentWillUnmount () {
        clearTimeout(this.timer)
    }

    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick()
        }
        this.setState({ isClicked: true })
        this.timer = setTimeout(() => this.setState({ isClicked: false }), 200)
    }

    render () {
        const { children, type, block, size, ...props } = this.props
        return (
            <button
                {...props}
                style={getStyle(type, size, block, this.state.isClicked)}
                onClick={this.onClick}
            >
                {children}
            </button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.any, // eslint-disable-line
    type: PropTypes.oneOf(['primary']),
    size: PropTypes.oneOf([ 'small', 'normal', 'big' ]),
    block: PropTypes.bool,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    type: 'primary',
    size: 'normal',
    block: false,
    onClick: null,
}

export default Button
