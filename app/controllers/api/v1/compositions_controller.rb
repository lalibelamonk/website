module Api::V1
  class CompositionsController < ApiController
    before_action :set_composition, only: [:show, :edit, :update, :destroy]
    skip_before_action :authenticate_request, only: [:index, :show, :create, :update]

    # GET /compositions
    # GET /compositions.json
    def index
      @compositions = Composition.all
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
      @image = Image.create()
      @composition = Composition.create(composition_params)
      render 'show'
    end

    # PATCH/PUT /compositions/1
    # PATCH/PUT /compositions/1.json
    def update
      if @composition.update(composition_params)
        render 'show'
      else
      end
    end

    # DELETE /compositions/1
    # DELETE /compositions/1.json
    def destroy
      @composition.destroy
      head :no_content
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_composition
        @composition = Composition.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def composition_params
        params.require(:composition).permit(:name, :description, :dimension, :materials)
      end
  end
end