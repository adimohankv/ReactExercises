import React from 'react';

export default class SearchHeader extends React.Component {
    search = (e) => {
        if (e.key === 'Enter') {
            this.props.history.location.search ?
                this.props.history.push(`${this.props.history.location.sort}&state=${e.target.value}`) :
                this.props.history.push(`?state=${e.target.value}`);
            this.props.onSearchIssues(this.props.userData, this.props.location.search);
        }
    }

    change = (e) => {
        this.props.history.location.search ?
        this.props.history.push(`${this.props.history.location.search}&sort=${e.target.value}`) :
        this.props.history.push(`?sort=${e.target.value}`);
        this.props.onSortIssue(this.props.userData, this.props.location.search);
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