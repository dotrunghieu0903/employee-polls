import { useState } from "react";
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';

import { Eye, EyeSlashFill } from "react-bootstrap-icons";

import logo from "../images/EmployeePolls.png"

const Login = () =>
{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false);
    const clickHandler = () => {
        setShowPass((prev) => !prev);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch()
        console.log(userName, password)
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Employee Polls</h2>
            <Image src={logo} alt="Logo" width={100} style={{display:"block", marginLeft:"auto", marginRight:"auto",width:"25%"}} />
            <h3 style={{textAlign:"center"}}>Log In</h3>
            <Form onSubmit={handleLogin}>
                <Form.Label style={{textAlign:"center"}}>UserName</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control
                    id = "inputUsername"
                    data-testid="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="username" 
                    placeholder="Please input the username" 
                    required />
                </Form.Group>
                <Form.Label htmlFor="inputPassword">Password</Form.Label>
                <Form.Control
                    id="inputPassword"
                    data-testid="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPass ? "text" : "password"}
                    placeholder="Please input the password"
                    required />
                <InputGroup.Text onClick={clickHandler}>
                    {showPass ? <EyeSlashFill /> : <Eye />}
                </InputGroup.Text>
                <Button variant="primary" type="Submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Login;