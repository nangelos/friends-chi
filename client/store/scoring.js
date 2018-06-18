import axios from 'axios';
import history from '../history';

const CREATE_SCORE = 'CREATE_SCORE';
const GET_ALL_SCORES = 'GET_ALL_SCORE';
const GET_SELECTED_SCORE = 'GET_SELECTED_SCORE'

const initialState = {
  allScores: [],
  selectedScore: [],
};

const createScore = data => ({ type: CREATE_SCORE, data });
const getAllScores = data => ({ type: GET_ALL_SCORES, data });
const getSelectedScore = data => ({ type: GET_SELECTED_SCORE, data })

export const addScore = scoredata => {
  return dispatch =>
    axios
      .post('/api/scoring', scoredata)
      .then(res => {
        dispatch(createScore(res.data));
        history.push('/scoring');
      })
      .catch(err => console.error(err));
}
export const fetchAllScores = () => dispatch =>
  axios.get('/api/scoring')
    .then(res => dispatch(getAllScores(res.data)))
    .catch(err => console.error(err))

export const fetchSelectScore = (childInitials) => dispatch =>
  axios.get(`/api/scoring/${childInitials}`)
    .then(res =>
      dispatch(getSelectedScore(res.data)))
    .catch(err => console.error(err))

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SCORE:
      return { ...state, allScores: action.data };

    case GET_ALL_SCORES:
      return { ...state, allScores: action.data }

    case GET_SELECTED_SCORE:
      return { ...state, selectedScore: action.data }

    default:
      return state;
  }
}
