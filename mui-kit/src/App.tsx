import React from 'react';
import Home from './page/Home';
import { ThemeProvider } from "@emotion/react";
import theme from './utils/Theme';

function App() {
  return (

      <ThemeProvider theme = {theme}>
      <Home />
      </ThemeProvider>
    
  );
}

export default App;
