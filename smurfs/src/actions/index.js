import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURF = 'FETCH_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const ADD_SMURF ='ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
// export const UPDATE_SMURF ='UPDATE_SMURF';
// export const DELETE_SMURF = 'DELETE_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF });
  axios
  .get('http://localhost:3333/smurfs')
  .then((res) => {
    dispatch({ 
      type: SUCCESS,
      payload: res.data
    });
  })
  .catch((err) => {
    dispatch({ type: FAIL, payload: err })
  });
};

export function addSmurf(name, age, height) {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF });
    return axios
    .post('http://localhost:3333/smurfs', {name, age, height})
    .then((res) => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
      });
    })
    .catch((err) => {
      const payload = err.response ? err.response.data : err 
      dispatch({ type: ADD_SMURF_FAILED, payload })
    })
  }
}