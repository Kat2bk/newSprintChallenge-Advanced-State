
import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE,
    DELETE_SUCCESS,
    DELETE_FAILURE
} from "../actions";

const initialState = {
    smurfs: [],
    error: "",
    isFetching: false
}

// need start, success, failure

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case POST_START:
            return {
                ...state,
                isFetching: true
            };
        case POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case DELETE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}