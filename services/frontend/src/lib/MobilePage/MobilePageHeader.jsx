import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './MobilePage'

const styles = {
    default: {
        wrapper: {
            display: 'flex',
            height: 60,
            backgroundColor: '#fff',
        },
        inner: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid #666',
            fontWeight: 'bold',
        },
    },
}

const MobilePageHeader = ({ children }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div style={styles[theme.name].wrapper}>
                <div style={styles[theme.name].inner}>
                    {children}
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
)

MobilePageHeader.propTypes = {
    children: PropTypes.any, // eslint-disable-line
}

export default MobilePageHeader
