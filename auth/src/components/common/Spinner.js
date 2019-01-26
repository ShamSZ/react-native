import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function Spinner({ size }) {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
}

const styles = {
  spinnerStyle: {
    alignitems: 'center',
    justifyContent: 'center',
    flex: 1
  }
};

export { Spinner };
