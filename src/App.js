import React, { Component } from 'react';
import './App.css';
import Header from './frontend/components/header/header';
import { RandomGraph } from './frontend/components/graph/graph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RandomGraph />
      </div>
    );
  }
}

export default App;
