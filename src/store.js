import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

import auth, { init as initAuth } from './state/auth'
import contacts, {init as initContactsSync } from './state/contacts'
import groups, { init as initGroupsSync } from './state/groups'


const reducer = combineReducers({
    auth,
    contacts,
    groups
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initAuth())
store.dispatch(initContactsSync())
store.dispatch(initGroupsSync())


export default store