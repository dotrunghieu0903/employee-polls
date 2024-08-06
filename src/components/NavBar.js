import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Image, Nav } from "react-bootstrap";

import Avatar from "../images/Avatar.png"

const NavBar = () => {
    const navigate = useNavigate();
    const isActivePath = (path) => window.location.pathname === path;
    return (
        <Navbar className="container" fixed="top" >
            {/* <Navbar.Brand>Home</Navbar.Brand> */}
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
            <Navbar.Collapse>
                <Image src={Avatar} alt="avatar" style={{width:"50px", height: "50px", marginRight: "10px"}} roundedCircle />
            </Navbar.Collapse> 
        </Navbar>
    )
};


export default NavBar;