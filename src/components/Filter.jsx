import React, { Fragment, Component } from 'react'
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
        name: 'english',
        options: [
            { label: 'Basic', value: '1' },
            { label: 'Intermediate', value: '2' },
            { label: 'Advanced', value: '3' },
            { label: 'Fluent', value: '4' }
        ]
    }, {
        header: 'Canadian visa status',
        name: 'visa',
        options: [
            { label: 'Open work permit', value: '5' },
            { label: 'Permanent resident', value: '6' }
        ]
    }
]

class Filter extends Component {

    handleChangeFilter({ name, value }) {
        this.props.onChangeFilter(name, value)
    }

    render() {
        return (
            <List
                items={ items }
                style={ styles.capitalize }
                renderItem={ ({ header, name, options }) => (
                    <Fragment>
                        <Headline>
                            { header }
                        </Headline>
                        <List
                            items={ options }
                            renderItem={ option => (
                                <Checkbox
                                    name={ name }
                                    onChange={ event => this.handleChangeFilter(
                                        event.target
                                    ) }
                                    { ...option }
                                />
                            )}
                        />
                    </Fragment>
                ) }
            />
        )
    }
}

export default Filter
