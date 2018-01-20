import { graphql, requestSubscription } from 'react-relay';

const subscription = graphql`
  subscription MessagePostedSubscription {
    messagePosted { newMessageEdge { node { ...MessageItem_message } } }
  }
`;

function subscribe(environment, viewer, options = {}) {
  requestSubscription(
    environment,
    {
      subscription,
      variables: {},
      configs: [
        {
          parentID: viewer.id,
          type: 'RANGE_ADD',
          connectionInfo: [{
            key: 'App_messages',
            rangeBehavior: 'prepend',
          }],
          edgeName: 'newMessageEdge',
        },
      ],
      ...options,
    },
  );
}

export default { subscribe };
