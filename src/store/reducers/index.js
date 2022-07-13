import { defaultState } from "..";



export function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOAD_POST': {
            return {
                ...state,
                loading: true,
                error: null,
                data: {}
            };
        }
        case 'LOAD_POST_SUCCESS': {
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };
        }
        case 'LOAD_POST_ERROR': {
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