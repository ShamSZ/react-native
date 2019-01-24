import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

function CountryDetail({ country }) {
  const { alpha3Code, name, capital, population, currencies, area } = country;
  const {
    headerContentStyle,
    headerTextStyle,
    thumbContainerStyle,
    thumbTextStyle,
    infoStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbContainerStyle}>
          <Text style={thumbTextStyle}>{alpha3Code}</Text>
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
          <Text>Capital: {capital}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={infoStyle}>
          <Text>Population: {population}</Text>
          <Text>Currencies: {currencies[0].code} / {currencies[0].name}</Text>
          <Text>Area: {area}km sq.</Text>
        </View>
      </CardSection>
    </Card>
  );
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%'
  },
  thumbTextStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  infoStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: '25%'
  }
};

export default CountryDetail;
