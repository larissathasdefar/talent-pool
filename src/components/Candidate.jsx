import React from 'react'
import Card from './Card'
import { Headline, Title } from './Typography'
import Avatar from './Avatar'
import Tag from './Tag'
import { primaryBlue, verified, userValidation } from '../constants/colors'
import styled from 'styled-components'
import CandidateSkills from './CandidateSkills'

const styles = {
    card: {
        flexDirection: 'row',
        display: 'flex'
    },
    avatar: {
        height: '164px',
        width: '164px',
        margin: '12px'
    },
    name: {
        color: primaryBlue
    },
    position: {
        marginTop: '8px',
        fontSize: '17px'
    },
    verified: {
        backgroundColor: verified
    },
    visa: {
        backgroundColor: userValidation
    },
    englishLevel: {
        backgroundColor: userValidation
    }
}

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

export default props => (
    <Card style={ styles.card }>
        <Avatar
            src={ props.image }
            style={ styles.avatar }
        />
        <CandidateInfo>
            <Headline style={ styles.name }>
                { `${props.firstName} ${ props.lastName }` }
            </Headline>
            <Title style={ styles.position }>
                { props.position }
            </Title>
            <CandidateSkills skills={ props.skills } />
            <div>
                {
                    props.verified && (
                        <Tag text="Verified" style={ styles.verified } />
                    )
                }
                {
                    props.visa && props.visa > 0
                        ? <Tag text="Visa" style={ styles.visa } />
                        : null
                }
                {
                    props.englishLevel && props.englishLevel > 0
                        ? (
                            <Tag
                                text={ englishLevel[props.englishLevel] }
                                style={ styles.englishLevel }
                            />
                        )
                        : null
                }
            </div>
        </CandidateInfo>
    </Card>
)
