/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage from 'lib/MobilePage'
import { updatePrograms } from '../programs.service'

const mapState = (state, { match }) => {
    const program = state.programs.items.find(i => i.id === match.params.id)
    return {
        program,
        isNotFound: Boolean(!program && state.programs.items.length),
    }
}

const mapDispatch = (dispatch, { history }) => {
    return {
        loadPrograms: () => dispatch(updatePrograms()),
        goBack: () => history.push('/welcome'),
    }
}

class ProgramsDetails extends React.PureComponent {
    componentDidMount () {
        if (!this.props.program) this.props.loadPrograms()
    }

    renderBody () {
        if (this.props.isNotFound) {
            return (
                <div>
                    <p onClick={this.props.goBack}>program not found, click here to go to the list</p>
                </div>
            )
        }

        if (!this.props.program) {
            return (
                <div>loading...</div>
            )
        }

        return (
            <div>{this.props.program.title}</div>
        )
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Header>
                    {this.props.program ? this.props.program.title : '...'}
                </MobilePage.Header>
                <MobilePage.Body>
                    <div style={{ margin: '20px 10px' }}>
                        {this.renderBody()}
                    </div>
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

const programType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
})

ProgramsDetails.propTypes = {
    loadPrograms: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    program: programType,
    isNotFound: PropTypes.bool.isRequired,
}

ProgramsDetails.defaultProps = {
    program: null,
}

export default connect(mapState, mapDispatch)(ProgramsDetails)
