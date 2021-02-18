import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Stocks from './Stocks';

function App() {
  return (
    <div className="App">
      <Header />
      <Stocks />
    </div>
  );
}

export default App;
