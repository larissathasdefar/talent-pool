import React, { Fragment } from 'react'
import List from './List'
import { Headline } from './Typography'
import Checkbox from './Checkbox'

const styles = {
    capitalize: {
        textTransform: 'capitalize'
    }
}

const items = [
    {
        header: 'English level',
        options: [
            { label: 'Basic', value: '1' },
            { label: 'Intermediate', value: '2' },
            { label: 'Advanced', value: '3' },
            { label: 'Fluent', value: '4' }
        ]
    }, {
        header: 'Canadian visa status',
        options: [
            { label: 'Open work permit', value: '5' },
            { label: 'Permanent resident', value: '6' }
        ]
    }
]

export default () => (
    <List
        items={ items }
        style={ styles.capitalize }
        renderItem={ ({ header, options }) => (
            <Fragment>
                <Headline>
                    { header }
                </Headline>
                <List
                    items={ options }
                    renderItem={ option => <Checkbox { ...option } /> }
                />
            </Fragment>
        ) }
    />
)
