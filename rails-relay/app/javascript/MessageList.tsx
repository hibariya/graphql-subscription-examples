import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';

import MessageItem from './MessageItem';

interface MessageListProps {
  viewer: any;
}

class MessageList extends Component<MessageListProps, {}> {
  renderMessages() {
    return this.props.viewer.messages.edges.map(({ node }) => (
      <MessageItem message={node} key={`message-item-${node.id}`} />
    ));
  }

  render() {
    return (
      <div>
        {this.renderMessages()}
      </div>
    );
  }
}

export default createFragmentContainer(MessageList, {
  viewer: graphql`
    fragment MessageList_viewer on User {
      messages(first: 10) {
        edges {
          node {
            id
            ...MessageItem_message
          }
        }
      }
    }
  `,
});
