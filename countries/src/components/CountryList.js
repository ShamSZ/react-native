import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CountryDetail from './CountryDetail';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result => this.setState({ countries: result.data }));
  }

  renderCountries() {
  return this.state.countries.map(country =>
      <CountryDetail country={country} key={country.alpha3Code} />
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderCountries() }
      </ScrollView>
    );
  }
}

export default CountryList;
