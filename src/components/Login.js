import { connect } from "react-redux";

import logo from "../images/EmployeePolls.png"

const Login = ({loggedIn}) =>
{
    return (
        <div>
            <h1>Employee Polls</h1>
            <img src={logo} alt="Logo"/>
            <h2>Log In</h2>
            <form>

            </form>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser
});

export default connect(mapStateToProps)(Login)