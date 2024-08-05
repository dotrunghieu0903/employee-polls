import { connect } from "react-redux";

const New = () => {
    return (
        <h1>New</h1>
    )
}

const mapStateToProps = ({authedUser}) => ({

});

export default connect(mapStateToProps)(New)