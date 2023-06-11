import { IUser, IMessage } from '../../../types'
import { Dispatch, SetStateAction, FC, useState } from 'react'
import { Container, Reply, ContainerClose, Close, ContainerInput, Input, ContainerIconInput, IconInput } from './style'
import socket from '../../../services/socket'

interface IProps {
    user: IUser
    messageReply: IMessage | undefined
    setMessageReply: Dispatch<SetStateAction<IMessage | undefined>>
}

const InputAndReply: FC<IProps> = ({ messageReply, user, setMessageReply }) => {
    const [message, setMessage] = useState<string>('')

    return (
        <Container>
            {messageReply && (
                <Reply send={messageReply.user.id === user.id}>
                    {messageReply.text}
                    <ContainerClose onClick={() => setMessageReply(undefined)}>
                        <Close xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </Close>
                    </ContainerClose>
                </Reply>
            )}
            <ContainerInput>
                <Input id="message" value={message} onChange={ev => setMessage(ev.target.value)} placeholder="Mensagem..."/>
                <ContainerIconInput type="submit" disabled={message.trim().length == 0} onClick={() => {
                    socket.emit('createMessage', user, message, messageReply)

                    setMessage('')

                    setMessageReply(undefined)

                    window.document.getElementById('message')?.focus()
                }}>
                    <IconInput xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </IconInput>
                </ContainerIconInput>
            </ContainerInput>
        </Container>
    )
}

export default InputAndReply