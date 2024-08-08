import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { Image, Nav, Navbar } from "react-bootstrap";

import Avatar from "../images/Avatar.png"

const NavBar = ({setNavbarHeight}) => {
    const authorization = useSelector(state => state.authorization);
    const navigate = useNavigate();
    const isActivePath = (path) => window.location.pathname === path;

    const navbarRef = useRef(null);
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
    if (!authorization.isAuthenticated) {
        return <div>Please log in to view your profile. <Link to="/login">Login</Link></div>;
    }

    return (
        <Navbar ref={navbarRef} className="container" fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Collapse>
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
                <Image src={authorization.user.avatarURL ?? Avatar} alt="avatar" style={{width:"50px", height: "50px", marginRight: "10px"}} roundedCircle />
                <p style={{color: "white"}}>{authorization.user.name}</p>
            </Navbar.Collapse> 
        </Navbar>
    )
};


export default NavBar;