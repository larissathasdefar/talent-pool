import React from 'react'
import styled from 'styled-components'
import myJobs from '../assets/images/icons/myJobs.png'
import myJobsOutline from '../assets/images/icons/myJobs-outline.png'
import messages from '../assets/images/icons/messages.png'
import messagesOutline from '../assets/images/icons/messages-outline.png'
import more from '../assets/images/icons/more.png'
import moreOutline from '../assets/images/icons/more-outline.png'
import talent from '../assets/images/icons/talent.png'

const images = {
    myJobs: { normal: myJobsOutline, hover: myJobs },
    messages: { normal: messagesOutline, hover: messages },
    more: { normal: moreOutline, hover: more },
    talent: { normal: talent, hover: talent }
}

const getNormalIcon = (active, icon) => active
    ? images[icon].hover
    : images[icon].normal

const Icon = styled.div`
    height: 48px;
    width: 48px;
    transition: background-image 0.2s;
    background-image: url(${({ icon, active }) => getNormalIcon(active, icon)});
    background-size: cover;
    &:hover {
        background-image: url(${({ icon }) => images[icon].hover});
    }
`

// TODO: valid to only accept the supported icons
export const JobIcon = props => <Icon icon="myJobs" {...props} />
export const MessagesIcon = props => <Icon icon="messages" {...props} />
export const MoreIcon = props => <Icon icon="more" {...props} />
export const TalentIcon = props => <Icon icon="talent" {...props} />
