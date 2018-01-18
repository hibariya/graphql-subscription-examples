import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';

import MessageList from './MessageList';

class AppMain extends Component {
  render() {
    return (
      <main>
        <MessageList viewer={this.props.viewer} />
      </main>
    );
  }
}

AppMain.propTypes = {
  viewer: PropTypes.object.isRequired,
  relay: PropTypes.shape({
    environment: PropTypes.object.isRequired,
  }).isRequired,
};

export default createFragmentContainer(AppMain, {
  viewer: graphql`
    fragment AppMain_viewer on User {
      id
      name
      ...MessageList_viewer
    }
  `,
});
