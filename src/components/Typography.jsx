import React from 'react'

const styles = {
    header: {
        fontSize: '3em',
        fontWeight: 'lighter'
    },
    subheader: {
        fontWeight: 'lighter'
    },
    headline: {
        fontSize: '20px'
    },
    title: {
        fontSize: '18px'
    },
    subheading: {
        fontSize: '14px'
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

