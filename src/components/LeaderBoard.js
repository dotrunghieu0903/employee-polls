import { connect } from "react-redux";

const LeaderBoard = () => {
    return (
        <h1>LeaderBoard</h1>
    )
}

const mapStateToProps = ({authedUser}) => ({

});

export default connect(mapStateToProps)(LeaderBoard)