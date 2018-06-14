import axios from 'axios';
import history from '../history';

const CREATE_DATA = 'CREATE_DATA';
const GET_ALL_DATA = 'GET_ALL_DATA';
const GET_SELECTED_DATA = 'GET_SELECTED_DATA'

const initialState = {
  allData: [],
  selectedData: {},
};

const createData = data => ({ type: CREATE_DATA, data });
const getAllData = data => ({ type: GET_ALL_DATA, data });
const getSelectedData = data => ({ type: GET_SELECTED_DATA, data })

export const addData = data =>
  dispatch =>
    axios
      .post('/api/data', data)
      .then(res => {
        dispatch(createData(res.data));
        history.push('/home');
      })
      .catch(err => console.error(err));

export const fetchAllData = () => dispatch =>
  axios.get('/api/data')
    .then(res => dispatch(getAllData(res.data)))
    .catch(err => console.error(err))

export const fetchSelectData = (initials) =>
  dispatch =>
    axios.get(`/api/data/${initials}`)
      .then(res => dispatch(getSelectedData(res.data)))
      .catch(err => console.error(err))

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_DATA:
      return { ...state, allData: action.data };

    case GET_ALL_DATA:
      return { ...state, allData: action.data }

    case GET_SELECTED_DATA:
      return { ...state, selectedData: action.data }

    default:
      return state;
  }
}
