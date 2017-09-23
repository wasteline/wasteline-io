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
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);