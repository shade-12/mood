class Api::ClosefriendsController < ApplicationController

  def create
    @closefriend = Closefriend.find_or_create_by(
      user_id_1: params[:user_id_1],
      user_id_2: params[:user_id_2]
    )

    if @closefriend.save
      render :json => {
        closefriend: @closefriend
      }
    end
  end

  def destroy
    @closefriend = Closefriend.find params[:id]
    @closefriend.destroy
  end

end