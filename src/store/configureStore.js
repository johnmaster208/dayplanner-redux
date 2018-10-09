import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger' 
import ISI from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk' 
import rootReducer from '../reducers'

const middleware = [thunk, ISI(), logger]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

export default store