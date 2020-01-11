class Api::AreasController < ApplicationController

  def create
    @location = Location.find_or_create_by(
      name: params[:name],
      latitude: params[:latitude],
      longitude: params[:longitude],
      image: params[:image]
    )
    if @location.save
      render :json => {
        location: @location
      }
    end
  end

  def show
    @location = Location.find params[:id]
    render :json => {
      location: @location
    }
  end

  def update
    @location = Location.find params[:id]
    @location.destroy
  end

end
