import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'



class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <a className="App-intro" onClick={()=>this.props.history.push('/Responders')}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </a>
      </div>
    );
  }

}




export default Home;
