import React from 'react';

export default class IssueList extends React.Component {
    render () {
        const issueList = this.props.issues.map(issue => (
            <li className="issues">
                <div className="container">
                    <div className="status">{issue.state}</div>
                    <div className="title">
                        <a href={this.props.location.pathname + '/' + issue.number} className="main-title">{issue.title}</a>
                        <div className="activity">
                            <span className="issue-no">{ issue.number }</span>
                            <span className="issue-status">{issue.state}</span>
                            <span className="open-on">{ issue.created_at } </span>
                            <span className="creator">{ issue.user.login }</span>
                            <span className="updated-on"> { issue.updated_at } </span>
                            <span className="comments">{ issue.comments }</span>
                        </div>
                    </div>
                </div>
            </li>
        ))

        if (!this.props.loading) {
            return (
                <ul className="issue-list">
                    { issueList }
                </ul>
            )
        }
    }
}