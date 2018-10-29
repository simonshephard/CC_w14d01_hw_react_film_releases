import React, {Component} from 'react';
import Release from '../components/Release';
import {data as filmData} from '../data/data';


class FilmReleases extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: filmData
    }
  }

  render(){
    const releaseNodes = this.state.data.map(release => {
      return (
        <Release
          key={release.id}
          name={release.name}
          url={release.url}>
        </Release>);
    })
    return (
      <div className="container">
        <h1 className="title">Upcoming Film Releases for UK</h1>
        {releaseNodes}
        <a href="https://www.imdb.com/calendar/?region=gb"><h4 className="imdblink">View upcoming releases</h4></a>
      </div>
    );
  }



}

export default FilmReleases;
