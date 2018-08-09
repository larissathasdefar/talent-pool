import React from 'react'
import { primaryBlue } from '../constants/colors'

const styles = {
    checkbox: {
        border: `1px solid ${primaryBlue}`,
        width: '100%',
        padding: '15px',
        borderRadius: '8px'
    }
}

export default ({ style, ...props }) => (
    <input 
        type="text"
        style={ { ...styles.checkbox, ...style } }
        { ...props }
    />
)
