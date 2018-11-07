import React from 'react'
import PropTypes from 'prop-types'
import RemoteImage from 'lib/RemoteImage'
// import Duration from './Duration'

const ExerciseDisplay = ({ id, title, value, elapsed, width, height, ...props }) => {
    // const remainingMs = value * 1000 - elapsed
    return (
        <div>
            <RemoteImage
                src={`/images/${id}.png`}
                alt={title}
                width={width}
                height={height}
                style={{
                    backgroundColor: '#fff',
                }}
                altStyle={{
                    color: '#666',
                    fontSize: 22,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }}
            />
            {/* <Duration unit={'ms'} value={remainingMs} /> */}
        </div>
    )
}

ExerciseDisplay.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    elapsed: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default ExerciseDisplay
