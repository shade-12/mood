class Api::MonstersController < ApplicationController

  def create
    @monster = Monster.find_or_create_by(
      name: params[:name],
      task: params[:task],
      image_id: params[:image_id],
      user_id: params[:user_id],
      area_id: params[:area_id],
      done: false
    )

    if @monster.save
      render :json => {
        monster: @monster
      }
    end
  end

  def update
    @monster = Monster.find params[:id]
    @monster.update!(done: true)
  end

  def destroy
    @monster = Monster.find params[:id]
    @monster.destroy
  end

end