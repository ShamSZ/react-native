import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          label="Password"
          placeholder="password"
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

function mapStateToProps(state) {
  return {
    email: state.auth.email
  };
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);

// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import firebase from 'firebase';
// import { Button, Card, CardSection, Input, Spinner } from './common';
//
//
// class LoginForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       error: '',
//       loading: false
//     };
//
//     this.onButtonPress = this.onButtonPress.bind(this);
//     this.onLoginSuccess = this.onLoginSuccess.bind(this);
//     this.onLoginFail = this.onLoginFail.bind(this);
//   }
//
//   onButtonPress() {
//     const { email, password } = this.state;
//
//     this.setState({ error: '', loading: true });
//
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(() => {
//         this.onLoginSuccess();
//       })
//       .catch((error) => {
//         //if log in attempt fails, create account:
//         console.log(error);
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(() => this.onLoginSuccess())
//           //if register attempt fails:
//           .catch(this.onLoginFail);
//       });
//   }
//
//   onLoginSuccess() {
//     this.setState({
//       email: '',
//       password: '',
//       error: '',
//       loading: false
//     });
//   }
//
//   onLoginFail() {
//     console.log('failed to log in...');
//     this.setState({
//       error: 'Authentication Failed',
//       loading: false
//     });
//   }
//
//   renderButton() {
//     if (this.state.loading) {
//       return <Spinner size="small" />;
//     }
//     return (
//       <Button onPress={this.onButtonPress}>
//         Log in
//       </Button>
//     );
//   }
//
//   render() {
//     return (
//     <Card>
//       <CardSection>
//         <Input
//           label="Email"
//           placeholder="user@mail.com"
//           value={this.state.email}
//           onChangeText={email => this.setState({ email })}
//         />
//       </CardSection>
//
//       <CardSection>
//         <Input
//           label="Password"
//           placeholder="password"
//           value={this.state.password}
//           onChangeText={password => this.setState({ password })}
//           secureTextEntry
//         />
//       </CardSection>
//
//       <Text style={styles.errorTextStyle}>{this.state.error}</Text>
//
//       <CardSection>
//         {this.renderButton()}
//       </CardSection>
//     </Card>
//     );
//   }
// }
//
// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   }
// };
//
// export default LoginForm;
