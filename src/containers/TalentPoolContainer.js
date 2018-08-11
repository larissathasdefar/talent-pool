import React, { Component } from 'react'
import { defaultColor } from '../constants/colors'
import Api from '../constants/api'
import {
    append,
    concat,
    indexOf,
    isEmpty,
    join,
    map,
    merge,
    pipe,
    pluck,
    reject,
    remove
} from 'ramda'
import VanHackLogo from '../assets/images/VanHack-logo.png'
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
    margin-top: 42px;
`
const FilterContainer = styled.div`
    width: fit-content;
    margin-right: 15px;
    min-width: 250px;
`
const Results = styled.div`
    flex: 1
`

const CANDIDATES_PER_LOAD = 10

// TODO: see browser compability
class TalentPoolContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skills: [],
            loadingSearch: false,
            candidates: [],
            candidatesAmout: 0,
            loadingCandidates: false,
            filters: {
                selectedSkills: [],
                english: [],
                visa: []
            }
        }
    }

    componentDidMount() {
        this.handleLoadSearchTerms()
        this.handleLoadCandidates()
        window.addEventListener('scroll', () => this.handleScroll())
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.handleScroll())
    }

    handleScroll() {
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        if (isAtBottom && !this.state.loadingCandidates) {
            this.handleLoadCandidates(true)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.filters !== this.state.filters) {
            this.handleLoadCandidates()
        }
    }

    getQueryFilterString(isLoadingNextPage) {
        const { filters, candidates } = this.state
        const skipCount = isLoadingNextPage
            ? candidates.length
            : 0
        const englishFilter = pipe(
            map(level => `EnglishLevel=${level}`),
            join('&')
        )(filters.english)
        const visaFilter = pipe(
            map(level => `VisaStatus=${level}`),
            join('&')
        )(filters.visa)
        const skills = isEmpty(filters.selectedSkills)
            ? ''
            : `SkillIds=${join(',', filters.selectedSkills)}`
        const filterItems = [
            englishFilter,
            visaFilter,
            skills,
            `SkipCount=${skipCount}`,
            `MaxResultCount=${CANDIDATES_PER_LOAD}`
        ]
        return pipe(
            reject(isEmpty),
            join('&')
        )(filterItems)
    }

    handleChangeFilter(filter, value) {
        const { filters } = this.state
        const item = filters[filter]
        const position = indexOf(value, item)
        const newFilterOptions = position >= 0
            ? remove(position, 1, item)
            : append(value, item)
        const updatedFilter = merge(filters, { [filter]: newFilterOptions })
        this.setState({ filters: updatedFilter })
    }

    // TODO: verify if term is different than before to not reload on SearchField focous out
    handleLoadSearchTerms(term = '') {
        this.setState({ loadingSearch: true })
        axios(`${Api}/LegacySkill/GetSearch?text=${term}&SkipCount=0&MaxResultCount=10`)
            .then(({ data }) => data.result.items)
            .then(skills => skills.map(({ id, name }) => {
                return { value: id, label: name }
            }))
            .then(skills => this.setState({ skills, loadingSearch: false }))
            .catch(() => {
                alert('Ops! We had an error on searching for more skills. Try again later.')
                this.setState({ loadingSearch: false })
            })
    }

    handleLoadCandidates(isLoadingNextPage) {
        const filterQuery = this.getQueryFilterString(isLoadingNextPage)
        const setCandidates = candidates => isLoadingNextPage
            ? concat(this.state.candidates, candidates)
            : candidates

        this.setState({ loadingCandidates: true })
        axios(`${Api}/TalentPool/GetCandidates?${filterQuery}`)
            .then(({ data }) => this.setState({
                candidates: setCandidates(data.result.items),
                loadingCandidates: false,
                candidatesAmout: data.result.totalCount
            }))
            .catch(() => {
                alert('Ops! We had an error on searching for more candidates. Try again later.')
                this.setState({ loadingCandidates: false })
            })
    }

    handleSearch(skills) {
        const skillsId = pluck('value', skills)
        this.setState({ filters: merge(this.state.filters, { selectedSkills: skillsId }) })
    }

    render() {
        const {
            skills,
            loadingSearch,
            loadingCandidates,
            candidatesAmout,
            candidates
        } = this.state

        return (
            <Container>
                <AppBar>
                    <img alt="VanHack Logo" src={ VanHackLogo } />
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
                            <Filter
                                onChangeFilter={ (filter, value) =>
                                    this.handleChangeFilter(filter, value)
                                }
                            />
                        </FilterContainer>
                        <Results>
                            <SearchField
                                options={ skills }
                                isLoading={ loadingSearch }
                                onChange={ item => this.handleSearch(item) }
                                onInputChange={ term => this.handleLoadSearchTerms(term) }
                            />
                            <Subheading>
                                We have <b>{ candidatesAmout }</b> Candidates with this skills
                            </Subheading>
                            <List
                                items={ candidates }
                                renderItem={ info => <Candidate { ...info } /> }
                            />
                            {
                                loadingCandidates && (
                                    <Subheading>Loading...</Subheading>
                                )
                            }
                        </Results>
                    </Body>
                </PageHeader>
            </Container>
        )
    }
}

export default TalentPoolContainer
