import React, { Component } from 'react';
import './App.css';


import Header from './Header';
import Stocks from './Stocks';

class App extends Component {
  
  render() {
    return (
      <div className="myApp">
        <Header />
        <Stocks />
      </div>
   );
  }
}

export default App;
