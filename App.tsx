import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Routes } from "./src/routes";

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer >
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
