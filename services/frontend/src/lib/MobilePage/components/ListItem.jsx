import React from 'react'
import PropTypes from 'prop-types'
import { FaAngleRight } from 'react-icons/fa'
import { ThemeContext } from '../MobilePage'

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    body: {
        flex: 1,
    },
    handler: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

const ListItem = ({ children, onDisclose }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div
                style={styles.wrapper}
                onClick={onDisclose}
            >
                <div style={styles.body}>{children}</div>
                {onDisclose ? (
                    <div style={styles.handler}>
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
