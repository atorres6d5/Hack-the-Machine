import React, { Component } from 'react';
import menu from 'semantic-ui-react';

class menu extends Component {
  render() {
    return (
      <div>
        <div class="ui three item menu">
          <a class="item">Editorials</a>
          <a class="item">Reviews</a>
          <a class="item active">Upcoming Events</a>
        </div>
      </div>
    );
  }
}

export default menu;
