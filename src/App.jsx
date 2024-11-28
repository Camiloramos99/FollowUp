import { useState } from 'react'
import { NavBarProvider } from './contexts/NavbarContext';
import { NavBar } from './components/NavBar';
import './App.css'

function App() {

  return (
    <>
      <NavBarProvider>
        <NavBar />
        <div>
          <h1>Follow Up</h1>
        </div>
      </NavBarProvider>
    </>
  );
};

export default App;
