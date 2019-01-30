import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export function emailChanged(text) {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}
export function passwordChanged(text) {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

export function loginUser({ email, password }) {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
}

function loginUserSuccess(dispatch, user) {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
}

function loginUserFail(dispatch) {
  dispatch({ type: LOGIN_USER_FAIL });
}
