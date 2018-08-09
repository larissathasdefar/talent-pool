import React from 'react'
import { primaryBlue, note } from '../constants/colors'

const styles = {
    header: {
        fontSize: '3em',
        fontWeight: '300',
        margin: '18px 0px',
        color: primaryBlue
    },
    subheader: {
        fontWeight: '300',
        margin: '18px 0px',
        color: primaryBlue
    },
    headline: {
        fontSize: '20px'
    },
    title: {
        fontSize: '18px'
    },
    subheading: {
        fontSize: '14px',
        color: note
    }
}

export const Header = ({ children, style }) => (
    <h1 
        style={ { ...styles.header, ...style } }>
        { children }
    </h1>
)

export const SubHeader = ({ children, style }) => (
    <h1 
        style={ { ...styles.subheader, ...style } }>
        { children }
    </h1>
)

export const Headline = ({ children, style }) => (
    <h3 
        style={ { ...styles.headline, ...style } }>
        { children }
    </h3>
)

export const Title = ({ children, style }) => (
    <p 
        style={ { ...styles.title, ...style } }>
        { children }
    </p>
)

export const Subheading = ({ children, style }) => (
    <p 
        style={ { ...styles.subheading, ...style } }>
        { children }
    </p>
)

