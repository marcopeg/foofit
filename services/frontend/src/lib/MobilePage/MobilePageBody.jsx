import React from 'react'
import PropTypes from 'prop-types'
import ContainerDimension from 'react-container-dimensions'
import { ThemeContext } from './MobilePage'

const getComputedStyle = (theme, { noScroll, withPadding }) => {
    const headerHeight = 60 // @TODO: get it from variables
    const footerHeight = 60 // @TODO: get it from variables
    const style = {}

    // scrolling
    if (!noScroll) {
        style.overflow = 'scroll'
        style.WebkitOverflowScrolling = 'touch'
    }

    // apply padding
    if (withPadding) {
        style.paddingLeft = 10
        style.paddingRight = 10
    }

    // header & footer spacing
    if (theme.hasHeader && theme.hasFooter) {
        style.height = `calc(100% - ${headerHeight}px - ${footerHeight}px - 2px)`
    } else if (theme.hasHeader) {
        style.height = `calc(100% - ${headerHeight}px)`
    } else if (theme.hasFooter) {
        style.height = `calc(100% - ${footerHeight}px)`
    } else {
        style.height = '100%'
    }

    return style
}

const MobilePageBody = ({ children, ...props }) => (
    <ThemeContext.Consumer>
        {theme => {
            const content = typeof children === 'function'
                ? (
                    <ContainerDimension>
                        {(dimensions) =>
                            React.createElement(children, {
                                ...dimensions,
                                theme,
                            })
                        }
                    </ContainerDimension>
                )
                : children

            return (
                <div style={getComputedStyle(theme, props)}>
                    {content}
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

MobilePageBody.propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line
    noScroll: PropTypes.bool,
    withPadding: PropTypes.bool,
}

MobilePageBody.defaultProps = {
    noScroll: false,
    withPadding: false,
}

export default MobilePageBody
