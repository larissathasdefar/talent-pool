import React from 'react'
import { habilityTagList, white } from '../constants/colors'
import styled from 'styled-components'

const Tag = styled.div`
    background-color: ${habilityTagList};
    transition: opacity 0.3s;
    color: ${white};
    padding: 6px;
    fontSize: 14px;
    border-radius: 4px;
    width: fit-content
    &:hover {
        opacity: 0.9;
    }
`
const RightText = styled.span`
    opacity: 0.7;
`

export default ({ text, rightText, style }) => (
    <Tag
        style={ style }>
        { text } <RightText>{ `| ${rightText}` }</ RightText>
    </Tag>
)
