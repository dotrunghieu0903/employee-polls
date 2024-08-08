import { Navbar } from "react-bootstrap";

const PageNotFound = () => {
    return(
        <div>
            <h1>Page is not available</h1>
            <Navbar.Brand style={{cursor: "pointer", color: "blue"}} href='/'>Go to HomePage</Navbar.Brand>
        </div>
    )
}

export default PageNotFound;