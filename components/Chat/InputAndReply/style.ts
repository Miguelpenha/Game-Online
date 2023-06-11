import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 2em;
    flex-direction: column;
`

interface IReply {
    send: boolean
}

export const Reply = styled.span<IReply>`
    width: 90%;
    display: flex;
    padding: 0.4em;
    font-size: 1.5em;
    position: relative;
    border-radius: 10px;
    margin-bottom: 0.5em;
    align-self: flex-end;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    border: 2px solid ${props => props.theme.backgroundColorSecondary};

    ${props => props.send ? css`
        background-color: ${props => props.theme.backgroundColor};
    ` : css`
        background-color: ${props => props.theme.backgroundColorSecondary};
    `}

    button {
        :hover {
            background-color: ${props => props.send ? props.theme.backgroundColorSecondary : props.theme.backgroundColor};
        }
    }
`

export const ContainerClose = styled.button`
    right: 0%;
    bottom: 0%;
    border: none;
    display: flex;
    margin: 0.8em;
    padding: 0.2em;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    align-self: center;
    align-items: center;
    transition-duration: 0.1s;
    background-color: transparent;
    transition-timing-function: linear;
`


export const Close = styled.svg`
    width: 2.2em;
    fill: ${props => props.theme.primary};
`

export const ContainerInput = styled.form`
    display: flex;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};

    :focus {
        outline: none;
        border-radius: 5px;
    }

    ::placeholder {
        color: ${props => props.theme.secondary};
    }
`

export const ContainerIconInput = styled.button`
    border: none;
    display: flex;
    padding: 0.7em;
    cursor: pointer;
    margin-left: 1em;
    border-radius: 50%;
    align-self: center;
    align-items: center;
    transition-duration: 0.1s;
    background-color: transparent;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.backgroundColorSecondary};
    }

    :disabled {
        cursor: default;

        svg {
            fill: ${props => props.theme.backgroundColorSecondary};
        }

        :hover {
            background-color: ${props => props.theme.backgroundColor};
        }
    }
`

export const IconInput = styled.svg`
    width: 2.2em;
    fill: ${props => props.theme.primary};
`