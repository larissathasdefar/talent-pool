import React, { Fragment } from 'react'
import { primaryBlue } from '../constants/colors'

const styles = {
    checkbox: {
        border: `1px solid ${primaryBlue}`
    }
}

export default ({ label, value, checked, style, ...props }) => (
    <Fragment>
        <input 
            type="checkbox" 
            checked={ checked }
            value={ value } 
            style={ { ...styles.checkbox, ...style } }
            { ...props }
        />
        { label }
    </Fragment>
)
