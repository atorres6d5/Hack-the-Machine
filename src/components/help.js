import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RespondersTable from './RespondersTable';
import { getResponders } from '../actions/index';
import { Menu } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

export default class help extends Component {
  state = { activeItem: 'Help' };
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

        {/* Help  */}

        <h6>
          <div>
            <b className="help">Need help? </b>
          </div>
          Connecting with confidential help as a service dispatcher is simple
          with Military ALDO. You can recieve help anytime, 24/7. You can
          recieve direct help via either our live chat room or toll free phone
          number by clicking the "Contact" button below. You can also click on
          About in the menu to learn more about ALDO.
          <div className="btnpad">
            <button size="massive" class="ui black button">
              <h8> Contact </h8>
            </button>
          </div>
        </h6>
      </div>
    );
  }
}
