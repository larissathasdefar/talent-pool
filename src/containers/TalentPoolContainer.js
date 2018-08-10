import React, { Component } from 'react'
import { defaultColor } from '../constants/colors'
import Api from '../constants/api'
import { Header, SubHeader, Subheading } from '../components/Typography'
import AppBar from '../components/AppBar'
import Menu from '../components/Menu'
import Filter from '../components/Filter'
import SearchField from '../components/SearchField'
import Candidate from '../components/Candidate'
import '../assets/styles.css'
import styled from 'styled-components'
import axios from 'axios'
import List from '../components/List'

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

// TODO: see browser compability
class TalentPoolContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [],
            selectedOptions: [],
            loadingSearch: false,
            candidates: [],
            candidatesAmout: 0,
            loadingCandidates: false
        }
    }

    componentDidMount() {
        this.handleLoadSearchTerms()
        this.handleLoadCandidates()
    }

    handleLoadSearchTerms(term = '') {
        this.setState({ loadingSearch: true })
        axios(`${Api}/LegacySkill/GetSearch?text=${term}&SkipCount=0&MaxResultCount=10`)
            .then(({ data }) => data.result.items)
            .then(options => options.map(({ id, name }) => {
                return { value: id, label: name }
            }))
            .then(options => this.setState({ options, loadingSearch: false }))
            .catch(() => {
                alert('Ops! We had an error on searching for more skills. Try again later.')
                this.setState({ loadingSearch: false })
            })
    }

    handleLoadCandidates() {
        //     fetch(`${Api}/TalentPool/GetCandidates?EnglishLevel=0&EnglishLevel=1&VisaStatus=0&SkillIds=104,105&SkipCount=0&MaxResultCount=10`)
        this.setState({ loadingCandidates: true })
        axios(`${Api}/TalentPool/GetCandidates?SkipCount=0&MaxResultCount=10`)
            .then(({ data }) => this.setState({
                candidates: data.result.items,
                loadingCandidates: false,
                candidatesAmout: data.result.totalCount
            }))
            .catch(() => {
                alert('Ops! We had an error on searching for more candidates. Try again later.')
                this.setState({ loadingCandidates: false })
            })
    }

    handleSearch(item) {
        this.setState({ selectedOptions: item })
    }

    render() {
        const {
            options,
            loadingSearch,
            candidatesAmout,
            candidates
        } = this.state
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
                    <Subheading>
                        Looking for a professional? Here you can find a vast range of great professionals.
                    </Subheading>
                    <Body>
                        <FilterContainer>
                            <SubHeader>Filters</SubHeader>
                            <Filter />
                        </FilterContainer>
                        <Results>
                            <SearchField
                                options={ options }
                                isLoading={ loadingSearch }
                                onChange={ this.handleSearch.bind(this) }
                                onInputChange={ this.handleLoadSearchTerms.bind(this) }
                            />
                            <Subheading>
                                We have <b>{ candidatesAmout }</b> Candidates with this skills
                            </Subheading>
                            <List
                                items={ candidates }
                                renderItem={ info => <Candidate { ...info } /> }
                            />
                        </Results>
                    </Body>
                </PageHeader>
            </Container>
        )
    }
}

export default TalentPoolContainer
