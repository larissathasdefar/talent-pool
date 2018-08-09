import React, { Component } from 'react'
import { defaultColor } from './constants/colors'
import { Header, SubHeader, Headline, Title, Subheading } from './components/Typography'
import Tag from './components/Tag'
import Avatar from './components/Avatar'
import Button from './components/Button'
import AppBar from './components/AppBar'
import Menu from './components/Menu'
import Filter from './components/Filter'
import SearchField from './components/SearchField'

const styles = {
    container: {
        color: defaultColor,
        maxWidth: '1440px',
        margin: '0 auto'
    },
    pageHeader: {
        padding: '0px 75px'
    },
    body: {
        display: 'flex',
        flexDirection: 'row'
    },
    filter: {
        width: 'fit-content',
        marginRight: '15px'
    },
    talents: {
        flex: 1
    }
}

// TODO: Ask the Vanhack Logo Employer
class App extends Component {
    render() {
        return (
            <div style={ styles.container }>
                <AppBar>
                    <img src="https://app.vanhack.com/Content/img/shared/navbar/VanHack-logo-free.svg" />
                    <Menu />
                </AppBar>
                <div style={ styles.pageHeader }>
                    <Header>Talent Pool</Header>
                    <Subheading>Looking for a professional? Here you can find a vast range of great professionals.</Subheading>
                    <div style={ styles.body }>
                        <div style={ styles.filter }>
                            <SubHeader>Filters</SubHeader>
                            <Filter />
                        </div>
                        <div style={ styles.talents }>
                            <SearchField />
                        </div>
                    </div>
                </div>
                <Headline>Daniele Santos</Headline>
                <Title>Senior Manager</Title>
                <Button label="Search" />
                <Tag text="My-SQL" rightText="7 years" />
                <Avatar />
            </div>
        )
    }
}

export default App
