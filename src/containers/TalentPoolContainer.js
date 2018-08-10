import React, { Component } from 'react'
import { defaultColor } from '../constants/colors'
import Api from '../constants/api'
import { Header, SubHeader, Subheading } from '../components/Typography'
import AppBar from '../components/AppBar'
import Menu from '../components/Menu'
import Filter from '../components/Filter'
import SearchField from '../components/SearchField'
import '../assets/styles.css'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    color: ${defaultColor};
    max-width: 1440px;
    margin: 0 auto;
`
const PageHeader = styled.div`
    padding: 0px 75px;
`
const Body = styled.div`
    display: flex
    flex-direction: row;
`
const FilterContainer = styled.div`
    width: fit-content;
    margin-right: 15px;
`
const Results = styled.div`
    flex: 1
`

class TalentPoolContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [],
            candidates: []
        }
    }

    loadSearchTerms(term = '') {
        axios({
            url: `${Api}/LegacySkill/GetSearch`,
            data: {
                text: term,
                SkipCount: '0',
                MaxResultCount: '10'
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        })
            .then(({ data }) => this.setState({ options: data.result.items }))
    }

    // loadCandidates() {
    //     fetch(`${Api}/TalentPool/GetCandidates?EnglishLevel=0&VisaStatus=0&SkillIds=104&    SkipCount=0&MaxResultCount=10`)
    //         .then(response => response.json())
    //         .then(({ result }) => this.setState({ candidates: result.items }))
    // }

    componentDidMount() {
        this.loadSearchTerms()
    }

    render() {
        const { options } = this.state
        return (
            <Container>
                <AppBar>
                    <img
                        alt="VanHack Logo"
                        src="https://app.vanhack.com/Content/img/shared/navbar/VanHack-logo-free.svg"
                    />
                    <Menu />
                </AppBar>
                <PageHeader>
                    <Header>Talent Pool</Header>
                    <Subheading>Looking for a professional? Here you can find a vast range of great professionals.</Subheading>
                    <Body>
                        <FilterContainer>
                            <SubHeader>Filters</SubHeader>
                            <Filter />
                        </FilterContainer>
                        <Results>
                            <SearchField
                                options={ options }
                            />
                        </Results>
                    </Body>
                </PageHeader>
            </Container>
        )
    }
}

export default TalentPoolContainer
