import React from 'react';
import { Text, View } from 'react-native';

function CountryDetail(props) {
  return (
    <View>
      <Text>{props.country.name}</Text>
    </View>
  );
}

export default CountryDetail;
