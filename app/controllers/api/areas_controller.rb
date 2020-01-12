class Api::AreasController < ApplicationController
  def create
    @area = Area.find_or_create_by(
      name: params[:name],
      latitude: params[:latitude],
      longitude: params[:longitude],
      image: params[:image]
    )
    if @area.save
      render :json => {
        area: @area
      }
    end
  end

  def show
    @area = Area.find params[:id]
    render :json => {
      area: @area
    }
  end

  def update
    @area = Area.find params[:id]
    @area.destroy
  end

end
