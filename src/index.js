import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    background: '#aeb8c4',
    accent: 'orangered',
    white: '#fff',
    black: '#000'
  },
  radius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: '16px',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
