import React, { Component } from 'react';
import PostMessageMutation from './mutations/PostMessageMutation';

interface MessageFormProps {
  relay: any;
  viewer: any;
}

interface MessageFormState {
  body: string;
}

export default class extends Component<MessageFormProps, MessageFormState> {
  constructor(props: MessageFormProps) {
    super(props);

    this.state = { body: '' };
  }

  updateDraftBody(e) {
    const body = e.target.value;

    this.setState({ body });
  }

  postMessage(e) {
    e.preventDefault();

    PostMessageMutation.commit(
      this.props.relay.environment,
      this.props.viewer,
      this.state.body,
    );

    this.setState({ body: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.postMessage.bind(this)}>
          <input
            type="text"
            placeholder="what's up?"
            value={this.state.body}
            onChange={this.updateDraftBody.bind(this)}
          />
        </form>
      </div>
    );
  }
}
