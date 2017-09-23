import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Video from './ReactPlayer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Wasteline',
      videoUrl: 'https://www.youtube.com/embed/p4OnLr3dBfs'
    };  
  }

  render() {
    return (
    <div>
      <h1>{this.state.name}</h1>
      <Video videoUrl={this.state.videoUrl} />  
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);