/**
 * @flow
 * @relayHash a97b13158a7e36679ae74c82b308efde
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query AppQuery {
  viewer {
    ...AppMain_viewer
    id
  }
}

fragment AppMain_viewer on User {
  id
  name
  ...MessageList_viewer
}

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

fragment MessageItem_message on Message {
  id
  body
  user {
    name
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AppMain_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
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
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
            "concreteType": "MessageConnection",
            "name": "messages",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "MessageEdge",
                "name": "edges",
                "plural": true,
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "messages{\"first\":10}"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppQuery {\n  viewer {\n    ...AppMain_viewer\n    id\n  }\n}\n\nfragment AppMain_viewer on User {\n  id\n  name\n  ...MessageList_viewer\n}\n\nfragment MessageList_viewer on User {\n  messages(first: 10) {\n    edges {\n      node {\n        id\n        ...MessageItem_message\n      }\n    }\n  }\n}\n\nfragment MessageItem_message on Message {\n  id\n  body\n  user {\n    name\n    id\n  }\n}\n"
};

module.exports = batch;
