class FirstTestController < ApplicationController
  def index
  end

  def baby
    a = [{a: 1},[b: 2]]
    render :json => a
  end

  def yout
    
  end
end
