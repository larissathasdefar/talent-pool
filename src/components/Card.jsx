import React from 'react'

const styles = {
    card: {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 8px',
        borderRadius: '4px',
        padding: '16px',
        maxWidth: '800px',
        margin: '14px 0px'
    }
}

export default ({ children, style }) => (
    <div style={ { ...styles.card, ...style } }>
        { children }
    </div>
)
