import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation PostMessageMutation($input: PostMessageMutationInput!) {
    postMessage(input: $input) {
      newMessageEdge {
        node {
          ...MessageItem_message
        }
      }
    }
  }
`;

function commit(environment, viewer, body, options = {}) {
  const variables = { input: { body } };

  return commitMutation(
    environment,
    {
      mutation,
      variables,
      configs: [
        {
          edgeName: 'newMessageEdge',
          type: 'RANGE_ADD',
          parentID: viewer.id,
          connectionInfo: [{ key: 'App_messages', rangeBehavior: 'prepend' }]
        },
      ],
      ...options,
    },
  );
}

export default { commit };
