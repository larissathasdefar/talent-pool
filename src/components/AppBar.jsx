import React from 'react'
import { silverBlue } from '../constants/colors'

const styles = {
    appbar: {
        backgroundColor: silverBlue,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px -2px',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: '100px',
        padding: '0px 75px'
    }
}

export default ({ children, style }) => (
    <div style={ { ...styles.appbar, ...style } }>
        { children }
    </div>
)
