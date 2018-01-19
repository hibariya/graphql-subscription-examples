Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :node, GraphQL::Relay::Node.field
  field :nodes, GraphQL::Relay::Node.plural_field

  field :viewer, Types::UserType do
    description 'Represents the logged-in user (This may be redundant for Relay Modern)'
    resolve -> (_, _, ctx) {
      ctx[:current_user]
    }
  end
end
