import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
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

      <CardSection>
        <Button>
          Log in
        </Button>
      </CardSection>
    </Card>
    );
  }
}

export default LoginForm;
