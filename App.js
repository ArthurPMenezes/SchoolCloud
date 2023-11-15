import React from 'react';
import { StatusBar, LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

// Ignorar avisos específicos
LogBox.ignoreLogs(['ViewPropTypes']);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0064EA" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
