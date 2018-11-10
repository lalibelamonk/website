module Api::V1
  class ImagesController < ApiController
    skip_before_action :authenticate_request, only: [:index, :show]

    # GET /images
    # GET /images.json
    def index
      @images = Image.all
    end

    # GET /images/1
    # GET /images/1.json
    def show
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_image
        @image = Image.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def image_params
        params.require(:image).permit(:name, :description, :file)
      end
  end
end