import React, { Component, Fragment } from 'react'
import Tag from './Tag'
import { skillShowMore, skillFontShowMore } from '../constants/colors'

const styles = {
    showMore: {
        backgroundColor: skillShowMore,
        color: skillFontShowMore
    }
}

const AMOUNT_SKILLS = 7

class CandidateSkills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showComplementary: false
        }
    }

    handleShowComplementarySkills() {
        this.setState({ showComplementary: true })
    }

    handleHideComplementarySkills() {
        this.setState({ showComplementary: false })
    }

    renderSkills(skills, showLess) {
        return (
            <Fragment>
                {
                    skills.map((skill, index) =>
                        <Tag key={ index } text={ skill } />
                    )
                }
                {
                    showLess && (
                        <Tag
                            text="Show Less"
                            style={ styles.showMore }
                            onClick={ () => this.handleHideComplementarySkills() }
                        />
                    )
                }
            </Fragment>
        )
    }

    renderComplementarySkills(skills) {
        const { showComplementary } = this.state
        return showComplementary
            ? this.renderSkills(skills, true)
            : (
                <Tag
                    text={ `+ ${skills.length}` }
                    style={ styles.showMore }
                    onClick={ () => this.handleShowComplementarySkills() }
                />
            )
    }

    render() {
        const { skills } = this.props
        const firstSkills = skills.slice(0, AMOUNT_SKILLS)
        const complementarySkills = skills.slice((skills.length - AMOUNT_SKILLS) * -1)
        return (
            <Fragment>
                { this.renderSkills(firstSkills) }
                { this.renderComplementarySkills(complementarySkills) }
            </Fragment>
        )
    }
}

export default CandidateSkills
