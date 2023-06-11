import { IUser } from '../../types'
import { FC } from 'react'
import { Container, Title, User } from './style'

interface IProps {
    user: IUser
    users: IUser[]
}

const Users: FC<IProps> = ({ user, users }) => {
    return (
        <Container>
            <Title>Usuários online</Title>
            <ul>
                {users.map(userMap => (
                    <User key={userMap.id}>{userMap.name}{userMap.id === user.id && ' (você)'}</User>
                ))}
            </ul>
        </Container>
    )
}

export default Users