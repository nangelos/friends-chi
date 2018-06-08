import axios from 'axios';
import history from '../history';

const CREATE_DATA = 'CREATE_DATA';

const initialState = {
  data: [],
};

const createData = data => ({ type: CREATE_DATA, data });

export const addData = data => {
  return dispatch => {
    console.log('in the addData function')
    axios
      .post(data)
      .then(res => {
        dispatch(createData(res));
        history.push('/home');
      })
      .catch(err => console.error(err));
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_DATA:
      return [...state, action.data];
    default:
      return state;
  }
}
