import IssueList from '../ui/IssueList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onfetchIssues: repoData => dispatch(fetchIssues(repoData)),
//         onfetchIssueCount: repoData => dispatch(fetchIssueCount(repoData))
//     }
// }

export default connect(mapStateToProps)(IssueList);