import React from 'react'
import { silverBlue } from '../constants/colors'

const styles = {
    appbar: {
        backgroundColor: silverBlue,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px -2px',
        flex: 1,
        height: '100px'
    }
}

export default ({ children, style }) => (
    <div style={ { ...styles.appbar, ...style } }>
        { children }
    </div>
)
