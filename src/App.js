import React, { Component } from 'react';
import FilmReleases from './containers/FilmReleases';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="films">
        <FilmReleases />
      </div>
    );
  }
}

export default App;
