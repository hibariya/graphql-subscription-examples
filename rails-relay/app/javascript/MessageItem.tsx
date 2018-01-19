import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

interface MessageItemProps {
  message: any;
}

class MessageItem extends Component<MessageItemProps, {}> {
  render() {
    return (
      <div>
        {this.props.message.body} {this.props.message.createdAt}
      </div>
    );
  }
}

export default createFragmentContainer(MessageItem, {
  message: graphql`
    fragment MessageItem_message on Message {
      id
      body
      user { name }
    }
  `,
});
