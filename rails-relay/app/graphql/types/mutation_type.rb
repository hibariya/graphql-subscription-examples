Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :postMessage, Mutations::PostMessageMutation.field
end
