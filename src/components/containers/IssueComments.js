import IssueComments from '../ui/IssueComments';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchIssuesComments, fetchIssueData, setComment } from '../../actions/actions';

const mapStateToProps = (state, props) => {
    return {
        loading: state.loading,
        router: props.router,
        comments: state.comments,
        issueData: state.currentIssueData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getIssueComments: (userData, issueId) => dispatch(fetchIssuesComments(userData, issueId)),
        getIssueData: (userData, issueId) => dispatch(fetchIssueData(userData, issueId)),
        updateComments: (comment) =>dispatch(setComment(comment))
    }  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IssueComments));