import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'
import momentDuration from 'moment-duration-format'

momentDuration(moment)

const Duration = ({ value }) => {
    if (!value) return '00:00'
    if (value < 60) return `00:${moment.duration(value, 'seconds').format('ss')}`
    return moment.duration(value, 'seconds').format('hh:mm:ss')
}

Duration.propTypes = {
    value: PropTypes.number.isRequired,
}

export default Duration
