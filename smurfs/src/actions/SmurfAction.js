import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START'
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS'
export const FETCH_SMURF_DATA_FAILURE =  'FETCH_SMURF_DATA_FAILURE'
export const SEND_SMURF_DATA_START = 'SEND_SMURF_DATA_START'
export const SEND_SMURF_DATA_SUCCESS = 'SEND_SMURF_DATA_SUCCESS'
export const SEND_SMURF_DATA_FAILURE = 'SEND_SMURF_DATA_FAILURE'

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
        console.log(err);
      });
  };
};

export const sendData = (values) => dispatch => {
  dispatch({type: SEND_SMURF_DATA_START})
  axios.post('http://localhost:3333/smurfs', values)
  .then(res => {
      console.log(res.data)
      dispatch({type: SEND_SMURF_DATA_SUCCESS, payload: res.data})})
  .catch(err => {
      console.log(err)
  dispatch({type: SEND_SMURF_DATA_FAILURE, payload: err.response})})
} 