Mutations::PostMessageMutation = GraphQL::Relay::Mutation.define do
  name "PostMessageMutation"

  input_field :body, !types.String
  return_field :newMessageEdge, Types::MessageType.edge_type

  resolve -> (obj, args, ctx) {
    message = Message.create!(body: args[:body], user: ctx[:current_user])
    message_edge = GraphQL::Relay::Edge.new(
      message,
      GraphQL::Relay::RelationConnection.new(nil, {})
    )

    User.all.each do |user|
      RailsRelaySchema.subscriptions.trigger 'messagePosted', {}, message, scope: user.id
    end

    {newMessageEdge: message_edge}
  }
end
