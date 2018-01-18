Types::UserType = GraphQL::ObjectType.define do
  name "User"

  implements GraphQL::Relay::Node.interface
  global_id_field :id

  field :name, !types.String
  connection :messages, Types::MessageType.connection_type, max_page_size: 10 do
    description 'All messages which the user can read'
    resolve -> (obj, args, ctx) {
      Message.order(created_at: :desc)
    }
  end
end
