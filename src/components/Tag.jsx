import React from 'react'
import { habilityTagList, white } from '../constants/colors'
import styled from 'styled-components'

const Tag = styled.div`
    background-color: ${habilityTagList};
    transition: opacity 0.3s;
    color: ${white};
    padding: 6px;
    font-size: 14px;
    border-radius: 4px;
    width: fit-content;
    margin: 4px;
    text-transform: capitalize;
    display: inline-block;
    &:hover {
        opacity: 0.9;
    }
`
const RightText = styled.span`
    opacity: 0.7;
`

export default ({ text, rightText, style }) => (
    <Tag style={ style }>
        { text } { rightText && <RightText>{ `| ${rightText}` }</ RightText> }
    </Tag>
)
