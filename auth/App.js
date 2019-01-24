import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBI5uL-pn7J_aYtSKp_ls3WJ7D3pWxFBjE',
    authDomain: 'authentication-demo-1a55f.firebaseapp.com',
    databaseURL: 'https://authentication-demo-1a55f.firebaseio.com',
    projectId: 'authentication-demo-1a55f',
    storageBucket: 'authentication-demo-1a55f.appspot.com',
    messagingSenderId: '108404142346'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
