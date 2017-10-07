module Api::V1
  class CompositionsController < ApiController
    before_action :set_composition, only: [:show, :edit, :update, :destroy]
    skip_before_action :authenticate_request, only: [:index, :show]

    # GET /compositions
    # GET /compositions.json
    def index
      @compositions = Composition.all
      # dummy data for now
      #(1..10).each do |num|
      #  comp = Composition.new(:name => "test #{num}", :image => "http://samanthaannsportfolio.weebly.com/uploads/1/0/4/9/10497850/9222152_orig.jpg")
      #  @compositions.push(comp)
      #end
    end

    # GET /compositions/1
    # GET /compositions/1.json
    def show
    end

    # GET /compositions/new
    def new
      @composition = Composition.new
    end

    # GET /compositions/1/edit
    def edit
    end

    # POST /compositions
    # POST /compositions.json
    def create
      @composition = Composition.create(composition_params)
      render 'show'
    end

    # PATCH/PUT /compositions/1
    # PATCH/PUT /compositions/1.json
    def update
      respond_to do |format|
        if @composition.update(composition_params)
          format.html { redirect_to @composition, notice: 'Composition was successfully updated.' }
          format.json { render :show, status: :ok, location: @composition }
        else
          format.html { render :edit }
          format.json { render json: @composition.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /compositions/1
    # DELETE /compositions/1.json
    def destroy
      @composition.destroy
      respond_to do |format|
        format.html { redirect_to compositions_url, notice: 'Composition was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_composition
        @composition = Composition.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def composition_params
        params.require(:composition).permit(:name, :description, :dimension, :materials, :image)
      end
  end
end