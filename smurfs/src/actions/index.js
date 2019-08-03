import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURF = 'FETCH_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
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
  .then(({ data }) => {
    console.log(data);
    dispatch({ 
      type: GET_SMURF,
      payload: data.results
    });
  })
  .catch(err => console.log(err));
};

export const postSmurf = () => dispatch => {
  dispatch ({ type: FETCH_SMURF });
  axios
  .post('http://localhost:3333/smurfs')
  .then(({ data }) => {  
    dispatch({
      type: ADD_SMURF,
      payload: data.results
    });
   })
   .catch(err => console.log(err));
};