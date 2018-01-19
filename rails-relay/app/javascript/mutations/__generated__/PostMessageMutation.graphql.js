/**
 * @flow
 * @relayHash 32c3be087438a7ff1d46140b9412348a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type PostMessageMutationVariables = {|
  input: {
    body: string;
    clientMutationId?: ?string;
  };
|};
export type PostMessageMutationResponse = {|
  +postMessage: ?{|
    +newMessageEdge: ?{|
      +node: ?{| |};
    |};
  |};
|};
*/


/*
mutation PostMessageMutation(
  $input: PostMessageMutationInput!
) {
  postMessage(input: $input) {
    newMessageEdge {
      node {
        ...MessageItem_message
        id
      }
    }
  }
}

fragment MessageItem_message on Message {
  id
  body
  user {
    name
    id
  }
  createdAt
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "PostMessageMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostMessageMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "PostMessageMutationInput!"
          }
        ],
        "concreteType": "PostMessageMutationPayload",
        "name": "postMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MessageEdge",
            "name": "newMessageEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Message",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "MessageItem_message",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "PostMessageMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "PostMessageMutationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "PostMessageMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "PostMessageMutationInput!"
          }
        ],
        "concreteType": "PostMessageMutationPayload",
        "name": "postMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MessageEdge",
            "name": "newMessageEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Message",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "body",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "createdAt",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation PostMessageMutation(\n  $input: PostMessageMutationInput!\n) {\n  postMessage(input: $input) {\n    newMessageEdge {\n      node {\n        ...MessageItem_message\n        id\n      }\n    }\n  }\n}\n\nfragment MessageItem_message on Message {\n  id\n  body\n  user {\n    name\n    id\n  }\n  createdAt\n}\n"
};

module.exports = batch;
