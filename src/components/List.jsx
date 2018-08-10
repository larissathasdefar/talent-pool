import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
    padding: 0px;
    margin: 0px;
`
const ListItem = styled.li`
    margin: 12px 0px;
    list-style: none;
`

export default ({ items, renderItem, style }) => (
    <List>
        {
            items.map((item, index) => (
                <ListItem
                    key={ index }
                    style={ style }>
                    {
                        renderItem
                            ? renderItem(item)
                            : item
                    }
                </ListItem>
            ))
        }
    </List>
)
