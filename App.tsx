import React from 'react';
import { Home } from './src/pages/Home';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { SignIn } from './src/pages/SignIn';
import { SignUp } from './src/pages/SignUp';


const App: React.FunctionComponent = () => {

  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>

  );
}

export default App;
