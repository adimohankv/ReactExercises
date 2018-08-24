import IssueList from '../ui/IssueList';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, props) => {
    return {
        issues: state.issues,
        router: props.router
    }
}

export default withRouter(connect(mapStateToProps)(IssueList));