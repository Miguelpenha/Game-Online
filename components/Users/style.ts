import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 4em;
    align-self: center;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        max-width: 80%;
    }
`

export const Title = styled.span`
    font-size: 1.5em;
    margin-bottom: 1em;
    text-align: center;
    line-height: 1.5em;
    font-family: 'Press Start 2P', cursive;
`

export const User = styled.li`
    font-size: 1.5em;

    ::marker {
        color: green;
    }

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
    }
`