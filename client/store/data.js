import axios from 'axios';
import history from '../history';

const ADD_DATA = 'ADD_DATA';

const initialState = {
  data: [],
};

const addData = data => ({ type: ADD_DATA, data });

export const createData = data => {
  return dispatch => {
    axios
      .post(data)
      .then(res => {
        dispatch(addData(res));
        history.push('/home');
      })
      .catch(err => console.error(err));
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.data];
    default:
      return state;
  }
}
