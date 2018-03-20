class SpecialistsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_specialist, only: [:edit, :update, :destroy]

  def index
    @specialists = Specialist.all
  end

  def new
    @specialist = Specialist.new
  end

  def edit
  end

  def create
    @specialist = Specialist.new(specialist_params)

    if @specialist.save
      redirect_to specialists_path, notice: 'Specialist was successfully created.'
    else
      render :new
    end
  end

  def update
    # render plain: params[:specialist].inspect
    if @specialist.update(specialist_params)

      redirect_to specialists_path, notice: 'Specialist was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @specialist.destroy
    redirect_to specialists_url, notice: 'Specialist was successfully destroyed.'
  end

  private
    def set_specialist
      @specialist = Specialist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def specialist_params
      params.require(:specialist).permit(:name, :photo, :service, :yid, :weight, :city, :remove_photo)
    end
end
