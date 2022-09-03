import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Series from './components/Series/Series';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Series />
    </div>
  );
}

export default App;
