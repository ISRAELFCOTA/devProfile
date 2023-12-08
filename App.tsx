import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
