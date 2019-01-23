import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

function CountryDetail(props) {
  return (
    <Card>
      <CardSection>
        <Text>{props.country.name}</Text>
      </CardSection>
    </Card>
  );
}

export default CountryDetail;
