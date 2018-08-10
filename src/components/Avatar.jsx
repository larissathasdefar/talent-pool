import styled from 'styled-components'
import { silver } from '../constants/colors'

export default styled.div`
    border-radius: 164px;
    width: 64px;
    height: 64px;
    background-size: cover;
    background-color: ${silver};
    background-image: url(${({ src }) => src });
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.9;
    }
`
