// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';


// Import a library to help create a registerComponent
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import CountryList from './src/components/CountryList';

// Create a component
function App() {
  return (
    <View>
      <Header headerText={'Countries'} />
      <CountryList />
    </View>
  );
}


// Render it to the device
AppRegistry.registerComponent('countries', () => App);
