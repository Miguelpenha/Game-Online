import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    width: 80%;
    font-size: 3em;
    margin-top: 5rem;
    line-height: 1.3em;
    align-self: center;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 2.5em;
        margin-top: 3rem;
    }
`

export const Description = styled.span`
    width: 80%;
    font-size: 2.5em;
    margin-top: 5rem;
    line-height: 1.2em;
    align-self: center;
    text-align: center;

    .username {
        font-size: 0.65em;
        font-family: 'Press Start 2P', cursive;
    }

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
        margin-top: 2rem;
    }
`

export const ContainerLoading = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
`