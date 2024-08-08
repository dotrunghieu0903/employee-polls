import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { Image, Nav, Navbar } from "react-bootstrap";

import Avatar from "../images/Avatar.png"
import { logout } from '../reducers/authorizationReducer';

const NavBar = ({setNavbarHeight}) => {
    const authorization = useSelector(state => state.authorization);
    const navigate = useNavigate();
    const isActivePath = (path) => window.location.pathname === path;

    const navbarRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const updateNavbarHeight = () => {
            if(navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
        }

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        return () => {
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, [setNavbarHeight]);


    console.log(`state from NavBar ${JSON.stringify(authorization)}`)

    const handleLogout = () => {
        dispatch(logout());
    };

    if (!authorization.isAuthenticated) {
        return <div>Please log in to view your profile. <Link to="/login">Login</Link></div>;
    }

    return (
        <Navbar ref={navbarRef} className="container" fixed="top" bg="dark" variant="dark" expand="lg">
            <Nav>
                <Nav.Link className={isActivePath("/") ? "active" : ""} onClick={() => navigate("/")}>
                Home
                </Nav.Link>
                <Nav.Link className={isActivePath("/leaderboard") ? "active" : ""} onClick={() => navigate("/leaderboard")}>
                LeaderBoard
                </Nav.Link>
                <Nav.Link className={isActivePath("/new") ? "active" : ""} onClick={() => navigate("/new")}>
                New
                </Nav.Link>
            </Nav>
            <Navbar.Collapse className="d-flex justify-content-end">
                <Image src={authorization.user.avatarURL ?? Avatar} alt="avatar" style={{width:"50px", height: "50px", marginRight: "10px"}} roundedCircle />
                <Navbar.Text style={{color: "white"}}>{authorization.user.name}</Navbar.Text>
                <Navbar.Text style={{color: "white", marginLeft: "10px", marginRight: "10px", cursor: "pointer"}} onClick={handleLogout}>Logout</Navbar.Text>
            </Navbar.Collapse> 
        </Navbar>
    )
};


export default NavBar;