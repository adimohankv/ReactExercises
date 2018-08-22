import Pagination from '../ui/Pagination';
import { connect } from 'react-redux';
import { fetchIssues } from '../../actions/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, props) => {
    return {
        totalPage: () => {
            let lastPageUrl = state.headers && state.headers.split(';') && state.headers.split(';')[1].trim();
            let indexOfPage = lastPageUrl && lastPageUrl.indexOf('page') + 5;
            let indexOfClosingTag = lastPageUrl && lastPageUrl.indexOf('>');
            return lastPageUrl && parseInt(lastPageUrl.substring(indexOfPage, indexOfClosingTag), 10);
        },
        router: props.router,
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePageChange: (repoData, query) => dispatch(fetchIssues(repoData, query)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pagination));