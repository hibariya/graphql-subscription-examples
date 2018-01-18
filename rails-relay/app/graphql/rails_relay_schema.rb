RailsRelaySchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query(Types::QueryType)

  id_from_object ->(object, type_definition, query_ctx) {
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  }

  object_from_id ->(id, query_ctx) {
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    klass = type_name.constantize

    return nil unless klass.ancestors.include?(ApplicationRecord)

    klass.find(item_id)
  }

  resolve_type ->(type, obj, ctx) {
    case obj
    when User
      Types::UserType
    when Message
      Types::MessageType
    else
      raise "Unexpected object: #{obj}"
    end
  }
end
