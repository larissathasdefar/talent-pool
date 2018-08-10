import React from 'react'
import Card from './Card'
import { Headline, Subheading } from './Typography'
import Avatar from './Avatar'
import Tag from './Tag'
import { primaryBlue, verified, userValidation } from '../constants/colors'
import styled from 'styled-components'
import CandidateSkills from './CandidateSkills'

const englishLevel = [
    '',
    'Basic English',
    'Intermediate English',
    'Advanced English',
    'Fluent English'
]

const CandidateInfo = styled.div`
    flex: 1;
`

// TODO: Put styles in a styles variable
// TODO: Infinite Scroll
// TODO: Filter candidates
export default props => (
    <Card style={ { flexDirection: 'row', display: 'flex' } }>
        <Avatar
            src={ props.image }
            style={ {
                height: '164px',
                width: '164px',
                margin: '12px'
            } }
        />
        <CandidateInfo>
            <Headline style={ { color: primaryBlue } }>
                { `${props.firstName} ${ props.lastName }` }
            </Headline>
            <Subheading>{ props.position }</Subheading>
            <CandidateSkills skills={ props.skills } />
            {
                props.verified && (
                    <Tag
                        text="Verified"
                        style={ { backgroundColor: verified } }
                    />
                )
            }
            {
                props.visa && props.visa > 0
                    ? (
                        <Tag
                            text="Visa"
                            style={ { backgroundColor: userValidation } }
                        />
                    )
                    : null
            }
            {
                props.englishLevel && props.englishLevel > 0
                    ? (
                        <Tag
                            text={ englishLevel[props.englishLevel] }
                            style={ { backgroundColor: userValidation } }
                        />
                    )
                    : null
            }
        </CandidateInfo>
    </Card>
)
