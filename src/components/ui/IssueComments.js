import React, { Component } from 'react';
import './App.css';

class IssueComments extends Component {
  constructor (props) {
    super(props);
    this.myInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    let storedComments = JSON.parse(localStorage.getItem(this.props.location.pathname)) || [];
    let inputComment = {user: {
                            login: "dumy"
                          },
                        created_at: Date(),
                        body: this.myInput.current.value
                        }
    storedComments.push(inputComment);
    localStorage.setItem(this.props.location.pathname, JSON.stringify(storedComments));
    this.props.updateComments(inputComment);
  }

  componentDidMount () {
    let userData = {
                    repo: this.props.match.params["repo"],
                    user: this.props.match.params["user"]
                  };
    this.props.getIssueComments(userData, this.props.match.params["issueId"]);
    this.props.getIssueData(userData, this.props.match.params["issueId"]);
  }

  render() {
    console.log(this.props.comments);
    const data = this.props.issueData;
    const commentList = this.props.comments.map(issue => (
      <li className="comments">
          <div className="container">
          <div className="avatar"><img src={issue.user.avatar_url} alt={issue.user.login}/></div>
          <div className="creator-name">{issue.user.login}</div>
          <div className="issue-body">{issue.body}</div>
          </div>
      </li>
  ))
    return (
      <div className="comment-page">
        {!this.props.loading ? (
          <React.Fragment>
            <div className="issue-title">{data.title}</div>
            <div className="issue-state">{data.state}</div>
            <div className="issue-description">
              <div className="avatar"><img src={data.user && data.user.avatar_url} alt={data.user && data.user.login}/></div>
              <div className="creator-name">{data.user && data.user.login}</div>
              <div className="issue-body">{data.body}</div>
            </div>
            {commentList}
          </React.Fragment>
        ) : (
          <h2>Error fetching data</h2>
        )}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="comment" id="comment" ref={this.myInput}/>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    );
  }
}

export default IssueComments;
