/**
 * @flow
 * @relayHash f5402c53cc3dc1e281810dfeb05a791e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MessagePostedSubscriptionVariables = {| |};
export type MessagePostedSubscriptionResponse = {|
  +messagePosted: {|
    +newMessageEdge: {|
      +node: ?{| |};
    |};
  |};
|};
*/


/*
subscription MessagePostedSubscription {
  messagePosted {
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MessagePostedSubscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "PostedMessage",
        "name": "messagePosted",
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
    "type": "Subscription"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "MessagePostedSubscription",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "MessagePostedSubscription",
    "operation": "subscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "PostedMessage",
        "name": "messagePosted",
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
  "text": "subscription MessagePostedSubscription {\n  messagePosted {\n    newMessageEdge {\n      node {\n        ...MessageItem_message\n        id\n      }\n    }\n  }\n}\n\nfragment MessageItem_message on Message {\n  id\n  body\n  user {\n    name\n    id\n  }\n  createdAt\n}\n"
};

module.exports = batch;
