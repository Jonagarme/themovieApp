import React from 'react';
import {StatusBar} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  DefaultThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.accent = '#1ae1f2';

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = '#15212b';

  return (
    <PaperProvider theme={DarkThemePaper}>
      <NavigationContainer theme={DarkThemeNavigation}>
        <StatusBar barStyle={'light-content'} />
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
