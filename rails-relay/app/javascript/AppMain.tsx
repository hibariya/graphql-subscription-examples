import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';

import MessageList from './MessageList';

interface AppMainProps {
  viewer: any;
}

class AppMain extends Component<AppMainProps, {}> {
  render() {
    return (
      <main>
        <MessageList viewer={this.props.viewer} />
      </main>
    );
  }
}

export default createFragmentContainer(AppMain, {
  viewer: graphql`
    fragment AppMain_viewer on User {
      id
      name
      ...MessageList_viewer
    }
  `,
});
