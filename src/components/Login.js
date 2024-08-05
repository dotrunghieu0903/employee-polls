import * as React from "react";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';

import { Eye, EyeSlashFill } from "react-bootstrap-icons";

import logo from "../images/EmployeePolls.png"

const Login = ({loggedIn}) =>
{
    const [showPass, setShowPass] = React.useState(false);
    const clickHandler = () => {
        setShowPass((prev) => !prev);
    };
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Employee Polls</h2>
            <Image src={logo} alt="Logo" width={100} style={{display:"block", marginLeft:"auto", marginRight:"auto",width:"25%"}} />
            <h3 style={{textAlign:"center"}}>Log In</h3>
            <Form>
                <Form.Label style={{textAlign:"center"}}>UserName</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control
                    id = "inputUsername"
                    data-testid="username"
                    type="email" 
                    placeholder="Please input the username" />
                </Form.Group>
                <Form.Label htmlFor="inputPassword">Password</Form.Label>
                <Form.Control
                    id="inputPassword"
                    data-testid="password"
                    type={showPass ? "text" : "password"}
                    placeholder="Please input the password"
                />
                <InputGroup.Text onClick={clickHandler}>
                    {showPass ? <EyeSlashFill /> : <Eye />}
                </InputGroup.Text>
                <Button as="a" variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser
});

export default connect(mapStateToProps)(Login)