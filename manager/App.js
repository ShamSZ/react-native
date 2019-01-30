import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyB516O2Ei9IHkZCUyOKQaW8f4d5GCPuxV0',
      authDomain: 'manager-f44b2.firebaseapp.com',
      databaseURL: 'https://manager-f44b2.firebaseio.com',
      projectId: 'manager-f44b2',
      storageBucket: 'manager-f44b2.appspot.com',
      messagingSenderId: '406771979817'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
