import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Wasteline',
    };  
  }

  render() {
    return (
    <div>
      <h1>{this.state.name}</h1>  
      <iframe 
        width="560" height="315" src="https://www.youtube.com/embed/j5--Gg_l8A0" 
        frameborder="0" allowfullscreen>
      </iframe>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);