import React from 'react';
import './app.css';
import TechList from './components/TechList';
import logoMarca from './assets/logo SGE.jpeg';

function App() {
  return (
    <>
      <img src={logoMarca} width="100" />
      <TechList />
    </>
  );
}

export default App;
