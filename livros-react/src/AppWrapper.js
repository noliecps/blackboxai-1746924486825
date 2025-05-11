import React from 'react';
import App from './App';
import { LivrosProvider } from './LivrosContext';

function AppWrapper() {
  return (
    <LivrosProvider>
      <App />
    </LivrosProvider>
  );
}

export default AppWrapper;
