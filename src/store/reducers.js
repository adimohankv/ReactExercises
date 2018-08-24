import C from '../constants';
import { combineReducers } from 'redux';

export const issues = (state = [], action) => (
  action.type === C.FETCH_ISSUES ?
    action.payload :
    state
)

export const issueCount = (state = [], action) => (
  action.type === C.FETCH_ISSUE_COUNT ?
    action.payload :
    state
)

export const issueState = (state = 'all', action) => (
  action.type === C.FILTER_ISSUE_STATE ?
    action.payload :
    state
)

export const userData = (state = {}, action) => (
  action.type === C.SET_USER_DATA ?
    action.payload :
    state
)

export const loading = (state = true, action) => {
  switch (action.type) {

    case C.FETCHING_STATE :
        return true

    case C.FETCH_ISSUES :
        return false

    case C.ADD_ERROR :
        return false

    case C.FETCH_ISSUE_COUNT :
        return false

    case C.ISSUES_COMMENTS :
        return false
    default :
        return state
  }
}

export const error = (state = null, action) => (
  action.type === C.ADD_ERROR ?
    action.payload :
    state
)

export const headers = (state = null, action) => (
  action.type === C.SET_HEADERS ?
    action.payload :
    state
)

export const comments = (state = [], action) => {
  switch (action.type) {

    case C.ISSUES_COMMENTS :
      return action.payload
    case C.SET_ISSUE_COMMENT :
      return [...state, action.payload]
    default :
      return state
  }
}

export const currentIssueData = (state = {}, action) => (
  action.type === C.ISSUE_DATA ?
    action.payload :
    state
)

export default combineReducers({
  issues,
  issueCount,
  issueState,
  userData,
  loading,
  error,
  headers,
  comments,
  currentIssueData
})