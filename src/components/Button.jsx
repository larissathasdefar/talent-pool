import React from 'react'
import { primaryBlue, white } from '../constants/colors'

const styles = {
    button: {
        backgroundColor: primaryBlue,
        color: white,
        borderRadius: '8px',
        border: '0px',
        fontSize: '16px',
        textTransform: 'uppercase',
        padding: '14px 30px',
        minWidth: '100px'
    }
}

export default ({ label, style }) => (
    <button type="button" style={ { ...styles.button, ...style } }>
        { label }
    </button>
)
