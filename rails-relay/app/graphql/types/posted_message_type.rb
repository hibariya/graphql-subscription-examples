Types::PostedMessageType = GraphQL::ObjectType.define do
  name "PostedMessage"

  field :newMessageEdge, !Types::MessageType.edge_type do
    resolve -> (obj, args, ctx) {
      connection = GraphQL::Relay::RelationConnection.new(nil, {})

      GraphQL::Relay::Edge.new(obj, connection)
    }
  end
end
