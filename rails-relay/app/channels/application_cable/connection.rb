module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def current_user
      User.last or reject_unauthorized_connection
    end
  end
end
