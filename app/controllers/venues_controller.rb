class VenuesController < ApplicationController
  def index
    @venues = Venue.all
    render json:{venues:@venues}
  end
end
