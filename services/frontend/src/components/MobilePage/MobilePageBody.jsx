import React from 'react'
import PropTypes from 'prop-types'
import ContainerDimension from 'react-container-dimensions'
import { getThemeStyle } from './themes'
import { getThemeVar } from './themes/variables'
import { ThemeContext } from './MobilePage'

const getWrapperStyle = (theme, { noScroll, withPadding, flex }) => {
    const headerHeight = getThemeVar(theme, 'headerHeight')
    const footerHeight = getThemeVar(theme, 'footerHeight')
    const style = { ...getThemeStyle(theme.name, 'body') }

    // flexbox body
    if (flex) {
        style.display = 'flex'
    }

    // scrolling
    if (!noScroll) {
        style.overflow = 'scroll'
        style.WebkitOverflowScrolling = 'touch'
    }

    // apply padding
    if (withPadding) {
        style.paddingLeft = getThemeVar(theme, 'HSpace')
        style.paddingRight = getThemeVar(theme, 'HSpace')
        style.paddingTop = getThemeVar(theme, 'VSpace')
        style.paddingBottom = getThemeVar(theme, 'VSpace')
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
                <div style={getWrapperStyle(theme, props)}>
                    {content}
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

// necessary to detect the presence inside the MobilePage wrapper
MobilePageBody.displayName = 'MobilePageBody'

MobilePageBody.propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line
    noScroll: PropTypes.bool,
    withPadding: PropTypes.bool,
    flex: PropTypes.bool,
}

MobilePageBody.defaultProps = {
    noScroll: false,
    withPadding: false,
    flex: false,
}

export default MobilePageBody
