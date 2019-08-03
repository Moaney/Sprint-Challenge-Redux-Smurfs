/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADD_SMURF,
  GET_SMURF,
  FETCH_SMURF
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
function smurfsReducer(state = initialState, action) {
  console.log('reducer', action);
  switch(action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
      case GET_SMURF:
        return {
          ...state,
          error: null,
          addingSmurfs: false,
          fetchingSmurfs: action.payload
        };
        case ADD_SMURF:
          return {
            ...state,
            fetchingSmurfs: false,
            addingSmurfs: true,
            smurfs: action.payload
          };
          default:
            //do nothing
  }
}
export default smurfsReducer;