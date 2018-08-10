import React from 'react'
import styled from 'styled-components'
import { silver } from '../constants/colors'

const defaultImage = 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png'

const Avatar = styled.img`
    border-radius: 164px;
    width: 64px;
    height: 64px;
    background-size: cover;
    background-color: ${silver};
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.9;
    }
`

export default ({ src, style }) => (
    <Avatar
        src={ src || defaultImage }
        style={ style }
    />
)
