import C from '../constants';

export const fetchIssues = (repoData, query = '') => dispatch => {
  if (repoData) {

    dispatch ({
      type: C.FETCHING_STATE
    });

    const { user, repo } = repoData;
    fetch(`https://api.github.com/repos/${user}/${repo}/issues${query}`)
          .then(res => {
            dispatch ({
              type: C.SET_HEADERS,
              payload: res.headers.get('Link')
            })
            return res.json()}
          )
          .then(res => {
            dispatch ({
              type: C.FETCH_ISSUES, 
              payload: res
            })
          })
          .catch(err => {
            dispatch ({
              type: C.ADD_ERROR,
              payload: err
            })
          })
  }
}

export const fetchIssueCount = value => dispatch => {
  if (value) {

    dispatch ({
      type: C.FETCHING_STATE
    });
    
    const {user, repo} = value;

    fetch(`https://api.github.com/repos/${user}/${repo}?state=all`)
          .then(res => res.json())
          .then(res => {
            dispatch ({
              type: C.FETCH_ISSUE_COUNT, 
              payload: res
            })
          })
          .catch(err => {
            dispatch ({
              type: C.ADD_ERROR,
              payload: err
            })
          })
  }
}

export const setUserData = (userData) => (
  {
    type: C.SET_USER_DATA,
    payload: userData
  }
)
  