/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS, SMURFS_BACK, ADD_SMURF, SMURF_ADDED, ERROR} from "../actions/index"

 const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  }

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
    return {
      ...state,
      fetching: true
    }

    case SMURFS_BACK:
    return {
      ...state,
      smurfs: action.payload,
      fetching: false
    }

    case SMURF_ADDED:
    return {
      ...state,
      smurfs: action.payload,
      adding: false
    }

    case ERROR:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }

    default:
    return state;
  }
}

export default smurfReducer;
