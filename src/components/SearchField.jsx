import React, { Component } from 'react'
import Select from 'react-select'

class SearchField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null
        }
    }

    handleChange(selectedOption) {
        this.setState({ selectedOption })
    }

    render() {
        const { selectedOption } = this.state
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]

        return (
            <Select
                isMulti
                isSearchable
                value={ selectedOption }
                onChange={ () => this.handleChange() }
                options={ options }
                classNamePrefix="select-skills"
            />
        )
    }
}

export default SearchField
