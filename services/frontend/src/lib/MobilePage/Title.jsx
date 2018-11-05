import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    normal: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 1.5,
    },
}

const Title = ({ children, level, ...props }) => (
    <div {...props} style={styles[level]}>
        {children}
    </div>
)

Title.propTypes = {
    children: PropTypes.any, // eslint-disable-line
    level: PropTypes.oneOf(['normal']),
}

Title.defaultProps = {
    level: 'normal',
}

export default Title
