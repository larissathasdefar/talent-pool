import React from 'react'
import { silver } from '../constants/colors'

const styles = {
    avatar: {
        borderRadius: '34px',
        width: '64px',
        height: '64px',
        backgroundSize: 'cover',
        backgroundColor: silver
    }
}

const defaultImage = 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png'

export default ({ src, style }) => <img src={ src || defaultImage } style={ { ...styles.avatar, ...style } } />

