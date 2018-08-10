import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
    height: 48px;
    width: 48px;
    transition: background-image 0.2s;
    background-image: url(https://app.vanhack.com/Content/img/shared/navbar/${({ icon }) => icon}-outline.svg);
    background-size: cover;
    &:hover {
        background-image: url(https://app.vanhack.com/Content/img/shared/navbar/${({ icon }) => icon}.svg);
    }
`

// TODO: valid to accept the supported icons
// TODO: put images in /assets

export const JobIcon = () => <Icon icon="myJobs" />
export const MessagesIcon = () => <Icon icon="messages" />
export const MoreIcon = () => <Icon icon="more" />
export const TalentIcon = () => <Icon icon="talent" />
