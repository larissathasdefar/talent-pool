import React, { Component } from 'react'

const styles = {
    icon: {
        height: '48px',
        width: '48px'
    }
}

// TODO: valid to accept the supported icons
// TODO: put images in /assets
export class Icon extends Component {
    constructor(props) {
        super(props)
        this.state = { hover: false }
    }

    handleSetHover() {
        this.setState({ hover: true })
    }

    handleUnsetHover() {
        this.setState({ hover: false })
    }

    render() {
        const { hover } = this.state
        const { icon } = this.props
        const getIcon = (icon, hover) => 
            `https://app.vanhack.com/Content/img/shared/navbar/${icon}${hover ? '' : '-outline'}.svg`
        return (
            <img
                src={ getIcon(icon, hover) }
                style={ styles.icon }
                onMouseEnter={ () => this.handleSetHover() }
                onMouseLeave={ () => this.handleUnsetHover() }
            />
        )
    }
}

export const JobIcon = () => <Icon icon="myJobs" />
export const MessagesIcon = () => <Icon icon="messages" />
export const MoreIcon = () => <Icon icon="more" />
export const TalentIcon = () => <Icon icon="talent" />
