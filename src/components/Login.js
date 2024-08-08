import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Form, Button, Image, InputGroup, Alert } from 'react-bootstrap';

import { Eye, EyeSlashFill } from "react-bootstrap-icons";

import logo from "../images/EmployeePolls.png"
import { login } from "../reducers/authorizationReducer";
import { getUsers } from "../actions/users";

const Login = () =>
{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.users);

    const clickHandler = () => {
        setShowPass((prev) => !prev);
    };

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const foundUser = Object.values(users).find(u => u.id === userName && u.password === password)
        if(foundUser) {
            dispatch(login(foundUser));
            setUserName("");
            setPassword("");
            navigate("/");
        }
        else {
            setError(`Invalid username or password ${userName}`);
        }
    }

    return (
        <div>
            <h2 className="text-center">Employee Polls</h2>
            <Image src={logo} alt="Logo" width={100} style={{display:"block", marginLeft:"auto", marginRight:"auto",width:"25%"}} />
            <h3 className="text-center">Log In</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Label htmlFor="inputUsername">UserName</Form.Label>
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