import Issues from './ui/Issues';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.data,
        gituser: state.gituser,
        gitrepo: state.gitrepo,
        open_issues_count: state.open_issues_count
    };
}

const mapDispatchToProps = (dispatch) => ({
    initIssues: issuesData => dispatch(initIssues(issuesData)),
    addGitInfo: gitInfo => dispatch(addGitInfo(gitInfo)),
    openIssuesCount: count => dispatch(openIssuesCount(count))
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Issues);

export default withRouter(Container);