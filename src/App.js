import React, { Component } from 'react'
import { primaryBlue } from './constants/colors'
import { Header, SubHeader, Headline, Title, Subheading } from './components/Typography'
import Tag from './components/Tag'
import Divider from './components/Divider'
import Avatar from './components/Avatar'

class App extends Component {
    render() {
        return (
            <div>
                <Header>Talent Pool</Header>
                <SubHeader>Filter</SubHeader>
                <Headline>Daniele Santos</Headline>
                <Title style={ { color: primaryBlue } }>Senior Manager</Title>
                <Subheading>Looking for a professional? Here you can find a vast range of great professionals.</Subheading>
                <Tag text="My-SQL" rightText="7 years" />
                <Divider />
                <Avatar />
            </div>
        )
    }
}

export default App
