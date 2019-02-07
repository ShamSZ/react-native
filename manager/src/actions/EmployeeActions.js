import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

// one action to update any input - prop: value
export function employeeUpdate({ prop, value }) {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
}

export function employeeCreate({ name, phone, shift }) {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
}

export function employeesFetch() {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    //anytime any data is added/changed in below ref, the following action will
    //be dispatched to get the new data:
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
}
