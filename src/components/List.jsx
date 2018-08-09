import React from 'react'

const styles = {
    list: {
        padding: '0px',
        margin: '0px'
    },
    listItem: {
        padding: '6px 0px',
        listStyle: 'none'
    }
}

export default ({ items, renderItem, style }) => (
    <ul style={ styles.list }>
        {
            items.map((item, index) => (
                <li
                    key={ index }
                    style={ { ...styles.listItem, ...style } }>
                    { 
                        renderItem
                            ? renderItem(item) 
                            : item 
                    }
                </li>
            ))
        }
    </ul>
)
