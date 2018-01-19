Mutations::PostMessageMutation = GraphQL::Relay::Mutation.define do
  name "PostMessageMutation"

  input_field :body, !types.String
  return_field :newMessageEdge, Types::MessageType.edge_type

  resolve -> (obj, args, ctx) {
    message = Message.create!(body: args[:body], user: ctx[:current_user])

    connection = GraphQL::Relay::RelationConnection.new(nil, {})
    message_edge = GraphQL::Relay::Edge.new(message, connection)

    {newMessageEdge: message_edge}
  }
end
