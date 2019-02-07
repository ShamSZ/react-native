import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INTITIAL_STATE = {};

export default (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log(action.type);
      return state;
    default:
      return state;
  }
};
