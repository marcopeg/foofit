/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { flexCentered } from 'app/mixins'

const cleanUrl = url => {
    const s1 = url.replace(/([^:])(\/\/+)/g, '$1/')
    return s1.indexOf('//') === 0
        ? s1.substr(1)
        : s1
}

const mapState = ({ app }, { src }) => ({
    src: cleanUrl(`${app.backend}${src}`),
})

class RemoteImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoading: true,
            hasError: false,
            b64: null,
        }
    }

    componentDidMount () {
        this.fetchImage()
    }

    fetchImage = () => {
        const image = new Image()
        const canvas = document.createElement('canvas')

        image.onload = () => {
            canvas.width = image.naturalWidth
            canvas.height = image.naturalWidth
            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height)
            this.setState({
                isLoading: false,
                b64: canvas.toDataURL(),
            })
        }

        image.onerror = () => {
            this.setState({ isLoading: false, hasError: true })
        }
        image.crossOrigin = 'Anonymous'
        image.src = this.props.src
    }

    renderImage = () => (
        <div style={{
            ...flexCentered,
            width: this.props.width,
            height: this.props.height,
            ...this.props.style,
        }}>
            <img
                src={this.props.src}
                alt={this.props.alt}
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    ...this.props.imgStyle,
                }}
            />
        </div>
    )

    renderAlt = () => (
        <div style={{
            ...flexCentered,
            width: this.props.width,
            height: this.props.height,
            overflow: 'hidden',
            ...this.props.style,
        }}>
            <span style={this.props.altStyle}>{this.props.alt}</span>
        </div>
    )

    renderLoader = () => (
        <div style={{
            ...flexCentered,
            width: this.props.width,
            height: this.props.height,
            overflow: 'hidden',
            ...this.props.style,
        }}>
            <Loader
                type={this.props.spinnerType}
                color={this.props.spinnerColor}
                width={this.props.width * 0.3}
                height={this.props.height * 0.3}
            />
        </div>
    )

    renderBody = () => {
        if (this.state.isLoading) {
            return this.renderLoader()
        }

        if (this.state.hasError) {
            return this.renderAlt()
        }

        return this.renderImage()
    }

    render () {
        const body = this.renderBody()
        return body
    }
}

RemoteImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    imgStyle: PropTypes.object,
    altStyle: PropTypes.object,
    spinnerColor: PropTypes.string,
    spinnerType: PropTypes.oneOf([ 'ThreeDots', 'TailSpin' ]),
}

RemoteImage.defaultProps = {
    style: {},
    imgStyle: {},
    altStyle: {
        textTransform: 'uppercase',
    },
    spinnerColor: 'inherith',
    spinnerType: 'ThreeDots',
}

export default connect(mapState)(RemoteImage)
