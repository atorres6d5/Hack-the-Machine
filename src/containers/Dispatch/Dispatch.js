import React, { Component } from 'react';
import { returnDispatch } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { table } from 'semantic-ui-react';

class Dispatch extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Dispatch Services</h1>
        </header>
        {/* Available Resources */}
        <h3>Resources</h3>
        <table class="ui sortable orange called table">
          <thead>
            <th>Type</th>
            <th>Location</th>
            <th>Areas Served</th>
            <th>Qty Available</th>
            <th>Category</th>
          </thead>
        </table>

        {/* First Responders */}
        <h3>First Responders</h3>
        <table class="ui sortable blue celled table">
          <thead>
            <th>ID</th>
            <th>Location</th>
            <th>Areas Served</th>
            <th>Services</th>
            <th>Status</th>
          </thead>
          <tbody />
          <tfoot>
            <tr>Test</tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = props => {
  const { dispatchs } = props.dispatchReducer;
  return { dispatchs };
};

export default withRouter(
  connect(
    mapStateToProps,
    { returnDispatch }
  )(Dispatch)
);
