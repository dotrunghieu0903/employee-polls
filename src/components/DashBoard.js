import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

const DashBoard = ({marginTop}) => {
    const authorization = useSelector(state => state.authorization);

    console.log(`state from DashBoard ${JSON.stringify(authorization)}`)
    return (
        <Container style={{ marginTop: `${marginTop}px`}}>
            <h2>DashBoard</h2>
        </Container>
    )
}

export default DashBoard;