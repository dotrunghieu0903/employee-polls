import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import logo from "../images/EmployeePolls.png"

const Login = ({loggedIn}) =>
{
    return (
        <div>
            <h1>Employee Polls</h1>
            <Image src={logo} alt="Logo" rounded />
            <h2>Log In</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="email" placeholder="Please input the username" />
                </Form.Group>
                <Form.Label htmlFor="inputPassword">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword"
                />
                <Button as="a" variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser
});

export default connect(mapStateToProps)(Login)