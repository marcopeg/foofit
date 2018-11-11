import React from 'react'
import PropTypes from 'prop-types'
import { FaAngleRight } from 'react-icons/fa'
import { getThemeStyle } from '../../themes'
import { ThemeContext } from '../../MobilePage'

const ListItem = ({ children, onDisclose }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div
                style={getThemeStyle(theme.name, 'listItem').wrapper}
                onClick={onDisclose}
            >
                <div style={getThemeStyle(theme.name, 'listItem').body}>{children}</div>
                {onDisclose ? (
                    <div style={getThemeStyle(theme.name, 'listItem').handler}>
                        <FaAngleRight />
                    </div>
                ) : null}
            </div>
        )}
    </ThemeContext.Consumer>
)

ListItem.propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line
    onDisclose: PropTypes.func,
}

ListItem.defaultProps = {
    onDisclose: null,
}

export default ListItem
