import React from 'react'
import styled from 'styled-components'
import { primaryBlue, white } from '../constants/colors'

const Button = styled.button`
    background-color: ${primaryBlue};
    transition: opacity 0.3s;
    color: ${white};
    border-radius: 8px;
    border: 0px;
    font-size: 16px;
    text-transform: uppercase;
    padding: 14px 30px;
    min-width: 100px;
    &:hover {
        opacity: 0.9;
    }
`

export default ({ children }) => <Button type="button">{ children }</Button>
