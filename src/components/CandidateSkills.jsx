import React, { Component, Fragment } from 'react'
import Tag from './Tag'

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

    renderSkills(skills) {
        return skills.map((skill, index) =>
            <Tag key={ index } text={ skill } />
        )
    }

    renderComplementarySkills(skills) {
        const { showComplementary } = this.state
        return showComplementary
            ? this.renderSkills(skills)
            : (
                <Tag
                    text={ `+ ${skills.length}` }
                    onClick={ () => this.handleShowComplementarySkills() }
                />
            )
    }

    render() {
        const { skills } = this.props
        const first15Skills = skills.slice(0, 15)
        const complementarySkills = skills.slice((skills.length - 15) * -1)
        return (
            <Fragment>
                { this.renderSkills(first15Skills) }
                { this.renderComplementarySkills(complementarySkills) }
            </Fragment>
        )
    }
}

export default CandidateSkills
