import React from 'react'
import PropTypes from 'prop-types'
import Duration from './Duration'

const ExerciseCountdown = ({ value, elapsed }) => {
    const remainingMs = value * 1000 - elapsed
    return <Duration unit={'ms'} value={remainingMs} />
}

ExerciseCountdown.propTypes = {
    value: PropTypes.number.isRequired,
    elapsed: PropTypes.number.isRequired,
}

export default ExerciseCountdown
