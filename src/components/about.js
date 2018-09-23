import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RespondersTable from './RespondersTable';
import { getResponders } from '../actions/index';
import { Menu } from 'semantic-ui-react';

export default class about extends Component {
  state = { activeItem: 'About' };
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

        <h6>
          <div>
            <b className="about">About ALDO</b>
          </div>
          The Military Navy Aldo portal provides access to Service-specific
          resources for dispatchers to improve search and rescue operations. To
          locate available responders, contact information, those in need in the
          area, and support; please refer to the menu.
          <div className="btnpad">
            <button size="massive" class="ui black button">
              <h8> Learn More Here </h8>
            </button>
          </div>
        </h6>
      </div>
    );
  }
}
