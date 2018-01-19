import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

interface MessageItemProps {
  message: any;
}

class MessageItem extends Component<MessageItemProps, {}> {
  render() {
    const { message } = this.props;

    return (
      <div>
        {message.createdAt} {message.user.name}: {message.body}
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
      createdAt
    }
  `,
});
