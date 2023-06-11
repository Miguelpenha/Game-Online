import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 40em;
    padding: 1em;
    display: flex;
    margin-top: 5em;
    align-self: center;
    margin-bottom: 10em;
    border-radius: 10px;
    flex-direction: column;
    border: 1px solid ${props => props.theme.primary};

    @media screen and (max-width: 700px) {
        width: 95%;
        margin-top: 3em;
    }
`

export const TitleChat = styled.span`
    font-size: 1.4em;
    margin-top: 0.5em;
    align-self: center;
    margin-bottom: 0.5em;
    font-family: 'Press Start 2P', cursive;

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
    }
`

export const Messages = styled.ul`
    gap: 1.5em;
    height: 25em;
    display: flex;
    margin-top: 1em;
    overflow-y: scroll;
    flex-direction: column;
`

interface IContainerMessageAndReplyMessage {
    send: boolean
    reply: boolean
}

export const ContainerMessageAndReplyMessage = styled.div<IContainerMessageAndReplyMessage>`
    display: flex;
    flex-direction: column;

    ${props => {
        if (props.reply) {
            if (props.send) {
                return css`
                    padding-right: 0.3em;
                    border-right: 2px solid ${props => props.theme.backgroundColorSecondary};
                `
            } else {
                return css`
                    padding-left: 0.3em;
                    border-left: 2px solid ${props => props.theme.backgroundColorSecondary};
                `
            }
        }
    }}
`

interface IReplyMessage {
    send: boolean
    sendView: boolean
}

export const ReplyMessage = styled.a<IReplyMessage>`
    width: 50%;
    display: flex;
    padding: 0.4em;
    cursor: pointer;
    font-size: 1.5em;
    border-radius: 10px;
    margin-bottom: 0.5em;
    transform: scale(0.8);
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    border: 2px solid ${props => props.theme.backgroundColorSecondary};

    ${props => props.send ? css`
        background-color: ${props => props.theme.backgroundColor};
    ` : css`
        background-color: ${props => props.theme.backgroundColorSecondary};
    `}

    ${props => props.sendView && css`
        align-self: flex-end;
    `}
`

interface IContainerMessage {
    send: boolean
}

export const ContainerMessage = styled.li<IContainerMessage>`
    width: 95%;
    display: flex;
    padding: 0.4em;
    font-size: 1.5em;
    list-style: none;
    position: relative;
    border-radius: 10px;
    flex-direction: column;
    border: 2px solid ${props => props.theme.backgroundColorSecondary};

    ${props => props.send ? css`
        align-self: flex-end;
        background-color: ${props => props.theme.backgroundColor};
    ` : css`
        background-color: ${props => props.theme.backgroundColorSecondary};
    `}

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
    }
`

export const HeaderMessage = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const UserMessage = styled.span`
    font-size: 1em;
    color: ${props => props.theme.secondaryColor};

    @media screen and (max-width: 900px) {
        order: 1;
        font-size: 0.8em;
    }
`

export const DateMessage = styled.span`
    font-size: 1em;
    color: ${props => props.theme.secondaryColor};

    @media screen and (max-width: 900px) {
        font-size: 0.8em;
    }
`

export const Message = styled.span`
    font-size: 1.2em;

    @media screen and (max-width: 900px) {
        font-size: 1em;
    }
`

interface IContainerReply {
    send: boolean
}

export const ContainerReply = styled.button<IContainerReply>`
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

    :hover {
        background-color: ${props => props.send ? props.theme.backgroundColorSecondary : props.theme.backgroundColor};
    }
`

export const Reply = styled.svg`
    width: 2.2em;
    fill: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        width: 1.8em;
    }
`

export const ContainerDelete = styled.button<IContainerReply>`
    right: 3em;
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

    :hover {
        background-color: ${props => props.send ? props.theme.backgroundColorSecondary : props.theme.backgroundColor};
    }
`

export const Delete = styled.svg`
    width: 2.2em;
    fill: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        width: 1.8em;
    }
`