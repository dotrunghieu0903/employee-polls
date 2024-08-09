import { useSelector } from 'react-redux';
import { Container, Table, Image } from "react-bootstrap";

const LeaderBoard = ({marginTop}) => {
    const { users, loading } = useSelector((state) => state.users);

    console.log(`users from LeaderBoard component: ${JSON.stringify(users)}`)
    let count = 0;

    if (loading) return <p>Loading...</p>;
    return (
        <Container style={{ marginTop: `${marginTop}px`}}>
            <Table bordered striped>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {users && Object.values(users).map((user) => (
                        <tr key={user.id}>
                            <td>{++count}</td>
                            <td>
                                <Image style={{width: "50px", height: "50px", marginRight: "10px"}} roundedCircle src={user.avatarURL} />
                                <span>{user.name}</span></td>
                            <td>{Object.keys(user && user.answers).length}</td>
                            <td>{Object.keys(user && user.questions).length}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </Container>
    )
}

export default LeaderBoard;