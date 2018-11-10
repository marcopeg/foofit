import React from 'react'
import PropTypes from 'prop-types'
import RemoteImage from 'components/RemoteImage'

const ExerciseImg = ({ id, title, value, width, height, ...props }) => (
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
        spinnerColor={'#1e8eff'}
    />
)

ExerciseImg.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default ExerciseImg
