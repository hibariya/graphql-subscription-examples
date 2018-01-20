Types::SubscriptionType = GraphQL::ObjectType.define do
  name "Subscription"

  field :messagePosted, !Types::PostedMessageType, "A message was posted" do
    subscription_scope :current_user_id
  end
end
