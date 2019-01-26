import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import LogoutButton from './src/components/LogoutButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <LogoutButton />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
