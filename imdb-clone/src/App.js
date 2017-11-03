import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search'

class App extends Component {
  constructor() {
    super()
    this.state = {results: {}}
    this.updateResult = this.updateResult.bind(this);
  }

  updateResult(newResult) {
    this.setState({results: newResult})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Movie Finder</h1>
        </header>
        <br />
          <div>
            <Search onUpdate={this.updateResult} />

          </div>
      </div>
    );
  }
}

export default App;
