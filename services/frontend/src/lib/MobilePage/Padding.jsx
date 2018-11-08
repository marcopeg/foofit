import React from 'react'
import PropTypes from 'prop-types'

const Padding = ({ children }) => {
    console.warn('MobilePage.Padding is deprecated and will be removed')
    return (
        <div style={{ padding: '20px 10px' }}>
            {children}
        </div>
    )
}

Padding.propTypes = {
    children: PropTypes.any, // eslint-disable-line
}

export default Padding
