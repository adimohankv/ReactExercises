import Issues from '../ui/IssueListPage';
import { connect } from 'react-redux';
import { fetchIssues, fetchIssueCount, setUserData } from '../../actions/actions';


const mapStateToProps = (state) => {
    return {
        issues: state.issues,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchIssues: repoData => dispatch(fetchIssues(repoData)),
        onfetchIssueCount: repoData => dispatch(fetchIssueCount(repoData)),
        setUserData: userData => dispatch(setUserData(userData)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);