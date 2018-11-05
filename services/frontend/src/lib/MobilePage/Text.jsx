import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ children, ...props }) => (
    <div {...props}>
        {children}
    </div>
)

Text.propTypes = {
    children: PropTypes.any, // eslint-disable-line
}

export default Text
