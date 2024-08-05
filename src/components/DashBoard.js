import { connect } from 'react-redux';

const DashBoard = () => {
    return (
        <h2>DashBoard</h2>
    )
}

const mapStateToProps = ({question}) => {

}

export default connect(mapStateToProps)(DashBoard);