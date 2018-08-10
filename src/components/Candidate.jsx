import React from 'react'
import Card from './Card'
import { Headline, Subheading } from './Typography'
import Avatar from './Avatar'
import Tag from './Tag'
import { primaryBlue, verified, userValidation } from '../constants/colors'

const englishLevel = [
    '',
    'Basic English',
    'Intermediate English',
    'Advanced English',
    'Fluent English'
]

// TODO: Put styles in a styles variable
// TODO: Put Avatar in a div with background cover
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
        <div>
            <Headline style={ { color: primaryBlue } }>
                { `${props.firstName} ${ props.lastName }` }
            </Headline>
            <Subheading>{ props.position }</Subheading>
            {
                // TODO: show +15
                props.skills.map((skill, index) =>
                    index > 15
                        ? false
                        : <Tag text={ skill } />
                )
            }
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
        </div>
    </Card>
)
