import React, { Component } from 'react'
import Select from 'react-select'

class SearchField extends Component {
    render() {
        return (
            <Select
                isMulti
                isSearchable
                classNamePrefix="select-skills"
                { ... this.props }
            />
        )
    }
}

export default SearchField
