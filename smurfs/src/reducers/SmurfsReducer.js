import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE,
  SEND_SMURF_DATA_START,
  SEND_SMURF_DATA_SUCCESS,
  SEND_SMURF_DATA_FAILURE
} from '../actions';

const initialState = {
  Smurfs: [],
  isFetching: false,
  isPosting: false,
  error: ''
  };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        smurfs : [],
        isFetching: true,
        error: ''
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Smurfs: action.payload,
        error: ''
      };
      case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
    
  case SEND_SMURF_DATA_START : 
            return {
                ...state,
                isPosting: true,                
            }    
        case SEND_SMURF_DATA_SUCCESS : 
            
        return {
                ...state,
                isPosting: false
            }    
        case SEND_SMURF_DATA_FAILURE : 
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }    
        default:
            return state
    }
}

