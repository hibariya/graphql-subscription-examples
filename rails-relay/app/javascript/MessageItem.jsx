import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';

class MessageItem extends Component {
  render() {
    return (
      <div>
        {this.props.message.body} {this.props.message.createdAt}
      </div>
    );
  }
}

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  relay: PropTypes.shape({
    environment: PropTypes.object.isRequired,
  }).isRequired,
};

export default createFragmentContainer(MessageItem, {
  message: graphql`
    fragment MessageItem_message on Message {
      id
      body
      user { name }
    }
  `,
});
