import React, { Component } from 'react'
import { primaryBlue } from './constants/colors'
import { Header, SubHeader, Headline, Title, Subheading } from './components/Typography'
import Tag from './components/Tag'
import Divider from './components/Divider'
import Avatar from './components/Avatar'
import List from './components/List'
import Checkbox from './components/Checkbox'
import Card from './components/Card'
import Button from './components/Button'
import AppBar from './components/AppBar';

class App extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Card>
                    <Header>Talent Pool</Header>
                    <SubHeader>Filter</SubHeader>
                    <Headline>Daniele Santos</Headline>
                    <Title style={ { color: primaryBlue } }>Senior Manager</Title>
                    <Subheading>Looking for a professional? Here you can find a vast range of great professionals.</Subheading>
                    <Button label="Search" />
                </Card>
                <Tag text="My-SQL" rightText="7 years" />
                <Divider />
                <Avatar />
                <List items={ ['Array', 'String', 'Boolean', 'Potato'] } />
                <Checkbox label="Basic" value="basic" onClick={ () => alert('You clicked on me! :O') } />
            </div>
        )
    }
}

export default App
