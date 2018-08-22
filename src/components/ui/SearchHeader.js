import React from 'react';
import QueryBuilder from '../../utils/updateQuery';

export default class SearchHeader extends React.Component {
    search = (e) => {
        if (e.key === 'Enter') {
            let query = QueryBuilder(this.props.location.search, 'state', e.target.value)
            this.props.history.push(query);
            this.props.onSearchIssues(this.props.userData, query);
        }
    }

    change = (e) => {
        let query = QueryBuilder(this.props.location.search, 'sort', e.target.value)
        this.props.history.push(query);
        this.props.onSearchIssues(this.props.userData, query);
    }

    render () {
        return (
            <div className="search-header">
                <span className="total issues">Open Issues { this.props.issueCount.open_issues_count }</span>
                <input type="text" name="search" id="search" placeholder="open, close, all" onKeyPress={this.search}/>
                <select name="sort-options" id="sort-option" onChange={this.change}>
                    <option value="created">Created</option>
                    <option value="updated">Updated</option>
                    <option value="comments">comments</option>
                </select>
            </div>
        )
    }
}