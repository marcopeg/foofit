/**
 * Moment is fucking heavy, can we implement this function manually?
 */

// import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'
import momentDuration from 'moment-duration-format'

momentDuration(moment)

const Duration = ({ value, unit }) => {
    const seconds = unit === 's' ? value : Math.floor(value / 1000)
    if (!seconds) return '00:00'
    if (seconds < 60) return `00:${moment.duration(seconds, 'seconds').format('ss')}`
    return moment.duration(seconds, 'seconds').format('hh:mm:ss')
}

Duration.propTypes = {
    value: PropTypes.number.isRequired,
    unit: PropTypes.oneOf([ 's', 'ms' ]).isRequired,
}

export default Duration
