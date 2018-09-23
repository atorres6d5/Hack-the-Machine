import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RespondersTable from './RespondersTable'
import {getResponders} from '../actions/index'

class Responders extends Component {

  render() {
      console.log(this.props)
    return (
      <div className="Responders">
        <h1>Responders</h1>
        <RespondersTable/>
      </div>
    );
  }
}



const mapStateToProps = (props) =>{
   const { responderObjects } = props.responderReducer

   return {responderObjects}
}



export default withRouter(connect(mapStateToProps, {getResponders})(Responders));
