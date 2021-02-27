import { useState } from 'react';
import GlobalStyle from './stylesFolder';
import Menu from './components/Menu'
import { Container } from './styles.js'

function App() {
  return (
    <>
      <Menu/>
      <GlobalStyle />
    </>
  );
}

export default App;
