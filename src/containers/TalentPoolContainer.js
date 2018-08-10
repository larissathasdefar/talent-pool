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
    reject,
    remove
} from 'ramda'
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
            options: [],
            selectedSkills: [],
            loadingSearch: false,
            candidates: [],
            candidatesAmout: 0,
            loadingCandidates: false,
            filters: {
                english: [],
                visa: []
            }
        }
    }

    componentDidMount() {
        this.handleLoadSearchTerms()
        this.handleLoadCandidates()
    }

    getQueryFilterString() {
        const { filters, selectedSkills, candidates } = this.state
        const englishFilter = pipe(
            map(level => `EnglishLevel=${level}`),
            join('&')
        )(filters.english)
        const visaFilter = pipe(
            map(level => `VisaStatus=${level}`),
            join('&')
        )(filters.visa)
        const skills = isEmpty(selectedSkills)
            ? ''
            : `SkillIds=${join(',', selectedSkills)}`
        const filterItems = [
            englishFilter,
            visaFilter,
            skills,
            `SkipCount=${candidates.length * CANDIDATES_PER_LOAD}`,
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
        const newFilter = position >= 0
            ? remove(position, 1, item)
            : append(value, item)
        const updatedFilter = merge(filters, { [filter]: newFilter })
        this.setState({ filters: updatedFilter })
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
        const filterQuery = this.getQueryFilterString()

        this.setState({ loadingCandidates: true })
        axios(`${Api}/TalentPool/GetCandidates?${filterQuery}`)
            .then(({ data }) => this.setState({
                candidates: concat(this.state.candidates, data.result.items),
                loadingCandidates: false,
                candidatesAmout: data.result.totalCount
            }))
            .catch(() => {
                alert('Ops! We had an error on searching for more candidates. Try again later.')
                this.setState({ loadingCandidates: false })
            })
    }

    handleSearch({ value }) {
        this.setState({ selectedSkills: value })
    }

    render() {
        const {
            options,
            loadingSearch,
            candidatesAmout,
            candidates,
            filters
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
                            <Filter
                                filters={ filters }
                                onChangeFilter={ (filter, value) =>
                                    this.handleChangeFilter(filter, value)
                                }
                            />
                        </FilterContainer>
                        <Results>
                            <SearchField
                                options={ options }
                                isLoading={ loadingSearch }
                                onChange={ item => this.handleSearch(item) }
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
