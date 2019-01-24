import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import CountryList from './src/components/CountryList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Countries'} />
        <CountryList />
      </View>
    );
  }
}
