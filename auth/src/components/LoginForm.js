import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        //if log in attempt fails, create account:
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.' });
          });
      });
  }

  render() {
    return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="user@mail.com"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          placeholder="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
      </CardSection>
      <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      <CardSection>
        <Button onPress={this.onButtonPress}>
          Log in
        </Button>
      </CardSection>
    </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
