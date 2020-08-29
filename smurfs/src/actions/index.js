import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const gettingSmurfs = () => (dispatch) => {
    dispatch({type: FETCHING_START});
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
        console.log("data from axios call", response.data);
        dispatch({type: FETCHING_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log("unable to get data", error);
        dispatch({type: FETCHING_FAILURE, payload: error})
    })
}

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({type: POST_START});
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
        console.log("posting data", response.data)
        dispatch({type: POST_SUCCESS, payload: response.data});
    })
    .catch(error => {
        console.log("unable to post", error);
        dispatch({type: POST_FAILURE, payload: error});
    })
}