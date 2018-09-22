import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactTable from "react-table"


class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

}



const mapStateToProps = (props) =>{
  const { user, projects, reviews } = props.home

  return { user, projects, reviews}
}

export default withRouter(connect(mapStateToProps, {})(Home));
