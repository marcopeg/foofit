/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage from 'lib/MobilePage'
import { updatePrograms } from '../programs.service'

const mapState = () => ({})

const mapDispatch = { updatePrograms }

class ProgramsList extends React.PureComponent {
    componentDidMount () {
        this.props.updatePrograms()
    }

    render () {
        return (
            <MobilePage>
                <MobilePage.Header>
                    Programs
                </MobilePage.Header>
                <MobilePage.Body>
                    programsList
                </MobilePage.Body>
            </MobilePage>
        )
    }
}

ProgramsList.propTypes = {
    updatePrograms: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(ProgramsList)
