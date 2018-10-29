import React, {Component} from 'react';

class Release extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="release">
        <h4>{this.props.name}</h4>
        <a href={this.props.url}>{this.props.url}</a>
      </div>
    );
  }

}

export default Release;
