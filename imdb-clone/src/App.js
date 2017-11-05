import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search'

class App extends Component {
  constructor() {
    super()
    this.state = {results: {}}
    //this.updateResult = this.updateResult.bind(this);
  }

  updateResult = (newResult) => {
    this.setState({results: newResult})
  }
  render() {

    const movies = (this.state.results.results && this.state.results.results.map((movie,i) => {
      return (
        <div key={i}>
          <h3>Title of Movie: {movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} width="250px" />
          <div>Description of Movie: <br /> {movie.overview}</div>
        </div>)

    })
  );
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Movie Finder</h1>
        </header>
        <br />
          <div>
            <Search onUpdate={this.updateResult} />
            {movies}
          </div>
      </div>
    );
  }
}

export default App;
