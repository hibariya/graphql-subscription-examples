Types::MessageType = GraphQL::ObjectType.define do
  name "Message"

  implements GraphQL::Relay::Node.interface
  global_id_field :id

  field :user, !Types::UserType
  field :body, !types.String
  field :createdAt, !types.String do
    resolve -> (obj, args, ctx) {
      obj.created_at.iso8601
    }
  end
end
