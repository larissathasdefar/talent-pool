import React from 'react'

const styles = {
    list: {
        padding: '0px',
        margin: '0px'
    },
    listItem: {
        padding: '6px 12px 6px 12px'
    }
}

export default ({ items }) => (
    <ul style={ styles.list }>
        { items.map(item => <li style={ styles.listItem }>{ item }</li>) }
    </ul>
)
