import React, { Component } from 'react'; 
import IssueList from '../containers/IssueList';
import SearchHeader from "../containers/SearchHeader";
import './App.css';

class IssueListPage extends Component {
    componentDidMount () {
        this.props.onfetchIssues(this.props.match.params);
        this.props.onfetchIssueCount(this.props.match.params);
        this.props.setUserData(this.props.match.params);
    }

    render() {
    return (
        <React.Fragment>
            <SearchHeader />
            <IssueList />
            {/* <Paggination /> */}
        </React.Fragment>
    );
    }
}

export default IssueListPage;
