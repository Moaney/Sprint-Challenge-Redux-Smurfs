/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURF,
  FETCH_SMURF,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
  SUCCESS,
  FAIL
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
        fetchingSmurfs: true,
      };
      case GET_SMURF:
        return {
          ...state,
          error: null,
          fetchingSmurfs: false,
          smurfs: action.payload
        };
        case ADD_SMURF: 
        return {
          ...state,
          fetchingSmurfs: false,
          error: null
        };
        case ADD_SMURF_SUCCESS:
          return {
            ...state, 
            smurfs: action.payload
          };
          case ADD_SMURF_FAILED:
            return {
              ...state,
              fetchingSmurfs: false,
              error: action.payload
            };
            case SUCCESS:
              return {
                ...state,
                fetchingSmurfs: false,
                error: null,
                smurfs: [...state.smurfs, ...action.payload]
              };
              case FAIL:
                return {
                  ...state,
                  fetchingSmurfs: false,
                  error: action.payload
                };
          default:
            return state;
  }
}
export default smurfsReducer;