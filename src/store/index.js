import {combineReducers} from 'redux'

import {  postReducer } from './reducers'



// export const userPostSelector = state.post

export const rootReducer = combineReducers({
    post: postReducer
})





