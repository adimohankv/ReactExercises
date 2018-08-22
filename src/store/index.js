import AppReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const consoleMessages = store => next => action => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log(`
        Before Action Dispatch ${JSON.stringify(store.getState())}
    `)
    result = next(action)
    console.log(`
        After Action Dispatch ${JSON.stringify(store.getState())}
    `)
    console.groupEnd()

    return result

}

export default () => applyMiddleware(thunk, consoleMessages)(createStore)(AppReducers)