import React, { Component } from 'react';
import { returnDispatch } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { table } from 'semantic-ui-react';
import { Icon, Menu } from 'semantic-ui-react';

class Dispatch extends Component {
  state = { activeItem: 'Dispatch Services' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        {/* // Menu */}
        <Menu fluid widths={6} size="massive">
          <Menu.Item
            name="Home"
            active={activeItem === 'Home'}
            onClick={() => this.props.history.push('/')}
          />

          <Menu.Item
            name="Responders"
            active={activeItem === 'Responders'}
            onClick={() => this.props.history.push('/Responders')}
          />

          <Menu.Item
            name="Dispatch Services"
            active={activeItem === 'Dispatch Services'}
            onClick={() => this.props.history.push('/Dispatch')}
          />

          <Menu.Item
            name="Live Map"
            active={activeItem === 'Live Map'}
            onClick={() => this.props.history.push('/Map')}
          />

          <Menu.Item
            name="About"
            active={activeItem === 'About'}
            onClick={() => this.props.history.push('/About')}
          />

          <Menu.Item
            name="Help"
            active={activeItem === 'Help'}
            onClick={() => this.props.history.push('/Help')}
          />
        </Menu>

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
