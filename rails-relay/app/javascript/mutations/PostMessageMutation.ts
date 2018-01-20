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
      updater: () => {}, // NOP here as the created resource is delivered by subscription
      ...options,
    },
  );
}

export default { commit };
