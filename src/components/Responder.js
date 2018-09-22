import React, { Component } from 'react';
import {ReactTable} from 'react-table';

class Responder extends Component {

    const columns = [{
        Header: 'Name',
        Accesor: 'name'
    }, {
        Header: 'Location (City)',
        Accesor: 'location'
    }, {
        Header: 'Category',
        Accesor: 'category'
    }]

    render() {
      return (
        <ReactTable>
            
        </ReactTable>
      );
    }
  
  }
  
  export default Responder;
  