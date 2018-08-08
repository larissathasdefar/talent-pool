import React from 'react'
import { habilityTagList, white } from '../constants/colors'

const styles = {
    tag: {
        backgroundColor: habilityTagList,
        color: white,
        padding: '6px',
        fontSize: '14px',
        borderRadius: '4px',
        width: 'fit-content'
    },
    rightText: {
        opacity: '0.7'
    }
}

export default ({ text, rightText, style }) => (
    <div 
        style={ { ...styles.tag, ...style } }>
        { text } <span style={ styles.rightText }>{ `| ${rightText}` }</span>
    </div>
)
