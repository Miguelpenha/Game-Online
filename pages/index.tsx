import { useState, useEffect } from 'react'
import { IMessage, IUser } from '../types'
import socket from '../services/socket'
import { Container, Title, Description, ContainerLoading } from '../styles/pages'
import Loading from '../components/Loading'
import Users from '../components/Users'
import Chat from '../components/Chat'

socket.connect()

function Home() {
    const [user, setUser] = useState<IUser>()
    const [users, setUsers] = useState<IUser[]>()
    const [chat, setChat] = useState<IMessage[]>()

    useEffect(() => {
        socket.emit('createUser')

        function userCreated(user: IUser) {
            setUser(user)

            socket.emit('getUsers')
            socket.emit('getChat')
        }

        function getUsers(users: IUser[]) {
            setUsers(users)
        }

        function getChat(messages: IMessage[]) {
            setChat(messages)
        }

        socket.on('userCreated', userCreated)
        socket.on('users', getUsers)
        socket.on('chat', getChat)

        return () => {
            socket.off('userCreated', userCreated)
            socket.off('users', getUsers)
            socket.off('chat', getChat)
        }
    }, [socket])

    if (user && users && chat) {
        return (
            <Container>
                <Title>Game Online</Title>
                <Description>Olá <span className='username'>{user.name}</span>, vamos começar?</Description>
                <Users user={user} users={users}/>
                <Chat chat={chat} user={user}/>
            </Container>
        )
    } else {
        return (
            <ContainerLoading>
                <Loading size={90} weight={8} speed={0.8}/>
            </ContainerLoading>
        )
    }
}

export default Home