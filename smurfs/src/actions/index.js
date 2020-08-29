import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const gettingSmurfs = () => (dispatch) => {
    dispatch({type: FETCHING_START});
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
        console.log(response);
        dispatch({type: FETCHING_SUCCESS, payload: response})
    })
    .catch(error => {
        console.log("unable to get data", error);
        dispatch({type: FETCHING_FAILURE, payload: error})
    })
}