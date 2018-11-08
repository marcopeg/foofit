/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage, { List, Text, Button } from 'lib/MobilePage'
import { updatePrograms } from '../programs.service'

const mapState = (state, { match }) => {
    const program = state.programs.items.find(i => i.id === match.params.programId)
    const training = program
        ? program.trainings.find(i => i.id === match.params.trainingId)
        : null

    const exercisesMap = training
        ? program.exercises.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
        : null

    const exercises = training
        ? training.progression
            .map(item => ({
                ...item,
                ...exercisesMap[item.id],
                duration: `${item.value}${exercisesMap[item.id].type === 'duration' ? 's' : ' reps'}`,
            }))
        : null

    return {
        training,
        exercises,
        isNotFound: (
            Boolean(!program && state.programs.items.length)
            || Boolean(!training && program)
        ),
    }
}

const mapDispatch = (dispatch, { history, match }) => {
    return {
        loadPrograms: () => dispatch(updatePrograms()),
        startTraining: () => history.push(`${match.url}/play`),
    }
}

class TrainingDetails extends React.PureComponent {
    componentDidMount () {
        if (!this.props.training) this.props.loadPrograms()
    }

    renderBody () {
        if (this.props.isNotFound) {
            return (
                <Text onClick={this.props.goBack}>
                    training not found, click here to go to the list
                </Text>
            )
        }

        if (!this.props.training) {
            return (
                <Text>loading...</Text>
            )
        }

        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    <Button block onClick={this.props.startTraining}>start training</Button>
                </div>
                <List
                    items={this.props.exercises}
                    subtitleProp={'duration'}
                />
            </div>
        )
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Header>
                    {this.props.training ? this.props.training.title : '...'}
                </MobilePage.Header>
                <MobilePage.Body withPadding>
                    {this.renderBody()}
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

const trainingType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
})

const exerciseType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
})

TrainingDetails.propTypes = {
    loadPrograms: PropTypes.func.isRequired,
    startTraining: PropTypes.func.isRequired,
    training: trainingType,
    exercises: PropTypes.arrayOf(exerciseType),
    isNotFound: PropTypes.bool.isRequired,
}

TrainingDetails.defaultProps = {
    training: null,
    exercises: null,
}

export default connect(mapState, mapDispatch)(TrainingDetails)
