//нужно создать константы с action.type
const LOAD_POST = 'LOAD_POST'
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS'
const LOAD_POST_ERROR = 'LOAD_POST_ERROR'

// import { defaultState } from "..";


export const defaultState = {
    data:[],
    loading: false,
    error: null,
}



export function postReducer(state = defaultState, action) {
    switch (action.type) {
        case LOAD_POST: {
            return {
                ...state,
                loading: true,
                error: null,
                data: {}
            };
        }
        case LOAD_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };
        }
        case LOAD_POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: {}
            };
        }

        default:
            return state;
    }
}

//export const loadPost = (payload) => ({type: LOAD_POST_SUCCESS, payload})


export const loadPost = data => {
    return {type: LOAD_POST_SUCCESS,payload: data};
  }