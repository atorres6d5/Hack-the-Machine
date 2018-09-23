import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RespondersTable from './RespondersTable';
import { getResponders } from '../actions/index';
import { WebMap } from 'react-arcgis';
import { Menu } from 'semantic-ui-react';

export default class map extends Component {
  state = { activeItem: 'Live Map' };
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
        <div style={{ width: '100vw', height: '100vh' }}>
                <WebMap
                    id="b834a68d7a484c5fb473d4ba90d35e71" //This needs to change to our map id once we validate our app with esri
                    viewProperties={{
                        center: [-90.0800, 29.9700],
                        zoom: 12
                    }}
                />
            </div>
      </div>
    );
  }
}
