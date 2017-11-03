import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&query='+this.state.value+'&language=en-US&api_key=0467eaa124fa51eafbd4fc2928e88c30'
    fetch(url)
    .then(
      function(response) {
      response.json().then(function(data) {
        this.props.onUpdate(data.results[0]);
      }.bind(this))
    }.bind(this)
  )
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for a movie:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
