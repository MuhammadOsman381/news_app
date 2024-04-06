import React from 'react';
import './App.css';
import NavBar from './components/nav';
import Hero from './components/hero';
import Loader from './components/loader';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
   
    </div>
  );
}

export default App;
