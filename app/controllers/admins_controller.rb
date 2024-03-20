class AdminsController < ApplicationController
  def register

    @admin = Admin.new(admin_params)
    #binding.pry
    if @admin.valid?
      @admin.save
      render json:{message:"Success"}
    else
      render json:{message:"Error"}
    end

  end

  def login
    @admin = Admin.find_by(username:params[:admin][:username])
    #binding.pry
    if @admin && @admin.authenticate(params[:admin][:password])
      session[:user_id] = @admin.id
      render json:{message:"Success",admin:@admin.id,role:"admin",username:@admin.username}
    else
      render json:{message:"Error"}
    end
  end


  private
  def admin_params
    params.require(:admin).permit(:username,:password)
  end
end
