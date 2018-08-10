import styled from 'styled-components'
import { primaryBlue, note } from '../constants/colors'

export const Header = styled.h1`
    font-size: 3em;
    font-weight: 300;
    margin: 24px 0px 14px 0px;
    color: ${primaryBlue};
`

export const SubHeader = styled.h1`
    font-weight: 300,
    margin: 18px 0px 12px 0px,
    color: ${primaryBlue};
`

export const Headline = styled.h3`
    font-size: 20px;
`

export const Title = styled.p`
    font-size: 18px;
`

export const Subheading = styled.p`
    font-size: 14px;
    color: ${note};
`
