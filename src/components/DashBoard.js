import { connect } from 'react-redux';

const DashBoard = () => {
    return (
        <h2>DashBoard</h2>
    )
}

const mapStateToProps = ({authedUser, question}) => {

}

export default connect(mapStateToProps)(DashBoard);