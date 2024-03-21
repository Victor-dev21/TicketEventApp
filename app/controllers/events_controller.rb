class EventsController < ApplicationController

  def index
    @admin = Admin.find(params[:admin])

    if @admin
      @events = @admin.events
      render json:{message:"Success",events:@events}
    else
      render json:{message:"Error"}
    end

  end

  def create

    @event = Event.new()
    name = params[:eventInformation][:name]
    venue = Venue.find(params[:eventInformation][:venue])
    category = Category.find(params[:eventInformation][:category])
    @event.name = name
    @event.venue = venue
    @event.category = category
    @event.location = venue.location
    @event.ticket_quantity = venue.capacity
    @event.ticket_availability = venue.capacity
    @event.date = params[:eventInformation][:date]
    @event.admin = Admin.find(params[:eventInformation][:token])
    @event.status = "Scheduled"
    @event.venue_name = venue.name
    @event.category_name = category.name
    @event.location_name = venue.location.name
    if @event.valid?
      @event.save
      render json:{message:"Success"}
    else
      render json:{message:"Error"}
    end

  end

  def event_params

  end
end
