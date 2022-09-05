import React from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Series from './components/Series/Series';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Series />
      <Contact />
    </div>
  );
}

export default App;
