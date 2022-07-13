import {combineReducers} from 'redux'

import { reducer } from './reducers'

export const defaultState = {
    data:{},
    loading: false,
    error: null,
}

export const rootReducer = combineReducers({
    reducer
})





