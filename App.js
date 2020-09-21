import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button, Card} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
