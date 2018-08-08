import React from 'react'
import { divider } from '../constants/colors'

const styles = {
    divider: {
        border: `0.5px solid ${divider}`,   // Chrome and Safari
        backgroundColor: divider,   // Firefox and Opera
        color: divider  // IE
    }
}

export default ({ style }) => <hr style={ { ...styles.divider, ...style } } />
