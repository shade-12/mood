class Api::UsersController < ApplicationController

  def create
    @user = User.find_or_create_by(
      name: params[:name],
      password: params[:password],
      no_of_hearts: 0,
      joy_level: 0
    )

    if @user.save
      render :json => {
        user: @user
      }
    end
  end

  def show
    @user = User.find params[:id]
    render :json => {
      user: @user
    }
  end

  def update
    @user = User.find params[:id]
    if params[:reusable_spotify_playlist_id].present?
      @user.update!(reusable_spotify_playlist_id: params[:reusable_spotify_playlist_id])
    end
  end

  def getCloseFriends
    @user = User.find params[:user_id]
    @playlists = @user.playlists
    @locations = Array.new

    @playlists.each do |playlist|
      @locations << Location.find(playlist.location_id)
    end

    render :json => {
      playlists: @playlists,
      locations: @locations
    }
  end
end