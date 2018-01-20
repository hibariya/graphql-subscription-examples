import 'babel-polyfill';

import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import ActionCable from 'actioncable';
import createHandler from 'graphql-ruby-client/subscriptions/createHandler';

import './styles/application.sass';
import AppMain from './AppMain';

const subscriptionHandler = createHandler({
  cable: ActionCable.createConsumer('/cable'),
});

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: operation.text, variables }),
  };

  return fetch('/graphql', request).then(response => response.json());
}

const Loading = () => <div>Loading...</div>;

interface AppState {
  relayEnvironment: any;
}

export default class extends Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = { relayEnvironment: this.createRelayEnvironment() };
  }

  createRelayEnvironment() {
    return new Environment({
      network: Network.create(fetchQuery, subscriptionHandler),
      store: new Store(new RecordSource()),
    });
  }

  render() {
    return (
      <QueryRenderer
        environment={this.state.relayEnvironment}
        query={graphql`
          query AppQuery {
            viewer { ...AppMain_viewer }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return <AppMain viewer={props.viewer} />;
          } else {
            return <Loading />;
          }
        }}
      />
    );
  }
}
