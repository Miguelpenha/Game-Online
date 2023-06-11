import { IUser, IMessage } from '../../types'
import { FC, useRef, useState, useEffect } from 'react'
import { Container, TitleChat, Messages, ContainerMessageAndReplyMessage, ReplyMessage, ContainerMessage, HeaderMessage, UserMessage, DateMessage, Message, ContainerReply, Reply, ContainerDelete, Delete } from './style'
import socket from '../../services/socket'
import InputAndReply from './InputAndReply'

interface IProps {
    user: IUser
    chat: IMessage[]
}

const Chat: FC<IProps> = ({ chat, user }) => {
    const refMessages = useRef<HTMLUListElement>(null)
    const [messageReply, setMessageReply] = useState<IMessage>()

    useEffect(() => {
        if (refMessages.current) {
            refMessages.current.scrollTop = refMessages.current.scrollHeight
        }
    }, [chat])

    return (
        <Container>
            <TitleChat>Chat</TitleChat>
            <Messages ref={refMessages}>
                {chat.map(message => (
                    <ContainerMessageAndReplyMessage key={message.id} id={message.id} reply={message.reply ? true : false} send={message.user.id === user.id}>
                        {message.reply && (
                            <ReplyMessage sendView={message.user.id === user.id} send={message.reply.user.id === user.id} onClick={() => window.document.getElementById(message.reply!.id)?.scrollIntoView()}>
                                {message.reply.text}
                            </ReplyMessage>
                        )}
                        <ContainerMessage send={message.user.id === user.id}>
                            <HeaderMessage>
                                <UserMessage>{message.user.name}</UserMessage>
                                <DateMessage>{message.created.date} - {message.created.hour}</DateMessage>
                            </HeaderMessage>
                            <Message>{message.text}</Message>
                            <ContainerReply send={message.user.id === user.id} onClick={() => {
                                setMessageReply(message)

                                window.document.getElementById('message')?.focus()
                            }}>
                                <Reply xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
                                </Reply>
                            </ContainerReply>
                            {message.user.id === user.id && (
                                <ContainerDelete send={message.user.id === user.id} onClick={() => {
                                    socket.emit('deleteMessage', message)
                                }}>
                                    <Delete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                    </Delete>
                                </ContainerDelete>
                            )}
                        </ContainerMessage>
                    </ContainerMessageAndReplyMessage>
                ))}
            </Messages>
            <InputAndReply user={user} messageReply={messageReply} setMessageReply={setMessageReply}/>
        </Container>
    )
}

export default Chat