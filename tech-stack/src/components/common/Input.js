import React from 'react';
import { TextInput, View, Text } from 'react-native';

function Input({ label, value, onChangeText, placeholder, secureTextEntry }) {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  }

};

export { Input };
