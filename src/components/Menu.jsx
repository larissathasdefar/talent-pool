import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../assets/images/profile.jpg'
import {
    JobIcon,
    MessagesIcon,
    MoreIcon,
    TalentIcon
} from './Icon'
import Avatar from './Avatar'
import { menuItem } from '../constants/colors'


const Menu = styled.div`
    display: flex;
`

const MenuItem = styled.div`
    margin: 0px 16px;
    align-items: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const Label = styled.div`
    text-align: center;
    text-transform: uppercase;
    color: ${menuItem};
`

const items = [
    { label: 'Talent', icon: <TalentIcon active />},
    { label: 'My jobs', icon: <JobIcon /> },
    { label: 'Message', icon: <MessagesIcon /> },
    { label: 'More', icon: <MoreIcon /> },
    {
        label: 'Profile',
        icon: (
            <Avatar
                src={ ProfilePicture }
                style={ { width: '48px', height: '48px' } }
            />
        )
    }
]

export default () => (
    <Menu>
        {
            items.map(({ label, icon }, index) => (
                <MenuItem key={ index }>
                    { icon }
                    <Label>{ label }</Label>
                </MenuItem>
            ))
        }
    </Menu>
)
