
require 'pry'
class UsersController < ApplicationController
  def index
    render json:{message:"User logged in "}
  end

  def login
    #fix user object to include only necessary attributes
    @user = User.find_by(username:params[:user][:username])

    if @user
      session[:user_id] = @user.id
      render json:{message:"Success",username:@user.username,user_id:@user.id,user:@user,role:"user"}
    else
      render json:{message:"Error"}
    end
  end
  def register

    @user = User.new(user_params)
    #binding.pry
    if @user.valid?
      @user.save
      render json:{message:"Success"}
    else
      render json:{message:"Error"}
    end

  end


  def auto_login

  end

  private
  def user_params
    params.require(:user).permit(:username,:password)
  end
end
