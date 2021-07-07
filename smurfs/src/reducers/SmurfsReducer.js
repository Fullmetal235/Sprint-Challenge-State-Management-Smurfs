import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE
} from '../actions';

const initialState = {
  Smurfs: [],
  isLoading: false,
  error: ''
  };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Smurfs: action.payload,
        error: ''
      };
      case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
    default:
      return state;
  }
};