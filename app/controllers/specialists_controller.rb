class SpecialistsController < ApplicationController
  before_action :set_specialist, only: [:show, :edit, :update, :destroy]

  # GET /specialists
  def index
    @specialists = Specialist.all
  end

  # GET /specialists/new
  def new
    @specialist = Specialist.new
  end

  # GET /specialists/1/edit
  def edit
  end

  # POST /specialists
  def create
    @specialist = Specialist.new(specialist_params)

    if @specialist.save
      redirect_to specialists_path, notice: 'Specialist was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /specialists/1
  def update
    # render plain: params[:specialist].inspect
    if @specialist.update(specialist_params)

      redirect_to specialists_path, notice: 'Specialist was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /specialists/1
  def destroy
    @specialist.destroy
    redirect_to specialists_url, notice: 'Specialist was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_specialist
      @specialist = Specialist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def specialist_params
      params.require(:specialist).permit(:name, :photo, :service, :quote, :city, :remove_photo)
    end
end
