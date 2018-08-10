import React, { Fragment } from 'react'
import styled from 'styled-components'
import { primaryBlue } from '../constants/colors'

const CheckBox = styled.input`
    border: 1px solid ${primaryBlue};
`

export default ({ label, ...props }) => (
    <Fragment>
        <CheckBox
            type="checkbox"
            { ...props }
        />
        { label }
    </Fragment>
)
