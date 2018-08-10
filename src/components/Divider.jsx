import React from 'react'
import styled from 'styled-components'
import { divider } from '../constants/colors'

const Divider = styled.hr`
    border: 0.5px solid ${divider};   // Chrome and Safari
    background-color: divider;   // Firefox and Opera
    color: divider;  // IE
`

export default ({ style }) => <Divider style={ style } />
