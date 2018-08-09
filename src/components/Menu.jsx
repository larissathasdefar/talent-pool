import React from 'react'
import {
    JobIcon,
    MessagesIcon,
    MoreIcon,
    TalentIcon
} from './Icon'
import Avatar from './Avatar'
import { menuItem } from '../constants/colors'

const styles = {
    container: {
        display: 'flex'
    },
    menuItem: {
        margin: '0px 16px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
    },
    label: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: menuItem
    },
    avatar: {
        width: '48px',
        height: '48px'
    }
}

const items = [
    { label: 'Talent', icon: <TalentIcon />},
    { label: 'My jobs', icon: <JobIcon /> },
    { label: 'Message', icon: <MessagesIcon /> },
    { label: 'More', icon: <MoreIcon /> },
    {
        label: 'Profile',
        icon: (
            <Avatar 
                src="https://app.vanhack.com/User/getInstancePhoto?entityId=132027" 
                style={ styles.avatar }
            />
        )
    }
]

export default () => (
    <div style={ styles.container }>
        {
            items.map(({ label, icon }) => (
                <div style={ styles.menuItem }>
                    { icon }
                    <div style={ styles.label }>
                        { label }
                    </div>
                </div>
            ))
        }
    </div>
)
