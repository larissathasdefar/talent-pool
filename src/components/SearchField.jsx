import React from 'react'
import { primaryBlue } from '../constants/colors'
import styled from 'styled-components'

const Checkbox = styled.input`
    border: 1px solid ${primaryBlue};
    width: 100%;
    padding: 15px;
    border-radius: 8px;
`

export default ({ style, ...props }) => (
    <Checkbox
        type="text"
        style={ style }
        { ...props }
    />
)
