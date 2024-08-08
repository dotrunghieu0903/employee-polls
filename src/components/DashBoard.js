import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const authorization = useSelector(state => state.authorization);
    const user = useSelector(state => state.authorization.user);
    const isAuthenticated = useSelector(state => state.authorization.isAuthenticated);

    if (!isAuthenticated) {
        return <div>Please log in to view your profile. <Link to="/login">Login</Link></div>;
    }

    console.log(`state from DashBoard ${JSON.stringify(authorization)}`)
    return (
        <div>
            <h2>User Profile</h2>
            <p>UserName: {user.name}</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new">New</Link></li>
                    <li><Link to="/leaderboard">LeaderBoard</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default DashBoard;