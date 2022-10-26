import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { CyclesContextProvider } from './contexts/CyclesContext';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
