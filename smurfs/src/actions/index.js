import axios from "axios"
export const GET_SMURFS = "GET_SMURFS";
export const SMURFS_BACK = "SMURFS_GOT";
export const ADD_SMURF = "ADD_SMURF";
export const SMURF_ADDED = "SMURF_ADDED"; 
export const ERROR = "ERROR";

const url = "http://localhost:3333/"

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURFS
  })
  axios
  .get(`${url}smurfs`)
  .then(res => {
    dispatch({
      type: SMURFS_BACK,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: ADD_SMURF
  })
  axios
  .post(`${url}smurfs`, smurf)
  .then(res => {
    dispatch({
      type: SMURF_ADDED,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}