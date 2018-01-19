import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import MessageForm from './MessageForm';
import MessageList from './MessageList';

interface AppMainProps {
  viewer: any;
  relay?: any;
}

class AppMain extends Component<AppMainProps, {}> {
  render() {
    return (
      <main>
        <MessageForm viewer={this.props.viewer} relay={this.props.relay} />
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
