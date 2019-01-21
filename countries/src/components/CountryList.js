import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class CountryList extends Component {
  state = {

  };

  componentWillMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result => this.setState({ countries: result.data }));
  }

  render() {
    return (
      <View>
        <Text> List of countries</Text>
        <Text>{this.state.countries && this.state.countries[0].name}</Text>
      </View>
    );
  }
}

export default CountryList;
