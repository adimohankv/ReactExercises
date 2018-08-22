import { connect } from 'react-redux';
import { fetchIssues } from '../../actions/actions';
import SearchHeader from '../ui/SearchHeader';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, props) => {
    return {
        issueCount : state.issueCount,
        loading: state.loading,
        userData: state.userData,
        router: props.router
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchIssues: (repoData, query) => dispatch(fetchIssues(repoData, query)),
        onSortIssue: (repoData, query) => dispatch(fetchIssues(repoData, query))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchHeader));