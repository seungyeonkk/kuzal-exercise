import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './app/style/theme';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./app/navigations/Stack";

export default function App() {
  return (
      <ThemeProvider theme={theme}>
          <StatusBar style="light" backgroundColor={theme.background}/>
          <NavigationContainer>
              <StackNavigation/>
          </NavigationContainer>
      </ThemeProvider>
  );
}
