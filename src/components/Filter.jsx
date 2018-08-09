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
            { label: 'Basic', value: 'basic' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Advanced', value: 'advanced' },
            { label: 'Fluent', value: 'fluent' }
        ]
    }, {
        header: 'Canadian visa status',
        options: [
            { label: 'Open work permit', value: 'open_permit' },
            { label: 'Permanent resident', value: 'permanent_resident' }
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
