
import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
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
        default:
            return state;
    }
}