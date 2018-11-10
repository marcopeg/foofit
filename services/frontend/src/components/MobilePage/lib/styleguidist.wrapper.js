/* eslint-disable */
import React from 'react'
import MobilePage from '../MobilePage'

const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontFamily: 'monospace',
}

const inputStyle = {
    textAlign: 'right',
    width: 40,
    border: '1px solid #666',
    borderRadius: 4,
    padding: '2px 5px',
}

class MobilePageComponentWrapper extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            theme: 'white',
        }
    }

    render () {
        return (
            <div>
                <div style={wrapperStyle}>
                    <div>{' '}</div>
                    <div>
                        {'theme: '}
                        <select
                            value={this.state.theme}
                            onChange={(e) => this.setState({ theme: e.target.value })}
                            style={{ ...inputStyle, width: 80 }}
                            dir="rtl"
                        >
                            <option value={'white'}>white</option>
                            <option value={'dark'}>dark</option>
                            <option value={'c1'}>c1</option>
                        </select>
                    </div>
                </div>
                <div style={{ border: '5px solid #ddd' }}>
                    <MobilePage theme={this.state.theme}>
                        <MobilePage.Body withPadding>
                            {this.props.children}
                        </MobilePage.Body>
                    </MobilePage>
                </div>
            </div>
        )
    }
}

export default MobilePageComponentWrapper
