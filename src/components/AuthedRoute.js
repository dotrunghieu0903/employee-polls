import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthedRoute = ({children}) => {
    const authorization = useSelector(state => state.authorization);
    const location = useLocation();

    return(
        authorization.isAuthenticated ? children : <Navigate to='/login' state={{from: location}}/>
    )
}

export default AuthedRoute;