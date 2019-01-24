import React from 'react';
import { Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

function CountryDetail({ country }) {
  const { alpha3Code, name, capital, population, currencies, area, latlng } = country;
  const {
    headerContentStyle,
    headerTextStyle,
    thumbContainerStyle,
    thumbTextStyle,
    infoStyle
  } = styles;
  let zoomLevel = 3;

  function getZoom() {
    if (area < 2000) {
      zoomLevel = 8;
    } else if (area < 100000) {
      zoomLevel = 7;
    } else if (area < 300000) {
      zoomLevel = 6;
    } else if (area < 1000000) {
      zoomLevel = 5;
    } else if (area < 3000000) {
      zoomLevel = 4;
    } else {
      zoomLevel = 3;
    }
    return zoomLevel;
  }

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

      <CardSection>
        <Button onPress={() => Linking.openURL(`https://www.google.co.uk/maps/@${latlng},${getZoom()}z`)}>
          Show on map
        </Button>
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
