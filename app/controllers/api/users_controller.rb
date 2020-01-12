class Api::UsersController < ApplicationController

  def create
    @user = User.find_or_create_by(
      name: params[:name],
      password: params[:password],
      area_id: params[:area_id],
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

  def getUser
    @user = User.find_by_name(params[:name])
    render :json => {
      user: @user
    }
  end

  def getCloseFriends
    @user = User.find params[:user_id]
    @closefriendids = @user.closefriends
    @closefriends = Array.new

    @closefriendids.each do |friend|
      @closefriends << User.find(friend.user_id_2)
    end

    render :json => {
      closefriends: @closefriends
    }
  end

  def updateHearts
    @user = User.find params[:user_id]
    @hearts = @user.no_of_hearts + 1
    @user.update!(no_of_hearts: @hearts)
  end

  def updateJoyLevel
    @user = User.find params[:user_id]
    @level = @user.joy_level + 1
    @user.update!(joy_level: @level)
  end

  def getMonsters
    @user = User.find params[:user_id]
    @monster = @user.monsters

    render :json => {
      monsters: @monsters
    }
  end

  def updateArea
    @user = User.find params[:user_id]
    @user.update!(area_id: Area.find(params[:area_id]))
  end

end
